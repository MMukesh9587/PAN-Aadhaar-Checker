
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Edit, AlertCircle, ListChecks, User, Calendar, FileText } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'पैन कार्ड में सुधार कैसे करें (नाम, जन्मतिथि, फोटो) - 2024 गाइड | PAN Card Correction',
  description: 'पैन कार्ड में नाम, जन्मतिथि, पिता का नाम, फोटो या हस्ताक्षर ऑनलाइन कैसे बदलें? NSDL और UTIITSL पोर्टल्स के माध्यम से पैन कार्ड सुधार की पूरी प्रक्रिया जानें।',
  keywords: 'pan card correction, pan card update, change name in pan card, update dob in pan, nsdl pan correction, utiitsl pan correction, पैन कार्ड सुधार, पैन कार्ड में नाम कैसे बदलें',
  alternates: {
    canonical: '/blog/pan-card-correction',
  },
  openGraph: {
    title: 'पैन कार्ड में सुधार कैसे करें (नाम, जन्मतिथि, फोटो) - 2024 गाइड | PAN Card Correction',
    description: 'इस विस्तृत गाइड से सीखें कि अपने पैन कार्ड में किसी भी गलती जैसे नाम, जन्मतिथि, या फोटो को ऑनलाइन कैसे ठीक करें।',
    url: '/blog/pan-card-correction',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1579621970795-87f5a7a1b1e3?w=1080&q=80&fit=max',
        width: 1080,
        height: 720,
        alt: 'Person correcting a document',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  'headline': 'पैन कार्ड में सुधार कैसे करें: नाम, जन्मतिथि, फोटो और हस्ताक्षर (2024 गाइड)',
  'description': 'यह गाइड आपको अपने पैन कार्ड में ऑनलाइन सुधार करने की पूरी प्रक्रिया बताती है, जिसमें नाम, जन्मतिथि, और अन्य विवरणों को NSDL और UTIITSL पोर्टल्स के माध्यम से ठीक करना शामिल है।',
  'image': 'https://images.unsplash.com/photo-1579621970795-87f5a7a1b1e3?w=1080&q=80&fit=max',  
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
    '@id': 'https://your-domain.com/blog/pan-card-correction' // Replace with your actual domain
  },
  'faqPage': {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'पैन कार्ड सुधार में कितना समय लगता है?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'पैन कार्ड में सुधार का अनुरोध जमा करने और दस्तावेजों के सत्यापन के बाद, इस प्रक्रिया में आमतौर पर 15-20 कार्य दिवस लगते हैं। e-PAN कार्ड अपडेट होने के बाद जल्दी ईमेल पर भेज दिया जाता है।'
          }
        },
        {
          '@type': 'Question',
          'name': 'पैन कार्ड सुधार के लिए कितनी फीस लगती है?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'पैन कार्ड में सुधार के लिए शुल्क लगभग उतना ही है जितना नए पैन कार्ड के लिए होता है। भारतीय पते के लिए यह लगभग ₹100-₹110 के बीच होता है, जबकि विदेशी पते के लिए यह अधिक होता है।'
          }
        },
        {
          '@type': 'Question',
          'name': 'क्या मैं एक ही समय में एक से अधिक विवरणों में सुधार कर सकता हूँ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'हाँ, आप एक ही सुधार आवेदन (Correction Form) में एक साथ कई विवरणों (जैसे नाम, जन्मतिथि, और पता) में सुधार के लिए अनुरोध कर सकते हैं।'
          }
        },
        {
          '@type': 'Question',
          'name': 'अगर मेरा आधार और पैन विवरण मेल नहीं खाता है तो क्या होगा?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'यदि आपके आधार और पैन के विवरण मेल नहीं खाते हैं, तो आपका पैन-आधार लिंकिंग विफल हो सकता है। यह बहुत महत्वपूर्ण है कि आप सुधार प्रक्रिया का उपयोग करके दोनों दस्तावेजों में अपनी जानकारी को एक समान कर लें।'
          }
        },
        {
          '@type': 'Question',
          'name': 'सुधार के बाद क्या मुझे नया पैन नंबर मिलेगा?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'नहीं, पैन कार्ड में सुधार करने पर आपका पैन नंबर वही रहता है। आपको बस एक नया पैन कार्ड जारी किया जाता है जिसमें सही जानकारी होती है।'
          }
        }
      ]
    }
};


