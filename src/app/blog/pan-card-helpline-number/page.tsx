
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Phone, Mail, MapPin, Info, User, Calendar, HelpCircle } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'पैन कार्ड हेल्पलाइन नंबर: NSDL और UTI कस्टमर केयर (2024) | PAN Card Helpline',
  description: 'पैन कार्ड से जुड़ी किसी भी समस्या के लिए NSDL (Protean) और UTIITSL के आधिकारिक हेल्पलाइन नंबर, ईमेल आईडी, और कस्टमर केयर से संपर्क करने की पूरी जानकारी प्राप्त करें।',
  keywords: 'pan card helpline number, pan card customer care, nsdl helpline, utiitsl helpline, aaykar sampark kendra, pan card complaint, पैन कार्ड हेल्पलाइन नंबर, पैन कार्ड कस्टमर केयर',
  alternates: {
    canonical: '/blog/pan-card-helpline-number',
  },
  openGraph: {
    title: 'पैन कार्ड हेल्पलाइन नंबर: NSDL और UTI कस्टमर केयर (2024) | PAN Card Helpline',
    description: 'पैन कार्ड आवेदन, सुधार, या किसी अन्य प्रश्न के लिए NSDL और UTIITSL के कस्टमर केयर से संपर्क करने के सभी तरीके यहां दिए गए हैं।',
    url: '/blog/pan-card-helpline-number',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1586469742407-44a397a69639?w=1080&q=80&fit=max',
        width: 1080,
        height: 720,
        alt: 'Customer service representative with headset',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  'headline': 'पैन कार्ड हेल्पलाइन और कस्टमर केयर: NSDL और UTIITSL से संपर्क कैसे करें (2024)',
  'description': 'यह गाइड आपको पैन कार्ड से संबंधित प्रश्नों और समस्याओं के समाधान के लिए NSDL (Protean) और UTIITSL के हेल्पलाइन नंबर, ईमेल आईडी, और अन्य संपर्क माध्यमों की विस्तृत जानकारी प्रदान करती है।',
  'image': 'https://images.unsplash.com/photo-1586469742407-44a397a69639?w=1080&q=80&fit=max',  
  'author': {
    '@type': 'Person',
    'name': 'Mukesh Kumar Yogi',
  },  
  'publisher': {
    '@type': 'Organization',
    'name': 'Unofficial PAN-Aadhaar Checker',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://example.com/logo.png' // Replace with your actual logo URL
    }
  },
  'datePublished': new Date().toISOString(),
  'dateModified': new Date().toISOString(),
  'mainEntityOfPage': {
    '@type': 'WebPage',
    '@id': 'https://your-domain.com/blog/pan-card-helpline-number' // Replace with your actual domain
  },
  'faqPage': {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'पैन कार्ड की शिकायत कहां दर्ज करें?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'आप संबंधित एजेंसी (NSDL या UTIITSL) के शिकायत पोर्टल पर या उनके कस्टमर केयर ईमेल पर अपनी शिकायत दर्ज कर सकते हैं। इसके अलावा, आयकर विभाग के Aaykar Sampark Kendra (ASK) से भी संपर्क कर सकते हैं।'
          }
        },
        {
          '@type': 'Question',
          'name': 'NSDL का टोल-फ्री नंबर क्या है?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'NSDL (Protean) का मुख्य ग्राहक सेवा नंबर 020-27218080 है। यह एक टोल-फ्री नंबर नहीं है, और इस पर कॉल करने पर मानक शुल्क लागू हो सकते हैं।'
          }
        },
        {
          '@type': 'Question',
          'name': 'पैन कार्ड आवेदन का स्टेटस जानने के लिए किसे संपर्क करें?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'आपको उस एजेंसी से संपर्क करना होगा जिसके माध्यम से आपने आवेदन किया था। आप उनकी वेबसाइट पर ऑनलाइन स्टेटस ट्रैक कर सकते हैं या उनके हेल्पलाइन नंबर पर कॉल करके Acknowledgement/Coupon नंबर बताकर स्थिति जान सकते हैं।'
          }
        },
        {
          '@type': 'Question',
          'name': 'ईमेल पर जवाब मिलने में कितना समय लगता है?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'आमतौर पर, NSDL या UTIITSL से ईमेल पर जवाब मिलने में 24 से 72 घंटे लग सकते हैं, यह उनके कार्यभार पर निर्भर करता है।'
          }
        },
        {
          '@type': 'Question',
          'name': 'क्या मैं हेल्पलाइन पर कॉल करके पैन कार्ड में सुधार करवा सकता हूँ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'नहीं, आप फोन पर पैन कार्ड के विवरण में सुधार नहीं करवा सकते। इसके लिए आपको ऑनलाइन सुधार फॉर्म भरना होगा या फिजिकल फॉर्म जमा करना होगा। हेल्पलाइन नंबर केवल जानकारी और सहायता के लिए है।'
          }
        }
      ]
    }
};


