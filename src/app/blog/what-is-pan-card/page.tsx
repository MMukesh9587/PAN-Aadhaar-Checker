
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, CheckCircle, AlertCircle, Info, User, Calendar, FileText, Banknote, Building } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'पैन कार्ड क्या है, यह क्यों जरूरी है और इसके प्रकार | What is PAN Card (2024)',
  description: 'पैन कार्ड (PAN Card) क्या है, इसका पूरा नाम, यह क्यों जरूरी है, इसके विभिन्न प्रकार, और इसके लिए आवेदन कैसे करें? इस विस्तृत गाइड में पैन कार्ड से जुड़ी पूरी जानकारी प्राप्त करें।',
  keywords: 'pan card kya hai, what is pan card, pan card full form, pan card uses, types of pan card, why pan card is important, पैन कार्ड क्या होता है, पैन कार्ड की जानकारी',
  alternates: {
    canonical: '/blog/what-is-pan-card',
  },
  openGraph: {
    title: 'पैन कार्ड क्या है, यह क्यों जरूरी है और इसके प्रकार | What is PAN Card (2024)',
    description: 'पैन कार्ड के महत्व, इसके उपयोग, विभिन्न प्रकारों और आवेदन प्रक्रिया को समझने के लिए यह विस्तृत गाइड पढ़ें।',
    url: '/blog/what-is-pan-card',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1080&q=80&fit=max',
        width: 1080,
        height: 720,
        alt: 'Illustration of an identity document',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  'headline': 'पैन कार्ड क्या है: उपयोग, महत्व, प्रकार और आवेदन प्रक्रिया (2024 गाइड)',
  'description': 'इस विस्तृत गाइड में जानें कि पैन कार्ड (PAN Card) क्या है, इसका पूरा नाम क्या है, यह वित्तीय लेनदेन के लिए क्यों अनिवार्य है, इसके कितने प्रकार होते हैं, और आप इसके लिए कैसे आवेदन कर सकते हैं।',
  'image': 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=1080&q=80&fit=max',  
  'author': {
    '@type': 'Person',
    'name': 'Mukesh Kumar Yogi',
  },  
  'publisher': {
    '@type': 'Organization',
    'name': 'Unofficial PAN-Aadhaar Checker',
    'logo': {
      '@type': 'ImageObject',
      'url': 'https://example.com/logo.png' 
    }
  },
  'datePublished': new Date().toISOString(),
  'dateModified': new Date().toISOString(),
  'mainEntityOfPage': {
    '@type': 'WebPage',
    '@id': 'https://your-domain.com/blog/what-is-pan-card'
  },
  'faqPage': {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'पैन कार्ड का पूरा नाम क्या है?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'पैन कार्ड का पूरा नाम ‘परमानेंट अकाउंट नंबर’ (Permanent Account Number) है। यह एक स्थायी खाता संख्या है जो किसी भी व्यक्ति या संस्था के लिए अद्वितीय होती है।'
          }
        },
        {
          '@type': 'Question',
          'name': 'पैन कार्ड कौन जारी करता है?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'पैन कार्ड भारत के आयकर विभाग (Income Tax Department) द्वारा जारी किया जाता है। इसे NSDL (Protean) और UTIITSL जैसी एजेंसियों के माध्यम से बनाया और वितरित किया जाता है।'
          }
        },
        {
          '@type': 'Question',
          'name': 'क्या एक व्यक्ति के पास एक से अधिक पैन कार्ड हो सकते हैं?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'नहीं, कानून के अनुसार एक व्यक्ति के पास केवल एक ही पैन कार्ड हो सकता है। एक से अधिक पैन कार्ड रखना अवैध है और इस पर ₹10,000 तक का जुर्माना लग सकता है।'
          }
        },
        {
          '@type': 'Question',
          'name': 'पैन कार्ड की वैधता (validity) कितनी होती है?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'पैन कार्ड जीवन भर के लिए वैध होता है। इसे रिन्यू कराने की कोई आवश्यकता नहीं होती है। यह केवल तभी निष्क्रिय होता है जब आप इसे आधार से लिंक नहीं करते या इसे सरेंडर कर देते हैं।'
          }
        },
        {
          '@type': 'Question',
          'name': 'अगर पैन कार्ड खो जाए तो क्या करें?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'अगर आपका पैन कार्ड खो जाता है, तो आपको डुप्लिकेट पैन कार्ड के लिए आवेदन करना होगा। आप NSDL या UTIITSL पोर्टल पर "Reprint of PAN Card" सेवा का उपयोग करके इसे दोबारा प्रिंट करवा सकते हैं।'
          }
        }
      ]
    }
};


