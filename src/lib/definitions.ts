export type LinkStatusResult = {
  status: 'Linked' | 'Not Linked' | 'Pending' | 'Error' | null;
  message: string;
  pan?: string;
  aadhaar?: string;
};
