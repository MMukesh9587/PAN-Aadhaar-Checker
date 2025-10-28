
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { ShieldCheck, FileText } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for the Unofficial PAN-Aadhaar Checker website.',
};

export default function PrivacyPolicyPage() {
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
              गोपनीयता नीति (Privacy Policy)
            </h1>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <p>यह गोपनीयता नीति हमारी वेबसाइट का उपयोग करते समय आपकी जानकारी के संग्रह, उपयोग और प्रकटीकरण पर हमारी नीतियों और प्रक्रियाओं का वर्णन करती है और आपको आपके गोपनीयता अधिकारों और कानून द्वारा आपकी सुरक्षा के बारे में बताती है।</p>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">जानकारी का संग्रह और उपयोग</h2>
          <p>हमारी सेवा का उपयोग करते समय, हम आपको कुछ व्यक्तिगत रूप से पहचान योग्य जानकारी प्रदान करने के लिए कह सकते हैं जिसका उपयोग आपसे संपर्क करने या पहचानने के लिए किया जा सकता है। व्यक्तिगत रूप से पहचान योग्य जानकारी में शामिल हो सकते हैं, लेकिन यह इन्हीं तक सीमित नहीं है:</p>
          <ul className="list-disc space-y-2 pl-5">
              <li>PAN (स्थायी खाता संख्या)</li>
              <li>Aadhaar Number</li>
          </ul>
          <p>यह जानकारी केवल आपके द्वारा अनुरोधित सेवा (जैसे पैन-आधार लिंकिंग स्थिति की जांच) प्रदान करने के उद्देश्य से उपयोग की जाती है। हम इस जानकारी को संग्रहीत नहीं करते हैं।</p>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">लॉग डेटा</h2>
          <p>जब भी आप हमारी सेवा पर जाते हैं तो आपका ब्राउज़र जो जानकारी भेजता है, हम उसे एकत्र करते हैं। इस लॉग डेटा में आपके कंप्यूटर का इंटरनेट प्रोटोकॉल ("आईपी") पता, ब्राउज़र प्रकार, ब्राउज़र संस्करण, हमारी सेवा के वे पृष्ठ जिन्हें आप देखते हैं, आपकी यात्रा का समय और तारीख, उन पृष्ठों पर बिताया गया समय और अन्य आंकड़े जैसी जानकारी शामिल हो सकती है।</p>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">कुकीज़ (Cookies)</h2>
          <p>कुकीज़ छोटी मात्रा में डेटा वाली फाइलें होती हैं, जिनमें एक अनाम विशिष्ट पहचानकर्ता शामिल हो सकता है। कुकीज़ एक वेबसाइट से आपके ब्राउज़र पर भेजी जाती हैं और आपके कंप्यूटर की हार्ड ड्राइव पर संग्रहीत होती हैं। हम जानकारी एकत्र करने के लिए "कुकीज़" का उपयोग करते हैं। आप अपने ब्राउज़र को सभी कुकीज़ को अस्वीकार करने या कुकी भेजे जाने पर इंगित करने का निर्देश दे सकते हैं।</p>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">सुरक्षा</h2>
          <p>आपकी व्यक्तिगत जानकारी की सुरक्षा हमारे लिए महत्वपूर्ण है, लेकिन याद रखें कि इंटरनेट पर प्रसारण का कोई भी तरीका या इलेक्ट्रॉनिक भंडारण का कोई भी तरीका 100% सुरक्षित नहीं है। जबकि हम आपकी व्यक्तिगत जानकारी की सुरक्षा के लिए व्यावसायिक रूप से स्वीकार्य साधनों का उपयोग करने का प्रयास करते हैं, हम इसकी पूर्ण सुरक्षा की गारंटी नहीं दे सकते।</p>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">इस गोपनीयता नीति में परिवर्तन</h2>
          <p>हम समय-समय पर अपनी गोपनीयता नीति को अपडेट कर सकते हैं। हम आपको इस पृष्ठ पर नई गोपनीयता नीति पोस्ट करके किसी भी परिवर्तन के बारे में सूचित करेंगे।</p>
          
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
