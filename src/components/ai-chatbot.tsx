'use client';

import { useState } from 'react';
import { Bot, Link as LinkIcon, Loader2, Sparkles } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { errorResolutionChatbot, type ErrorResolutionOutput } from '@/ai/flows/error-resolution-chatbot';

type AIChatbotProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  errorMessage: string;
};

export function AIChatbot({ open, setOpen, errorMessage }: AIChatbotProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ErrorResolutionOutput | null>(null);
  const [aiError, setAiError] = useState<string | null>(null);

  const getHelp = async () => {
    setLoading(true);
    setAiError(null);
    setResult(null);
    try {
      const res = await errorResolutionChatbot({ errorMessage });
      setResult(res);
    } catch (error) {
      console.error('AI Chatbot Error:', error);
      setAiError('The AI assistant is currently unavailable. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-headline">
            <Bot className="h-6 w-6" /> AI Troubleshooting
          </DialogTitle>
          <DialogDescription>
            Let our AI assistant help you understand and resolve the error.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Error message:</p>
            <p className="text-sm p-3 bg-muted rounded-md font-mono">{errorMessage}</p>
          </div>

          {result && (
            <div className="space-y-3 rounded-lg border bg-background p-4">
              <h3 className="font-semibold flex items-center gap-2 text-accent">
                <Sparkles className="h-5 w-5" />
                AI Suggestion
              </h3>
              <p className="text-sm text-foreground/90">{result.resolutionSuggestion}</p>
              {result.resourceLink && (
                <Button variant="link" asChild className="p-0 h-auto">
                  <a href={result.resourceLink} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Visit Resource
                  </a>
                </Button>
              )}
            </div>
          )}

          {aiError && (
             <Alert variant="destructive">
               <AlertTitle>Error</AlertTitle>
               <AlertDescription>{aiError}</AlertDescription>
             </Alert>
          )}

        </div>
        <DialogFooter>
          <Button onClick={() => getHelp()} disabled={loading} className="w-full sm:w-auto">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
                <>
                <Sparkles className="mr-2 h-4 w-4" />
                {result ? 'Get Another Suggestion' : 'Get Help'}
                </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
