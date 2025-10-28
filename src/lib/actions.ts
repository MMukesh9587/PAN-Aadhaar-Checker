'use server';

import { z } from 'zod';
import { LinkStatusSchema } from '@/lib/validators';
import type { LinkStatusResult } from '@/lib/definitions';

// This is a simulated API check. In a real application, you would make a fetch request to a government API.
export async function checkLinkStatus(
  formData: FormData
): Promise<LinkStatusResult> {
  try {
    const validatedFields = LinkStatusSchema.safeParse({
      pan: formData.get('pan'),
      aadhaar: formData.get('aadhaar'),
    });

    if (!validatedFields.success) {
      const errorMessages = validatedFields.error.errors.map(e => e.message).join(' ');
      return {
        status: 'Error',
        message: `Invalid input: ${errorMessages}`,
      };
    }

    const { pan, aadhaar } = validatedFields.data;

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate different API responses based on input
    const lastAadhaarDigit = parseInt(aadhaar.slice(-1));

    if ([0, 1, 2, 3].includes(lastAadhaarDigit)) {
      return { status: 'Linked', message: 'Your PAN and Aadhaar are successfully linked.', pan, aadhaar };
    } else if ([4, 5, 6].includes(lastAadhaarDigit)) {
      return { status: 'Not Linked', message: 'Your PAN and Aadhaar are not linked. Please visit the e-Filing portal to link them.', pan, aadhaar };
    } else if ([7, 8].includes(lastAadhaarDigit)) {
      return { status: 'Pending', message: 'Your Aadhaar-PAN linking request has been sent to UIDAI for validation. Please check the status later.', pan, aadhaar };
    } else {
      // Simulate a service error
      return { status: 'Error', message: 'Service Unavailable. The linking status check service is temporarily down. Please try again later. (Code: 503)', pan, aadhaar };
    }
  } catch (error) {
    return {
      status: 'Error',
      message: 'An unexpected error occurred. Please try again.',
    };
  }
}
