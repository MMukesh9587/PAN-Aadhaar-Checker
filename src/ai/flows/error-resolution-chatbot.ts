'use server';

/**
 * @fileOverview This file defines a Genkit flow for an error resolution chatbot that analyzes error messages and suggests troubleshooting steps or resources to resolve the issue.
 *
 * - errorResolutionChatbot - A function that handles the error resolution process.
 * - ErrorResolutionInput - The input type for the errorResolutionChatbot function.
 * - ErrorResolutionOutput - The return type for the errorResolutionChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ErrorResolutionInputSchema = z.object({
  errorMessage: z.string().describe('The error message to analyze.'),
});

export type ErrorResolutionInput = z.infer<typeof ErrorResolutionInputSchema>;

const ErrorResolutionOutputSchema = z.object({
  resolutionSuggestion: z.string().describe('A suggestion for resolving the error.'),
  resourceLink: z.string().optional().describe('A link to a resource that can help resolve the error.'),
});

export type ErrorResolutionOutput = z.infer<typeof ErrorResolutionOutputSchema>;

export async function errorResolutionChatbot(input: ErrorResolutionInput): Promise<ErrorResolutionOutput> {
  return errorResolutionChatbotFlow(input);
}

const errorResolutionPrompt = ai.definePrompt({
  name: 'errorResolutionPrompt',
  input: {schema: ErrorResolutionInputSchema},
  output: {schema: ErrorResolutionOutputSchema},
  prompt: `You are a chatbot that helps users resolve errors encountered while checking their PAN-Aadhaar linking status.
  Analyze the following error message and provide a suggestion for resolving the issue. If possible, provide a link to a resource that can help the user resolve the error.

  Error message: {{{errorMessage}}}

  Format your response as follows:
  Resolution Suggestion: [suggestion]
  Resource Link: [link] (Optional)
`,
});

const errorResolutionChatbotFlow = ai.defineFlow(
  {
    name: 'errorResolutionChatbotFlow',
    inputSchema: ErrorResolutionInputSchema,
    outputSchema: ErrorResolutionOutputSchema,
  },
  async input => {
    const {output} = await errorResolutionPrompt(input);
    return output!;
  }
);
