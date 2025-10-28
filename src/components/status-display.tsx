'use client';

import { useState } from 'react';
import { CheckCircle2, XCircle, AlertTriangle, Clock, Bot } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { LinkStatusResult } from '@/lib/definitions';
import { AIChatbot } from './ai-chatbot';

type StatusDisplayProps = {
  result: LinkStatusResult;
};

const statusConfig = {
  Linked: {
    icon: CheckCircle2,
    title: 'Status: Linked',
    color: 'text-[hsl(var(--chart-2))]',
    bgColor: 'bg-[hsl(var(--chart-2)/0.1)]',
    borderColor: 'border-[hsl(var(--chart-2)/0.2)]',
  },
  'Not Linked': {
    icon: XCircle,
    title: 'Status: Not Linked',
    color: 'text-destructive',
    bgColor: 'bg-destructive/10',
    borderColor: 'border-destructive/20',
  },
  Pending: {
    icon: Clock,
    title: 'Status: Pending',
    color: 'text-[hsl(var(--chart-4))]',
    bgColor: 'bg-[hsl(var(--chart-4)/0.1)]',
    borderColor: 'border-[hsl(var(--chart-4)/0.2)]',
  },
  Error: {
    icon: AlertTriangle,
    title: 'Status: Error',
    color: 'text-destructive',
    bgColor: 'bg-destructive/10',
    borderColor: 'border-destructive/20',
  },
};

export function StatusDisplay({ result }: StatusDisplayProps) {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  if (!result.status) return null;

  const config = statusConfig[result.status];
  const Icon = config.icon;

  return (
    <>
      <Card className={cn(
        "transition-all duration-500 ease-in-out animate-in fade-in zoom-in-95", 
        config.bgColor, 
        config.borderColor
      )}>
        <CardHeader>
          <CardTitle className={cn("flex items-center gap-3 text-lg font-headline", config.color)}>
            <Icon className="h-8 w-8" />
            <span>{config.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <p className="text-sm text-foreground/80">{result.message}</p>
            {result.pan && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="secondary" className="w-20 justify-center">PAN</Badge>
                    <span className="font-mono tracking-wider">{result.pan}</span>
                </div>
            )}
            {result.aadhaar && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="secondary" className="w-20 justify-center">Aadhaar</Badge>
                    <span className="font-mono tracking-wider">{result.aadhaar}</span>
                </div>
            )}
            {result.status === 'Error' && (
              <div className="pt-2">
                  <Button onClick={() => setIsChatbotOpen(true)} variant="destructive" size="sm">
                      <Bot className="mr-2 h-4 w-4" />
                      Troubleshoot with AI
                  </Button>
              </div>
            )}
        </CardContent>
      </Card>

      {result.status === 'Error' && (
        <AIChatbot
          open={isChatbotOpen}
          setOpen={setIsChatbotOpen}
          errorMessage={result.message}
        />
      )}
    </>
  );
}
