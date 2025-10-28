
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { ShieldCheck, FileText } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions for using the Unofficial PAN-Aadhaar Checker website.',
};

export default function TermsAndConditionsPage() {
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
    <main className="flex w-full flex-col items-center bg-background p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center my-8 md:my-12">
            <h1 className="font-headline text-3xl sm:text-4xl font-bold tracking-tighter text-primary md:text-5xl">
              नियम और शर्तें (Terms and Conditions)
            </h1>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <p>कृपया हमारी वेबसाइट का उपयोग करने से पहले इन नियमों और शर्तों को ध्यान से पढ़ें।</p>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">स्वीकृति</h2>
          <p>ये नियम और शर्तें इस सेवा के उपयोग और आपके और वेबसाइट के बीच लागू होने वाले समझौते को निर्धारित करती हैं। ये नियम और शर्तें सेवा के उपयोग के संबंध में सभी उपयोगकर्ताओं के अधिकारों और दायित्वों को निर्धारित करती हैं।</p>
          <p>सेवा तक आपकी पहुंच और उपयोग इन नियमों और शर्तों के साथ आपकी स्वीकृति और अनुपालन पर निर्भर करता है। ये नियम और शर्तें उन सभी आगंतुकों, उपयोगकर्ताओं और अन्य लोगों पर लागू होती हैं जो सेवा तक पहुंचते हैं या उसका उपयोग करते हैं।</p>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">सेवा का उपयोग</h2>
          <p>आप सहमत हैं कि आप हमारी वेबसाइट का उपयोग केवल वैध उद्देश्यों के लिए करेंगे। हमारी वेबसाइट एक अनौपचारिक उपकरण है और केवल सूचनात्मक उद्देश्यों के लिए है। प्रदान की गई जानकारी की सटीकता की गारंटी नहीं है, और उपयोगकर्ताओं को आधिकारिक सरकारी स्रोतों से जानकारी को सत्यापित करने की सलाह दी जाती है।</p>
          
          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">बौद्धिक संपदा</h2>
          <p>सेवा और इसकी मूल सामग्री, सुविधाएँ और कार्यक्षमता वेबसाइट और उसके लाइसेंसदाताओं की अनन्य संपत्ति है और रहेगी।</p>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">अन्य वेब साइटों के लिंक</h2>
          <p>हमारी सेवा में तृतीय-पक्ष की वेब साइटों या सेवाओं के लिंक हो सकते हैं जो वेबसाइट के स्वामित्व या नियंत्रण में नहीं हैं। वेबसाइट का किसी भी तृतीय-पक्ष की वेब साइटों या सेवाओं की सामग्री, गोपनीयता नीतियों या प्रथाओं पर कोई नियंत्रण नहीं है और वह कोई ज़िम्मेदारी नहीं लेती है।</p>
          
          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">दायित्व की सीमा</h2>
          <p>किसी भी परिस्थिति में वेबसाइट या उसके आपूर्तिकर्ता किसी भी विशेष, आकस्मिक, अप्रत्यक्ष, या परिणामी नुकसान के लिए उत्तरदायी नहीं होंगे। यह एक अनौपचारिक सेवा है और हम प्रदान की गई जानकारी की सटीकता के लिए कोई कानूनी जिम्मेदारी नहीं लेते हैं।</p>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">इन नियमों और शर्तों में परिवर्तन</h2>
          <p>हम किसी भी समय इन शर्तों को संशोधित करने या बदलने का अधिकार, अपने विवेकाधिकार पर, सुरक्षित रखते हैं।</p>

        </article>
      </div>
    </main>
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
