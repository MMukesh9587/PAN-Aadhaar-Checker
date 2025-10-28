import { z } from 'zod';

export const LinkStatusSchema = z.object({
  pan: z.string({ required_error: "PAN is required."})
    .trim()
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN format. Use 5 letters, 4 numbers, 1 letter.'),
  aadhaar: z.string({ required_error: "Aadhaar is required."})
    .trim()
    .regex(/^[0-9]{12}$/, 'Aadhaar must be a 12-digit number.'),
});

export type LinkStatusFormValues = z.infer<typeof LinkStatusSchema>;
