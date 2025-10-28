import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, MessageSquareText, MousePointerClick, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const blogPosts = PlaceHolderImages.filter(img => img.id.startsWith("blog-"));

  return (
    <>
      <header className="w-full bg-card shadow-sm">
        <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-primary" />
            <h2 className="font-headline text-xl font-bold text-primary">
              Unofficial PAN-Aadhaar Checker
            </h2>
          </div>
        </div>
      </header>
      <main className="flex min-h-dvh w-full flex-col items-center bg-background p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-4xl mx-auto">
          <header className="text-center my-8 md:my-12">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
              PAN-Aadhaar लिंकिंग स्टेटस कैसे चेक करें?
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              जानें ऑनलाइन और SMS के माध्यम से अपने पैन कार्ड को आधार से लिंक करने की स्थिति की जाँच करने के आसान तरीके।
            </p>
          </header>

          <article className="space-y-8">
            <Card className="overflow-hidden shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                  <MousePointerClick className="h-7 w-7 text-accent" />
                  विधि 1: आधिकारिक वेबसाइट के माध्यम से
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90">
                <p>
                  आप आयकर विभाग (Income Tax Department) की आधिकारिक ई-फाइलिंग वेबसाइट पर जाकर आसानी से अपना पैन-आधार लिंकिंग स्टेटस देख सकते हैं। नीचे दिए गए स्टेप्स का पालन करें:
                </p>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                  <li>आयकर विभाग की ई-फाइलिंग वेबसाइट पर जाएं।</li>
                  <li>होम पेज पर 'Quick Links' सेक्शन में 'Link Aadhaar Status' पर क्लिक करें।</li>
                  <li>एक नया पेज खुलेगा जहाँ आपको अपना 10 अंकों का PAN नंबर और 12 अंकों का Aadhaar नंबर दर्ज करना होगा।</li>
                  <li>विवरण भरने के बाद, 'View Link Aadhaar Status' बटन पर क्लिक करें।</li>
                  <li>अगली स्क्रीन पर आपका लिंकिंग स्टेटस दिख जाएगा, जैसे — "Your PAN is already linked to given Aadhaar" या "PAN not linked with Aadhaar"।</li>
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
                <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                  <MessageSquareText className="h-7 w-7 text-accent" />
                  विधि 2: SMS भेजकर
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90">
                <p>
                  यदि आपके पास इंटरनेट की सुविधा नहीं है, तो आप SMS के माध्यम से भी अपना पैन-आधार लिंकिंग स्टेटस जान सकते हैं। इसके लिए नीचे दिए गए प्रारूप में एक SMS भेजें:
                </p>
                <div className="p-4 bg-muted rounded-md font-mono text-sm">
                  <p className="font-bold">SMS फॉर्मेट:</p>
                  <p>UIDPAN &lt;12 अंकों का आधार नंबर&gt; &lt;10 अंकों का पैन नंबर&gt;</p>
                </div>
                <p>
                  इस SMS को <strong>567678</strong> या <strong>56161</strong> पर भेज दें।
                </p>
                <p>
                  उदाहरण के लिए: यदि आपका आधार नंबर 123456789012 है और पैन नंबर ABCDE1234F है, तो आप SMS इस तरह भेजेंगे:
                </p>
                <div className="p-4 bg-muted rounded-md font-mono text-sm">
                  <p>UIDPAN 123456789012 ABCDE1234F</p>
                </div>
                <p>
                  SMS भेजने के बाद, आपको एक जवाबी SMS में आपके लिंकिंग की स्थिति के बारे में जानकारी मिल जाएगी।
                </p>
              </CardContent>
            </Card>
          </article>
            
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center font-headline text-primary mb-8">अन्य महत्वपूर्ण जानकारी</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden shadow-lg flex flex-col">
                   <div className="relative w-full h-48">
                    <Image
                      src={post.imageUrl}
                      alt={post.description}
                      fill
                      style={{ objectFit: 'cover' }}
                      data-ai-hint={post.imageHint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className='font-headline text-xl'>{post.description}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">यह एक डमी पोस्ट है। यहां पोस्ट का संक्षिप्त विवरण आएगा।</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button variant="outline">और पढ़ें</Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>

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
