import { LinkChecker } from '@/components/link-checker';
import { ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-background p-4">
      <div className="absolute inset-0 z-0 bg-repeat [background-image:radial-gradient(hsl(var(--accent)/.1)_1px,transparent_1px)] [background-size:2rem_2rem]"></div>
      <div className="z-10 flex flex-col items-center text-center">
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10 backdrop-blur-sm">
          <ShieldCheck className="h-12 w-12 text-primary" />
        </div>
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
          Online PAN-Aadhaar Link Checker
        </h1>
        <p className="mt-3 max-w-md text-muted-foreground md:text-lg">
          Verify if your PAN is linked with your Aadhaar. (Unofficial)
        </p>
      </div>

      <LinkChecker />
    </main>
  );
}
