
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, MessageSquareText, MousePointerClick, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'पैन-आधार लिंकिंग स्टेटस ऑनलाइन चेक करें | Check PAN-Aadhaar Link Status (Unofficial)',
  description: 'अपने पैन कार्ड का आधार से लिंकिंग स्टेटस तुरंत ऑनलाइन और SMS के माध्यम से जांचें। यह एक अनौपचारिक टूल है जो आपको पैन-आधार लिंकिंग की स्थिति जानने में मदद करता है।',
  keywords: 'pan aadhaar link status, check pan aadhaar status, pan aadhaar link online, पैन आधार लिंक स्टेटस, पैन आधार लिंक कैसे चेक करें, unofficial pan aadhaar checker, pan aadhaar link, aadhaar pan link',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'पैन-आधार लिंकिंग स्टेटस ऑनलाइन चेक करें | Unofficial PAN-Aadhaar Link Checker',
    description: 'जानें कि ऑनलाइन और SMS के माध्यम से अपने पैन कार्ड को आधार से लिंक करने की स्थिति की जाँच कैसे करें।',
    url: '/',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1614741118884-85348d3b798b?w=1080&q=80&fit=max',
        width: 1080,
        height: 720,
        alt: 'PAN and Aadhaar cards on a desk',
      },
    ],
  }
};


export default function Home() {

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
          <div className="flex items-center gap-1 sm:gap-2">
            <Button variant="ghost" asChild>
              <Link href="/blog">Blog</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex min-h-dvh w-full flex-col items-center bg-background p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-4xl mx-auto">
          <header className="text-center my-8 md:my-12">
            <h1 className="font-headline text-3xl sm:text-4xl font-bold tracking-tighter text-primary md:text-5xl">
              PAN-Aadhaar लिंकिंग स्टेटस कैसे चेक करें?
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground sm:text-base md:text-lg">
              जानें ऑनलाइन और SMS के माध्यम से अपने पैन कार्ड को आधार से लिंक करने की स्थिति की जाँच करने के आसान तरीके।
            </p>
          </header>

          <article className="space-y-8">

             <div className="prose prose-lg dark:prose-invert max-w-none text-center">
              <p>
                भारत सरकार ने टैक्स चोरी को रोकने और वित्तीय प्रणाली में पारदर्शिता लाने के लिए सभी नागरिकों के लिए अपने पैन कार्ड को आधार कार्ड से लिंक करना अनिवार्य कर दिया है। यदि आपका पैन आधार से लिंक नहीं है, तो यह निष्क्रिय हो सकता है, जिससे आपको ITR फाइलिंग, बैंक लेनदेन और अन्य वित्तीय कार्यों में समस्याओं का सामना करना पड़ सकता है। इसलिए, यह जांचना महत्वपूर्ण है कि आपका पैन और आधार लिंक हैं या नहीं।
              </p>
            </div>

            <Card className="overflow-hidden shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-xl sm:text-2xl">
                  <MousePointerClick className="h-7 w-7 text-accent" />
                  विधि 1: आधिकारिक वेबसाइट के माध्यम से
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90">
                <p>
                  आप आयकर विभाग (Income Tax Department) की आधिकारिक ई-फाइलिंग वेबसाइट पर जाकर आसानी से अपना पैन-आधार लिंकिंग स्टेटस देख सकते हैं। यह सबसे सरल और विश्वसनीय तरीका है। नीचे दिए गए स्टेप्स का पालन करें:
                </p>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li>सबसे पहले आयकर विभाग की आधिकारिक ई-फाइलिंग वेबसाइट पर जाएं।</li>
                  <li>होम पेज पर 'Quick Links' (त्वरित लिंक्स) सेक्शन में जाएं और 'Link Aadhaar Status' पर क्लिक करें।</li>
                  <li>एक नया पेज खुलेगा जहाँ आपको अपना 10 अंकों का PAN नंबर और 12 अंकों का Aadhaar नंबर दर्ज करना होगा।</li>
                  <li>दोनों विवरण सही-सही भरने के बाद, 'View Link Aadhaar Status' बटन पर क्लिक करें।</li>
                  <li>अगली स्क्रीन पर आपका लिंकिंग स्टेटस तुरंत दिख जाएगा। यदि वे लिंक हैं, तो "Your PAN is already linked to given Aadhaar" जैसा संदेश दिखाई देगा। यदि नहीं, तो आपको "PAN not linked with Aadhaar" जैसा संदेश मिलेगा।</li>
                </ol>
                <div className="pt-4">
                  <Button asChild>
                    <a href="https://eportal.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status" target="_blank" rel="noopener noreferrer">
                      ऑफिशियल वेबसाइट पर स्टेटस चेक करें
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-xl sm:text-2xl">
                  <MessageSquareText className="h-7 w-7 text-accent" />
                  विधि 2: SMS भेजकर
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90">
                <p>
                  यदि आपके पास इंटरनेट की सुविधा नहीं है या आप वेबसाइट का उपयोग नहीं करना चाहते हैं, तो आप SMS के माध्यम से भी अपना पैन-आधार लिंकिंग स्टेटस जान सकते हैं। यह प्रक्रिया भी बहुत आसान है।
                </p>
                <div className="p-4 bg-muted rounded-md font-mono text-sm break-words">
                  <p className="font-bold">SMS फॉर्मेट:</p>
                  <p>UIDPAN &lt;12 अंकों का आधार नंबर&gt; &lt;10 अंकों का पैन नंबर&gt;</p>
                </div>
                <p>
                  इस SMS को अपने रजिस्टर्ड मोबाइल नंबर से <strong>567678</strong> या <strong>56161</strong> पर भेज दें।
                </p>
                <p>
                  उदाहरण के लिए: यदि आपका आधार नंबर 123456789012 है और पैन नंबर ABCDE1234F है, तो आप SMS इस तरह भेजेंगे:
                </p>
                <div className="p-4 bg-muted rounded-md font-mono text-sm break-words">
                  <p>UIDPAN 123456789012 ABCDE1234F</p>
                </div>
                <p>
                  SMS भेजने के कुछ ही देर बाद, आपको एक जवाबी SMS प्राप्त होगा जिसमें आपके लिंकिंग की स्थिति (linked or not linked) के बारे में जानकारी दी जाएगी।
                </p>
              </CardContent>
            </Card>
          </article>
            
          <div className="text-center py-6 mt-8 text-sm text-muted-foreground">
            <p><strong>अस्वीकरण (Disclaimer):</strong> यह एक अनौपचारिक गाइड है और केवल सूचनात्मक उद्देश्यों के लिए है। कृपया हमेशा आधिकारिक आयकर विभाग की वेबसाइट से जानकारी की पुष्टि करें।</p>
          </div>
        </div>
      </main>
      <footer className="w-full bg-card border-t">
        <div className="max-w-5xl mx-auto py-4 px-4 text-center text-sm text-muted-foreground">
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
