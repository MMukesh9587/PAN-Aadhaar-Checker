
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="w-full bg-card shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <h2 className="font-headline text-lg sm:text-xl font-bold text-primary">
              <span className="hidden sm:inline">Unofficial </span>PAN-Aadhaar Checker
            </h2>
          </Link>
          <div className="flex items-center gap-1 sm:gap-4">
            <Button variant="ghost" asChild>
                <Link href="/">Home</Link>
            </Button>
            <Button variant="secondary" asChild>
                <Link href="/blog">Blog</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>
      {children}
      <footer className="w-full bg-card border-t">
        <div className="max-w-5xl mx-auto py-6 px-4 text-center text-sm text-muted-foreground">
          <div className="flex justify-center gap-4 mb-4">
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-primary">Terms & Conditions</Link>
          </div>
          <p>© {new Date().getFullYear()} Unofficial PAN-Aadhaar Checker. All Rights Reserved.</p>
           <p className="mt-2">
            For official information, please visit the 
            <a href="https://www.incometax.gov.in/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary ml-1">
              Income Tax Department website
            </a>.
          </p>
        </div>
      </footer>
    </>
  );
}
