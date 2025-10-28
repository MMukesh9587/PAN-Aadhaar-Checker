import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Online PAN-Aadhaar Link Checker (Unofficial)',
  description: 'Check your PAN-Aadhaar linking status instantly with this unofficial tool. Verify if your PAN is linked with Aadhaar for educational and demo purposes. Keywords: check pan aadhaar link, pan aadhaar status, pan aadhaar link checker online, Unofficial PAN-Aadhaar Checker.',
  keywords: "check pan aadhaar link, pan aadhaar status, pan aadhaar link checker online, Unofficial PAN-Aadhaar Checker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