export default function PanCardCorrectionPost() {
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
              पैन कार्ड में सुधार कैसे करें: नाम, जन्मतिथि, फोटो (2024 गाइड)
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
              क्या आपके पैन कार्ड में आपका नाम, जन्मतिथि या कोई और जानकारी गलत है? चिंता न करें! इस गाइड से सीखें कि पैन कार्ड में ऑनलाइन सुधार कैसे करें।
            </p>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          
          <div className="relative w-full h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://picsum.photos/seed/12/1080/720"
              alt="Person correcting a form online"
              fill
              style={{ objectFit: 'cover' }}
              data-ai-hint="document correction"
              priority
            />
          </div>

          <p className="lead">
            पैन कार्ड (Permanent Account Number) हमारे सबसे महत्वपूर्ण वित्तीय दस्तावेजों में से एक है। बैंक खाते से लेकर आयकर रिटर्न (ITR) दाखिल करने तक, हर जगह इसकी आवश्यकता होती है। लेकिन अगर आपके पैन कार्ड में आपका नाम, जन्मतिथि, या पिता का नाम गलत छप गया हो तो यह एक बड़ी समस्या बन सकता है। गलत जानकारी के कारण आपके वित्तीय लेनदेन और पैन-आधार लिंकिंग जैसी प्रक्रियाएं विफल हो सकती हैं।
          </p>

          <p>
            सौभाग्य से, आयकर विभाग आपको पैन कार्ड में हुई गलतियों को ऑनलाइन सुधारने की सुविधा देता है। इस गाइड में, हम आपको NSDL (Protean) और UTIITSL दोनों पोर्टलों के माध्यम से पैन कार्ड में सुधार करने की स्टेप-बाय-स्टेप प्रक्रिया बताएंगे।
          </p>

          <Card className="border-l-4 border-destructive">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-xl sm:text-2xl">
                <AlertCircle className="h-7 w-7 text-destructive" />
                पैन कार्ड में सुधार क्यों आवश्यक है?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5">
                <li><strong>पैन-आधार लिंकिंग:</strong> यदि पैन और आधार पर जानकारी मेल नहीं खाती है, तो लिंकिंग विफल हो जाएगी।</li>
                <li><strong>बैंक KYC:</strong> बैंक में KYC (Know Your Customer) प्रक्रिया के दौरान समस्याएं आ सकती हैं।</li>
                <li><strong>आयकर रिटर्न (ITR):</strong> ITR फाइल करते समय गलत जानकारी के कारण आपका रिफंड रुक सकता है।</li>
                <li><strong>पहचान प्रमाण:</strong> एक वैध पहचान प्रमाण के रूप में इसके उपयोग में बाधा आ सकती है।</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary flex items-center gap-3">
             <ListChecks className="h-7 w-7" />
             सुधार के लिए आवश्यक दस्तावेज़
          </h2>
          <p>
            सुधार प्रक्रिया शुरू करने से पहले, आपके पास सही जानकारी वाले सहायक दस्तावेजों की स्कैन की हुई प्रतियां होनी चाहिए।
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>पहचान का प्रमाण (Identity Proof):</strong> आधार कार्ड, वोटर आईडी, ड्राइविंग लाइसेंस, पासपोर्ट।</li>
            <li><strong>पते का प्रमाण (Address Proof):</strong> आधार कार्ड, वोटर आईडी, बिजली/पानी का बिल (3 महीने से पुराना न हो), बैंक स्टेटमेंट।</li>
            <li><strong>जन्म तिथि का प्रमाण (Date of Birth Proof):</strong> जन्म प्रमाण पत्र, 10वीं कक्षा की मार्कशीट, पासपोर्ट, ड्राइविंग लाइसेंस।</li>
            <li><strong>गलत पैन कार्ड की प्रति:</strong> जिसमें सुधार की आवश्यकता है।</li>
            <li><strong>सुधार का प्रमाण:</strong>
                <ul className='list-disc pl-8 mt-2 space-y-1'>
                    <li><strong>नाम सुधार के लिए:</strong> राजपत्र अधिसूचना (Gazette Notification) या विवाह प्रमाण पत्र (शादी के बाद नाम बदलने पर)।</li>
                    <li><strong>अन्य सुधारों के लिए:</strong> संबंधित सही जानकारी वाला आधिकारिक दस्तावेज़।</li>
                </ul>
            </li>
          </ul>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">विधि 1: NSDL (Protean) पोर्टल के माध्यम से सुधार</h2>
          <p>
            यह पैन कार्ड सुधार के लिए सबसे लोकप्रिय तरीकों में से एक है।
          </p>

          <h3 className="font-headline text-xl sm:text-2xl font-semibold">स्टेप-बाय-स्टेप प्रक्रिया:</h3>
          <ol className="list-decimal list-inside space-y-3 pl-4">
            <li>NSDL के आधिकारिक <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">PAN Services Portal</a> पर जाएं।</li>
            <li>'Application Type' ड्रॉप-डाउन मेनू से <strong>'Changes or Correction in existing PAN Data / Reprint of PAN Card'</strong> चुनें।</li>
            <li>'Category' में 'Individual' या जो भी लागू हो, चुनें।</li>
            <li>अपनी सामान्य जानकारी (नाम, जन्मतिथि, ईमेल, मोबाइल) और मौजूदा पैन नंबर दर्ज करें।</li>
            <li>कैप्चा कोड भरकर सबमिट करें। एक टोकन नंबर जेनरेट होगा, इसे नोट कर लें।</li>
            <li>'Continue with PAN Application Form' पर क्लिक करें।</li>
            <li>अब आप मुख्य फॉर्म पर होंगे। यहां आपको उन फील्ड्स के सामने वाले चेकबॉक्स को टिक करना है जिनमें आप सुधार करना चाहते हैं। <strong>(उदाहरण: यदि नाम गलत है, तो नाम वाले बॉक्स को टिक करें)।</strong></li>
            <li>सही जानकारी दर्ज करें और अपने पिता/माता का नाम भरें।</li>
            <li>अगले पेज पर, अपना पता अपडेट करें (यदि आवश्यक हो) और संबंधित सहायक दस्तावेज़ अपलोड करें।</li>
            <li>घोषणा (Declaration) भरें और फॉर्म सबमिट करें।</li>
            <li>अब आपको ऑनलाइन भुगतान करना होगा (लगभग ₹100-₹110)।</li>
            <li>भुगतान के बाद, एक पावती (acknowledgment) रसीद जेनरेट होगी। यदि आपने e-Sign नहीं चुना है, तो इस रसीद का प्रिंटआउट लें, इस पर दो फोटो चिपकाएं, हस्ताक्षर करें और सहायक दस्तावेजों के साथ NSDL के पुणे कार्यालय में 15 दिनों के भीतर भेज दें।</li>
          </ol>

           <div className="pt-4">
              <Button asChild>
                <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" target="_blank" rel="noopener noreferrer">
                  NSDL पोर्टल पर सुधार करें
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
          </div>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">विधि 2: UTIITSL पोर्टल के माध्यम से सुधार</h2>
          <p>
            UTIITSL पैन कार्ड जारी करने वाली दूसरी अधिकृत एजेंसी है। यहां से भी आप सुधार कर सकते हैं।
          </p>
           <ol className="list-decimal list-inside space-y-3 pl-4">
            <li>UTIITSL के <a href="https://www.pan.utiitsl.com/PAN/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">PAN Online Portal</a> पर जाएं।</li>
            <li>'PAN Card Services' सेक्शन में 'Change/Correction in PAN Card' पर क्लिक करें।</li>
            <li>'Apply for Change/Correction in PAN Card Details' विकल्प चुनें।</li>
            <li>अपना पैन नंबर दर्ज करें और 'PAN Card Mode' में 'Both physical PAN Card and e-PAN' या 'e-PAN only' चुनें और सबमिट करें।</li>
            <li>एक रेफरेंस नंबर जेनरेट होगा। अब फॉर्म में मांगी गई जानकारी भरें।</li>
            <li>जिन विवरणों को आप सुधारना चाहते हैं, उनके बाईं ओर स्थित चेकबॉक्स पर टिक करें और सही जानकारी दर्ज करें।</li>
            <li>आवश्यक दस्तावेज़ अपलोड करें और ऑनलाइन भुगतान करें।</li>
            <li>सफल भुगतान के बाद, आवेदन पत्र का प्रिंटआउट लें, फोटो चिपकाएं, हस्ताक्षर करें और आवश्यक दस्तावेजों के साथ UTIITSL के निकटतम कार्यालय में भेजें।</li>
          </ol>
          <p>सुधार के बाद, नया पैन कार्ड आपके पते पर भेज दिया जाएगा और e-PAN आपकी ईमेल आईडी पर आ जाएगा।</p>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">अक्सर पूछे जाने वाले प्रश्न (FAQ)</h2>

          <div className="space-y-4">
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">1. पैन कार्ड सुधार में कितना समय लगता है?</summary>
                <p className="mt-2 text-muted-foreground">पैन कार्ड में सुधार का अनुरोध जमा करने और दस्तावेजों के सत्यापन के बाद, इस प्रक्रिया में आमतौर पर 15-20 कार्य दिवस लगते हैं। e-PAN कार्ड अपडेट होने के बाद जल्दी ईमेल पर भेज दिया जाता है।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">2. पैन कार्ड सुधार के लिए कितनी फीस लगती है?</summary>
                <p className="mt-2 text-muted-foreground">पैन कार्ड में सुधार के लिए शुल्क लगभग उतना ही है जितना नए पैन कार्ड के लिए होता है। भारतीय पते के लिए यह लगभग ₹100-₹110 के बीच होता है, जबकि विदेशी पते के लिए यह अधिक होता है।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">3. क्या मैं एक ही समय में एक से अधिक विवरणों में सुधार कर सकता हूँ?</summary>
                <p className="mt-2 text-muted-foreground">हाँ, आप एक ही सुधार आवेदन (Correction Form) में एक साथ कई विवरणों (जैसे नाम, जन्मतिथि, और पता) में सुधार के लिए अनुरोध कर सकते हैं।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">4. अगर मेरा आधार और पैन विवरण मेल नहीं खाता है तो क्या होगा?</summary>
                <p className="mt-2 text-muted-foreground">यदि आपके आधार और पैन के विवरण मेल नहीं खाते हैं, तो आपका पैन-आधार लिंकिंग विफल हो सकता है। यह बहुत महत्वपूर्ण है कि आप सुधार प्रक्रिया का उपयोग करके दोनों दस्तावेजों में अपनी जानकारी को एक समान कर लें।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">5. सुधार के बाद क्या मुझे नया पैन नंबर मिलेगा?</summary>
                <p className="mt-2 text-muted-foreground">नहीं, पैन कार्ड में सुधार करने पर आपका पैन नंबर वही रहता है। आपको बस एक नया पैन कार्ड जारी किया जाता है जिसमें सही जानकारी होती है।</p>
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