export default function PanCardHelplinePost() {
  const publicationDate = new Date().toLocaleDateString('hi-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <main className="flex w-full flex-col items-center bg-background p-4 sm:p-6 md:p-8">
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center my-8 md:my-12">
            <h1 className="font-headline text-3xl sm:text-4xl font-bold tracking-tighter text-primary md:text-5xl">
              पैन कार्ड हेल्पलाइन नंबर: NSDL और UTI कस्टमर केयर (2024)
            </h1>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>लेखक: मुकेश कुमार योगी</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>प्रकाशित: {publicationDate}</span>
                </div>
            </div>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground sm:text-base md:text-lg">
              क्या आपको पैन कार्ड आवेदन, सुधार या स्टेटस से जुड़ी कोई समस्या है? इस गाइड में NSDL और UTIITSL के कस्टमर केयर से संपर्क करने की पूरी जानकारी पाएं।
            </p>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          
          <div className="relative w-full h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1586469742407-44a397a69639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxjdXN0b21lciUyMHNlcnZpY2V8ZW58MHx8fHwxNzYzNDg4Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Customer service agent helping a client"
              fill
              style={{ objectFit: 'cover' }}
              data-ai-hint="customer service"
              priority
            />
          </div>

          <p className="lead">
            पैन कार्ड बनवाते समय या उसमें कोई सुधार करते समय कई बार हमें समस्याओं का सामना करना पड़ता है। हो सकता है आपका आवेदन अटक गया हो, भुगतान में कोई समस्या हो, या आपको किसी जानकारी के बारे में संदेह हो। ऐसी स्थितियों में, सही जगह पर संपर्क करना बहुत महत्वपूर्ण होता है ताकि आपकी समस्या का जल्दी समाधान हो सके।
          </p>

          <p>
            भारत में, पैन कार्ड से संबंधित सेवाएं मुख्य रूप से दो अधिकृत एजेंसियों द्वारा प्रदान की जाती हैं: <strong>NSDL (Protean)</strong> और <strong>UTIITSL</strong>। आपको उसी एजेंसी के कस्टमर केयर से संपर्क करना होगा जिसके माध्यम से आपने आवेदन किया था। इस गाइड में, हम आपको दोनों एजेंसियों के हेल्पलाइन नंबर, ईमेल और अन्य संपर्क विवरण प्रदान करेंगे।
          </p>

          <Card className="border-l-4 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-xl sm:text-2xl">
                <HelpCircle className="h-7 w-7 text-accent" />
                आपको कस्टमर केयर से कब संपर्क करना चाहिए?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5">
                <li>जब आपका आवेदन बहुत दिनों से "Under Process" दिखा रहा हो।</li>
                <li>भुगतान सफल होने के बाद भी स्टेटस अपडेट न हुआ हो।</li>
                <li>आपके आवेदन में कोई त्रुटि (Discrepancy) हो और आपको समझ न आ रहा हो कि उसे कैसे ठीक करें।</li>
                <li>पैन कार्ड डिस्पैच होने के बाद भी आपको न मिला हो।</li>
                <li>आपको पैन कार्ड से संबंधित किसी नियम या प्रक्रिया के बारे में जानकारी चाहिए हो।</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">1. NSDL (Protean) पैन कार्ड हेल्पलाइन</h2>
          <p>
            अगर आपने NSDL (अब Protean eGov Technologies Ltd.) के माध्यम से पैन कार्ड के लिए आवेदन किया है, तो आप नीचे दिए गए तरीकों से उनसे संपर्क कर सकते हैं।
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Phone className="h-5 w-5" /> फोन नंबर</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className='font-bold text-lg'>020-27218080</p>
                    <p className='text-sm text-muted-foreground'>यह NSDL का मुख्य ग्राहक सेवा नंबर है।</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Mail className="h-5 w-5" /> ईमेल आईडी</CardTitle>
                </CardHeader>
                <CardContent>
                    <a href="mailto:tininfo@nsdl.co.in" className='font-bold text-lg hover:underline'>tininfo@nsdl.co.in</a>
                    <p className='text-sm text-muted-foreground'>ईमेल करते समय विषय में अपना Acknowledgement नंबर जरूर लिखें।</p>
                </CardContent>
            </Card>
          </div>
           <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5" /> रजिस्टर्ड ऑफिस</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className='font-semibold'>Protean eGov Technologies Limited</p>
                    <p className='text-sm text-muted-foreground'>Times Tower, 1st Floor, Kamala Mills Compound, Senapati Bapat Marg, Lower Parel, Mumbai - 400 013.</p>
                </CardContent>
            </Card>


          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">2. UTIITSL पैन कार्ड हेल्पलाइन</h2>
          <p>
            यदि आपने UTI Infrastructure Technology And Services Limited (UTIITSL) के माध्यम से पैन कार्ड के लिए आवेदन किया है, तो आप इन तरीकों से संपर्क कर सकते हैं।
          </p>
           <div className="grid md:grid-cols-2 gap-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Phone className="h-5 w-5" /> फोन नंबर</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className='font-bold text-lg'>+91-33-40802999</p>
                    <p className='font-bold text-lg mt-2'>033 40802999</p>
                    <p className='text-sm text-muted-foreground'>यह UTIITSL का अखिल भारतीय ग्राहक सेवा नंबर है।</p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Mail className="h-5 w-5" /> ईमेल आईडी</CardTitle>
                </CardHeader>
                <CardContent>
                    <a href="mailto:utiitsl.gsd@utiitsl.com" className='font-bold text-lg hover:underline'>utiitsl.gsd@utiitsl.com</a>
                    <p className='text-sm text-muted-foreground'>ईमेल में अपना कूपन नंबर और पूरी समस्या स्पष्ट रूप से लिखें।</p>
                </CardContent>
            </Card>
          </div>
          <p>UTIITSL के अलग-अलग क्षेत्रों के लिए अलग-अलग संपर्क विवरण भी हैं, जिन्हें आप उनकी <a href="https://www.utiitsl.com/UTIITSL_SITE/contactus.php" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">आधिकारिक वेबसाइट</a> पर देख सकते हैं।</p>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">3. आयकर विभाग संपर्क केंद्र (Aaykar Sampark Kendra - ASK)</h2>
          <p>
            पैन और टैक्स से संबंधित सामान्य प्रश्नों के लिए आप सीधे आयकर विभाग के संपर्क केंद्र पर भी संपर्क कर सकते हैं।
          </p>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Phone className="h-5 w-5" /> टोल-फ्री हेल्पलाइन</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className='font-bold text-lg'>1800 180 1961</p>
                    <p className='text-sm text-muted-foreground'>यह आयकर विभाग का सामान्य पूछताछ नंबर है।</p>
                </CardContent>
            </Card>
            
          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">अक्सर पूछे जाने वाले प्रश्न (FAQ)</h2>

          <div className="space-y-4">
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">1. पैन कार्ड की शिकायत कहां दर्ज करें?</summary>
                <p className="mt-2 text-muted-foreground">आप संबंधित एजेंसी (NSDL या UTIITSL) के शिकायत पोर्टल पर या उनके कस्टमर केयर ईमेल पर अपनी शिकायत दर्ज कर सकते हैं। इसके अलावा, आयकर विभाग के Aaykar Sampark Kendra (ASK) से भी संपर्क कर सकते हैं।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">2. NSDL का टोल-फ्री नंबर क्या है?</summary>
                <p className="mt-2 text-muted-foreground">NSDL (Protean) का मुख्य ग्राहक सेवा नंबर 020-27218080 है। यह एक टोल-फ्री नंबर नहीं है, और इस पर कॉल करने पर मानक शुल्क लागू हो सकते हैं।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">3. पैन कार्ड आवेदन का स्टेटस जानने के लिए किसे संपर्क करें?</summary>
                <p className="mt-2 text-muted-foreground">आपको उस एजेंसी से संपर्क करना होगा जिसके माध्यम से आपने आवेदन किया था। आप उनकी वेबसाइट पर ऑनलाइन स्टेटस ट्रैक कर सकते हैं या उनके हेल्पलाइन नंबर पर कॉल करके Acknowledgement/Coupon नंबर बताकर स्थिति जान सकते हैं।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">4. ईमेल पर जवाब मिलने में कितना समय लगता है?</summary>
                <p className="mt-2 text-muted-foreground">आमतौर पर, NSDL या UTIITSL से ईमेल पर जवाब मिलने में 24 से 72 घंटे लग सकते हैं, यह उनके कार्यभार पर निर्भर करता है।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">5. क्या मैं हेल्पलाइन पर कॉल करके पैन कार्ड में सुधार करवा सकता हूँ?</summary>
                <p className="mt-2 text-muted-foreground">नहीं, आप फोन पर पैन कार्ड के विवरण में सुधार नहीं करवा सकते। इसके लिए आपको ऑनलाइन सुधार फॉर्म भरना होगा या फिजिकल फॉर्म जमा करना होगा। हेल्पलाइन नंबर केवल जानकारी और सहायता के लिए है।</p>
            </details>
          </div>

          <Card className="mt-12 bg-card">
            <CardContent className="flex flex-col sm:flex-row items-center gap-6 pt-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg_BXmz0vq7Ke0_UTIVGnKxrlFUXzOU9jyv-EDwrtzR8Ib06sqbdm6D3BQMjOv4LHWhDjSi1G_9ELzDPOpGjm3U2GRNnRLc9-m4Sa_I-ByjJkXpuSHnaVwEWKCWRAS1vSdigM4mnvaEJttvytp-Anlb2-bndXVuhsTEXS3k94F-47EgnQVggQMtk_PYmmyB/s1712/Mukesh%20Kumar%20Yogi.jpg" alt="Mukesh Kumar Yogi" />
                <AvatarFallback>MY</AvatarFallback>
              </Avatar>
              <div className='text-center sm:text-left'>
                <h4 className="font-headline text-xl font-bold">लेखक के बारे में</h4>
                <p className="font-semibold text-primary mt-1">मुकेश कुमार योगी</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  मुकेश एक अनुभवी तकनीकी लेखक और वेब डेवलपर हैं जिन्हें जटिल विषयों को सरल और सुलभ भाषा में समझाने में विशेषज्ञता हासिल है। वह वित्तीय प्रौद्योगिकी और सरकारी सेवाओं से जुड़े विषयों पर लिखना पसंद करते हैं।
                </p>
              </div>
            </CardContent>
          </Card>


          <div className="text-center py-6 mt-8 text-sm text-muted-foreground">
            <p><strong>अस्वीकरण (Disclaimer):</strong> यह एक अनौपचारिक गाइड है और केवल सूचनात्मक उद्देश्यों के लिए है। संपर्क विवरण बदल सकते हैं, इसलिए हमेशा नवीनतम जानकारी के लिए आधिकारिक वेबसाइट देखें।</p>
          </div>

        </article>
      </div>
    </main>
  );
}