export default function WhatIsPanCardPost() {
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
              पैन कार्ड क्या है और यह क्यों जरूरी है? (पूरी जानकारी)
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
              इस गाइड में हम जानेंगे कि पैन कार्ड क्या है, इसका पूरा नाम क्या है, यह क्यों महत्वपूर्ण है, और यह आपके वित्तीय जीवन को कैसे प्रभावित करता है।
            </p>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          
          <div className="relative w-full h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpZGVudGl0eSUyMGRvY3VtZW50fGVufDB8fHx8MTc2NDA0Mzk2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="An illustration of an identity document, representing a PAN card"
              fill
              style={{ objectFit: 'cover' }}
              data-ai-hint="identity document"
              priority
            />
          </div>

          <p className="lead">
            आपने अक्सर "पैन कार्ड" का नाम सुना होगा, खासकर जब बैंक में खाता खुलवाने, लोन लेने या इनकम टैक्स भरने की बात आती है। लेकिन क्या आप जानते हैं कि यह छोटा सा कार्ड वास्तव में क्या है और यह इतना महत्वपूर्ण क्यों है? पैन कार्ड केवल एक प्लास्टिक का टुकड़ा नहीं है, बल्कि यह भारत में आपके वित्तीय लेन-देन की पहचान है।
          </p>

          <p>
            इस विस्तृत गाइड में, हम पैन कार्ड से जुड़े हर पहलू को सरल भाषा में समझेंगे, ताकि आपको इसके बारे में कोई भी संदेह न रहे।
          </p>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">पैन कार्ड क्या है? (What is PAN Card?)</h2>
          <p>
            पैन कार्ड का पूरा नाम <strong>Permanent Account Number</strong> (स्थायी खाता संख्या) है। यह एक 10-अंकीय अल्फान्यूमेरिक कोड (अक्षर और संख्या का मिश्रण) होता है, जो भारत के आयकर विभाग (Income Tax Department) द्वारा किसी भी व्यक्ति, कंपनी या संस्था को जारी किया जाता है।
          </p>
          <p>
            यह कार्ड आपकी वित्तीय पहचान के रूप में कार्य करता है। आयकर विभाग आपके सभी वित्तीय लेन-देन को इसी पैन नंबर के माध्यम से ट्रैक करता है। हर पैन नंबर अद्वितीय होता है, यानी दो व्यक्तियों या संस्थाओं का पैन नंबर कभी भी एक जैसा नहीं हो सकता। एक बार जारी होने के बाद यह जीवन भर के लिए वैध रहता है।
          </p>

          <Card className="border-l-4 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-xl sm:text-2xl">
                <Info className="h-7 w-7 text-accent" />
                पैन कार्ड का उपयोग कहाँ-कहाँ होता है?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5">
                <li><strong>आयकर रिटर्न (ITR) दाखिल करना:</strong> टैक्स भरने वाले सभी लोगों के लिए पैन कार्ड अनिवार्य है।</li>
                <li><strong>बैंक खाता खोलना:</strong> चालू (Current) या बचत (Savings) खाता खोलने के लिए पैन कार्ड आवश्यक है।</li>
                <li><strong>बड़ा नकद लेनदेन:</strong> एक दिन में ₹50,000 से अधिक की नकद जमा या निकासी के लिए।</li>
                <li><strong>संपत्ति की खरीद-बिक्री:</strong> ₹10 लाख से अधिक की अचल संपत्ति खरीदने या बेचने पर।</li>
                <li><strong>निवेश करना:</strong> शेयर बाजार, म्यूचुअल फंड, या बॉन्ड में ₹50,000 से अधिक के निवेश के लिए।</li>
                <li><strong>वाहन खरीदना:</strong> कार या कोई अन्य वाहन (दोपहिया को छोड़कर) खरीदने पर।</li>
                <li><strong>क्रेडिट/डेबिट कार्ड के लिए आवेदन:</strong> बैंक या वित्तीय संस्थान पैन कार्ड की मांग करते हैं।</li>
                <li><strong>विदेशी मुद्रा खरीदना:</strong> एक बार में ₹50,000 से अधिक की विदेशी मुद्रा खरीदने पर।</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">पैन कार्ड नंबर की संरचना को समझें</h2>
          <p>
            आपका 10-अंकीय पैन नंबर यूं ही नहीं बना होता, इसके हर हिस्से का एक खास मतलब होता है:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>पहले तीन अक्षर:</strong> ये AAA से ZZZ के बीच कोई भी तीन अक्षर होते हैं।</li>
            <li><strong>चौथा अक्षर:</strong> यह आपके स्टेटस को दर्शाता है, जैसे:
                <ul className='list-disc pl-8 mt-2 space-y-1'>
                    <li><strong>P:</strong> Individual (व्यक्ति)</li>
                    <li><strong>C:</strong> Company (कंपनी)</li>
                    <li><strong>F:</strong> Firm (फर्म)</li>
                    <li><strong>H:</strong> Hindu Undivided Family (HUF)</li>
                    <li><strong>A:</strong> Association of Persons (AOP)</li>
                    <li><strong>T:</strong> Trust (ट्रस्ट)</li>
                </ul>
            </li>
            <li><strong>पांचवां अक्षर:</strong> यह आपके सरनेम (surname) का पहला अक्षर होता है (व्यक्तिगत पैन कार्ड के मामले में)।</li>
            <li><strong>अगले चार अंक:</strong> ये 0001 से 9999 के बीच कोई भी क्रम संख्या होती हैं।</li>
            <li><strong>दसवां और अंतिम अक्षर:</strong> यह एक अल्फाबेटिकल चेक डिजिट होता है, जो एक फॉर्मूले के तहत जेनरेट होता है।</li>
          </ul>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">पैन कार्ड के प्रकार (Types of PAN Card)</h2>
          <p>
            आवेदक की श्रेणी के आधार पर पैन कार्ड विभिन्न प्रकार के होते हैं:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold flex items-center gap-2"><User className="h-5 w-5 text-primary" /> व्यक्तियों के लिए पैन कार्ड</h4>
                  <p className="text-sm text-muted-foreground mt-1">यह सबसे आम प्रकार का पैन कार्ड है, जो भारतीय नागरिकों को जारी किया जाता है।</p>
              </div>
              <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold flex items-center gap-2"><Building className="h-5 w-5 text-primary" /> कंपनियों और संस्थाओं के लिए</h4>
                  <p className="text-sm text-muted-foreground mt-1">यह कंपनियों, ट्रस्टों, फर्मों और अन्य कानूनी संस्थाओं को उनके वित्तीय लेनदेन के लिए जारी किया जाता है।</p>
              </div>
              <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold flex items-center gap-2"><User className="h-5 w-5 text-primary" /> NRI और विदेशी नागरिकों के लिए</h4>
                  <p className="text-sm text-muted-foreground mt-1">जो गैर-निवासी भारतीय (NRI) या विदेशी नागरिक भारत में टैक्स का भुगतान करते हैं, उन्हें भी पैन कार्ड की आवश्यकता होती है।</p>
              </div>
          </div>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">पैन कार्ड के लिए आवेदन कैसे करें?</h2>
          <p>
            आप पैन कार्ड के लिए ऑनलाइन और ऑफलाइन दोनों तरीकों से आवेदन कर सकते हैं। ऑनलाइन तरीका सबसे आसान और तेज है। आप दो अधिकृत पोर्टलों के माध्यम से आवेदन कर सकते हैं:
          </p>
           <ol className="list-decimal list-inside space-y-3 pl-4">
            <li><strong>NSDL (अब Protean) पोर्टल:</strong> आप <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">NSDL की वेबसाइट</a> पर जाकर 'Form 49A' भरकर नए पैन के लिए आवेदन कर सकते हैं।</li>
            <li><strong>UTIITSL पोर्टल:</strong> आप <a href="https://www.pan.utiitsl.com/PAN/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">UTIITSL की वेबसाइट</a> पर जाकर भी पैन कार्ड के लिए आवेदन कर सकते हैं।</li>
          </ol>
          <p>आवेदन प्रक्रिया में पहचान प्रमाण, पता प्रमाण और जन्म तिथि प्रमाण जैसे कुछ दस्तावेजों की आवश्यकता होती है।</p>
          <div className="pt-4">
              <Button asChild variant="outline">
                <Link href="/blog/apply-for-pan-card-online">
                  विस्तृत आवेदन प्रक्रिया के लिए यहाँ पढ़ें
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
          </div>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">अक्सर पूछे जाने वाले प्रश्न (FAQ)</h2>

          <div className="space-y-4">
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">1. पैन कार्ड का पूरा नाम क्या है?</summary>
                <p className="mt-2 text-muted-foreground">पैन कार्ड का पूरा नाम ‘परमानेंट अकाउंट नंबर’ (Permanent Account Number) है। यह एक स्थायी खाता संख्या है जो किसी भी व्यक्ति या संस्था के लिए अद्वितीय होती है।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">2. पैन कार्ड कौन जारी करता है?</summary>
                <p className="mt-2 text-muted-foreground">पैन कार्ड भारत के आयकर विभाग (Income Tax Department) द्वारा जारी किया जाता है। इसे NSDL (Protean) और UTIITSL जैसी एजेंसियों के माध्यम से बनाया और वितरित किया जाता है।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">3. क्या एक व्यक्ति के पास एक से अधिक पैन कार्ड हो सकते हैं?</summary>
                <p className="mt-2 text-muted-foreground">नहीं, कानून के अनुसार एक व्यक्ति के पास केवल एक ही पैन कार्ड हो सकता है। एक से अधिक पैन कार्ड रखना अवैध है और इस पर ₹10,000 तक का जुर्माना लग सकता है।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">4. पैन कार्ड की वैधता (validity) कितनी होती है?</summary>
                <p className="mt-2 text-muted-foreground">पैन कार्ड जीवन भर के लिए वैध होता है। इसे रिन्यू कराने की कोई आवश्यकता नहीं होती है। यह केवल तभी निष्क्रिय होता है जब आप इसे आधार से लिंक नहीं करते या इसे सरेंडर कर देते हैं।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">5. अगर पैन कार्ड खो जाए तो क्या करें?</summary>
                <p className="mt-2 text-muted-foreground">अगर आपका पैन कार्ड खो जाता है, तो आपको डुप्लिकेट पैन कार्ड के लिए आवेदन करना होगा। आप NSDL या UTIITSL पोर्टल पर "Reprint of PAN Card" सेवा का उपयोग करके इसे दोबारा प्रिंट करवा सकते हैं।</p>
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
            <p><strong>अस्वीकरण (Disclaimer):</strong> यह एक अनौपचारिक गाइड है और केवल सूचनात्मक उद्देश्यों के लिए है। हमेशा नवीनतम जानकारी और प्रक्रियाओं के लिए आधिकारिक आयकर विभाग की वेबसाइट (NSDL/UTIITSL) देखें।</p>
          </div>

        </article>
      </div>
    </main>
  );
}
