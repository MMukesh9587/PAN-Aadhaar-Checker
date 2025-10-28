
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Users, Info, HelpCircle, Target } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about the Unofficial PAN-Aadhaar Checker project, our mission, and what we do.',
};

export default function AboutPage() {
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
              हमारे बारे में (About Us)
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground sm:text-base md:text-lg">
              पैन-आधार चेकर के मिशन और हमारी टीम के बारे में और जानें।
            </p>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <div className="flex justify-center">
             <Users className="h-24 w-24 text-primary" />
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary flex items-center justify-center gap-3">
            <Target className="h-7 w-7" />
            हमारा मिशन
          </h2>
          <p className="text-center">
            हमारा मिशन भारत के नागरिकों को पैन और आधार से संबंधित जानकारी और सेवाओं तक आसान पहुँच प्रदान करना है। हम जटिल सरकारी प्रक्रियाओं को सरल बनाने और महत्वपूर्ण जानकारी को सुलभ बनाने का प्रयास करते हैं ताकि हर कोई अपने वित्तीय अधिकारों और कर्तव्यों को आसानी से समझ सके।
          </p>
          
          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary flex items-center justify-center gap-3">
            <HelpCircle className="h-7 w-7" />
            यह वेबसाइट क्यों बनाई गई?
          </h2>
          <p>
            हमने देखा कि बहुत से लोगों को पैन और आधार कार्ड से जुड़ी प्रक्रियाओं, जैसे कि लिंकिंग, सुधार, या स्टेटस जांचने में कठिनाई होती है। आधिकारिक वेबसाइटों पर जानकारी अक्सर जटिल भाषा में होती है और उसे समझना मुश्किल हो सकता है। इसी समस्या को हल करने के लिए, हमने यह प्लेटफ़ॉर्म बनाया है जहाँ हम सभी जानकारी को सरल, स्पष्ट और स्टेप-बाय-स्टेप गाइड के रूप में प्रस्तुत करते हैं। हमारा लक्ष्य तकनीकी और गैर-तकनीकी दोनों तरह के उपयोगकर्ताओं के लिए एक विश्वसनीय स्रोत बनना है।
          </p>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary flex items-center justify-center gap-3">
            <Info className="h-7 w-7" />
            हम आपकी कैसे मदद करते हैं?
          </h2>
          <p>
            यह वेबसाइट एक अनौपचारिक सूचना केंद्र के रूप में कार्य करती है। हम निम्नलिखित तरीकों से आपकी मदद करते हैं:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>स्टेटस जांचने की गाइड:</strong> हम आपको पैन-आधार लिंकिंग स्टेटस ऑनलाइन और SMS के माध्यम से जांचने के आसान तरीके बताते हैं।</li>
            <li><strong>विस्तृत ब्लॉग पोस्ट:</strong> हम पैन कार्ड के लिए आवेदन करने, उसमें सुधार करने, e-PAN डाउनलोड करने, और अन्य संबंधित विषयों पर विस्तृत लेख और नवीनतम अपडेट प्रदान करते हैं।</li>
            <li><strong>सरल भाषा:</strong> हमारी सभी गाइड और लेख सरल हिंदी भाषा में लिखे गए हैं ताकि कोई भी उन्हें आसानी से समझ सके।</li>
            <li><strong>एक ही स्थान पर जानकारी:</strong> आपको अलग-अलग वेबसाइटों पर भटकने की जरूरत नहीं है; हम पैन और आधार से जुड़ी सभी महत्वपूर्ण जानकारी एक ही स्थान पर लाने का प्रयास करते हैं।</li>
          </ul>


          <div className="text-center py-6 mt-8 text-sm text-muted-foreground">
            <p><strong>अस्वीकरण (Disclaimer):</strong> यह एक अनौपचारिक वेबसाइट है और इसका भारत सरकार या किसी सरकारी एजेंसी से कोई संबंध नहीं है। हम केवल सूचनात्मक उद्देश्यों के लिए जानकारी और उपकरण प्रदान करते हैं। हमेशा आधिकारिक जानकारी के लिए सरकारी वेबसाइटों को देखें।</p>
          </div>
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
