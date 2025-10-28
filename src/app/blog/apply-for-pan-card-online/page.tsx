
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, CheckCircle, AlertCircle, Info, User, Calendar, FileText, CreditCard, Search } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ऑनलाइन पैन कार्ड अप्लाई कैसे करें (2024 गाइड) | Apply for PAN Card Online',
  description: 'घर बैठे ऑनलाइन पैन कार्ड के लिए आवेदन करने की पूरी प्रक्रिया जानें। आवश्यक दस्तावेज, फॉर्म 49A भरने की विधि, फीस भुगतान, और स्टेटस ट्रैक करने की स्टेप-बाय-स्टेप गाइड।',
  keywords: 'apply for pan card online, pan card application, form 49a online, nsdl pan, utiitsl pan, new pan card, पैन कार्ड अप्लाई ऑनलाइन, नया पैन कार्ड कैसे बनाएं',
  alternates: {
    canonical: '/blog/apply-for-pan-card-online',
  },
  openGraph: {
    title: 'ऑनलाइन पैन कार्ड अप्लाई कैसे करें (2024 गाइड) | Apply for PAN Card Online',
    description: 'इस विस्तृत गाइड से सीखें कि नए पैन कार्ड के लिए ऑनलाइन आवेदन कैसे करें, कौन से दस्तावेज़ ज़रूरी हैं, और आवेदन की स्थिति को कैसे ट्रैक करें।',
    url: '/blog/apply-for-pan-card-online',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1080&q=80&fit=max',
        width: 1080,
        height: 720,
        alt: 'Online form submission for PAN card',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  'headline': 'ऑनलाइन पैन कार्ड कैसे अप्लाई करें: एक पूरी गाइड (2024)',
  'description': 'यह गाइड आपको नए पैन कार्ड के लिए ऑनलाइन आवेदन करने की पूरी प्रक्रिया बताती है, जिसमें NSDL और UTIITSL पोर्टल्स का उपयोग, आवश्यक दस्तावेज, और आवेदन की स्थिति को ट्रैक करना शामिल है।',
  'image': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1080&q=80&fit=max',  
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
    '@id': 'https://your-domain.com/blog/apply-for-pan-card-online' // Replace with your actual domain
  },
  'faqPage': {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'पैन कार्ड के लिए कौन आवेदन कर सकता है?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'कोई भी भारतीय नागरिक, NRI, और विदेशी नागरिक (जो भारत में टैक्स भरते हैं) पैन कार्ड के लिए आवेदन कर सकते हैं। कंपनियां, ट्रस्ट और अन्य संस्थाएं भी आवेदन कर सकती हैं।'
          }
        },
        {
          '@type': 'Question',
          'name': 'ऑनलाइन आवेदन के बाद पैन कार्ड कितने दिनों में आता है?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'सफलतापूर्वक आवेदन और दस्तावेज़ सत्यापन के बाद, e-PAN कार्ड आमतौर पर कुछ घंटों से लेकर 1-2 दिनों में आपकी ईमेल आईडी पर आ जाता है, जबकि फिजिकल पैन कार्ड आपके पते पर 15-20 कार्य दिवसों में पहुँचता है।'
          }
        },
        {
          '@type': 'Question',
          'name': 'क्या बिना आधार कार्ड के पैन कार्ड बन सकता है?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'आजकल, नए पैन कार्ड के लिए आवेदन करते समय आधार कार्ड लगभग अनिवार्य है। आधार-आधारित e-KYC प्रक्रिया को बहुत आसान बना देता है। यदि आपके पास आधार नहीं है, तो आपको अन्य पहचान और पते के प्रमाण देने होंगे, और प्रक्रिया अधिक जटिल हो सकती है।'
          }
        },
        {
          '@type': 'Question',
          'name': 'पैन कार्ड आवेदन के लिए फीस कितनी है?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'भारतीय नागरिकों के लिए, भारत में पते पर पैन कार्ड भेजने की फीस लगभग ₹107 (GST सहित) है। यदि आपको केवल e-PAN कार्ड चाहिए, तो फीस कम हो सकती है। विदेशी पते के लिए फीस अधिक होती है।'
          }
        },
        {
          '@type': 'Question',
          'name': 'अगर मेरे आवेदन फॉर्म में कोई गलती हो जाए तो क्या करें?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'यदि आपने फॉर्म जमा कर दिया है और बाद में कोई गलती पता चलती है, तो आपको पैन कार्ड करेक्शन के लिए आवेदन करना होगा। इसके लिए भी NSDL या UTIITSL पोर्टल पर "Change/Correction in PAN Data" का विकल्प चुनना होता है।'
          }
        }
      ]
    }
};


export default function ApplyForPanCardPost() {
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
              ऑनलाइन पैन कार्ड कैसे अप्लाई करें: एक पूरी गाइड (2024)
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
              इस स्टेप-बाय-स्टेप गाइड से सीखें कि घर बैठे नए पैन कार्ड के लिए ऑनलाइन आवेदन कैसे करें, कौन से दस्तावेज़ ज़रूरी हैं, और आवेदन की स्थिति को कैसे ट्रैक करें।
            </p>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          
          <div className="relative w-full h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmb3JtJTIwc3VibWlzc2lvbnxlbnwwfHx8fDE3NjE2MjgyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Applying for PAN card online"
              fill
              style={{ objectFit: 'cover' }}
              data-ai-hint="form submission"
              priority
            />
          </div>

          <p className="lead">
            परमानेंट अकाउंट नंबर (PAN) एक 10-अंकीय अल्फान्यूमेरिक कोड है जो भारत के आयकर विभाग द्वारा जारी किया जाता है। यह न केवल टैक्स भरने के लिए, बल्कि बैंक खाता खोलने, निवेश करने, और कई अन्य वित्तीय लेन-देनों के लिए एक अनिवार्य दस्तावेज़ है। सौभाग्य से, अब आप पैन कार्ड के लिए घर बैठे ऑनलाइन आवेदन कर सकते हैं।
          </p>

          <p>
            इस विस्तृत गाइड में, हम आपको नए पैन कार्ड के लिए ऑनलाइन आवेदन करने की पूरी प्रक्रिया बताएंगे, जिसमें NSDL और UTIITSL दोनों पोर्टल्स के माध्यम से आवेदन करना शामिल है।
          </p>

          <Card className="border-l-4 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-xl sm:text-2xl">
                <Info className="h-7 w-7 text-accent" />
                पैन कार्ड क्यों जरूरी है?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5">
                <li><strong>आयकर रिटर्न (ITR) दाखिल करना:</strong> टैक्स स्लैब में आने वाले सभी व्यक्तियों और संस्थाओं के लिए अनिवार्य।</li>
                <li><strong>बैंक खाता खोलना:</strong> लगभग सभी बैंक पैन कार्ड की मांग करते हैं।</li>
                <li><strong>अधिक मूल्य के लेनदेन:</strong> ₹50,000 से अधिक के लेनदेन के लिए आवश्यक।</li>
                <li><strong>निवेश करना:</strong> म्यूचुअल फंड, स्टॉक मार्केट, और अन्य निवेशों के लिए KYC प्रक्रिया का एक महत्वपूर्ण हिस्सा।</li>
                <li><strong>पहचान प्रमाण:</strong> यह एक वैध फोटो पहचान पत्र के रूप में भी काम करता है।</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">आवेदन के लिए आवश्यक दस्तावेज़ (Required Documents)</h2>
          <p>
            ऑनलाइन आवेदन प्रक्रिया शुरू करने से पहले, सुनिश्चित करें कि आपके पास निम्नलिखित दस्तावेजों की स्कैन की हुई प्रतियां तैयार हैं:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>पहचान का प्रमाण (Identity Proof):</strong> आधार कार्ड, वोटर आईडी, ड्राइविंग लाइसेंस, या पासपोर्ट।</li>
            <li><strong>पते का प्रमाण (Address Proof):</strong> आधार कार्ड, वोटर आईडी, बिजली का बिल, बैंक पासबुक, या किराया समझौता।</li>
            <li><strong>जन्म तिथि का प्रमाण (Date of Birth Proof):</strong> जन्म प्रमाण पत्र, 10वीं कक्षा की मार्कशीट, या पासपोर्ट।</li>
            <li><strong>पासपोर्ट आकार की तस्वीर:</strong> हाल ही में खींची गई फोटो (स्कैन की हुई)।</li>
            <li><strong>हस्ताक्षर:</strong> एक सादे कागज पर किए गए हस्ताक्षर की स्कैन की हुई कॉपी।</li>
          </ul>
           <p className='text-sm text-muted-foreground'><strong>नोट:</strong> यदि आप आधार-आधारित e-KYC का विकल्प चुनते हैं, तो आपको अधिकांश दस्तावेज़ अपलोड करने की आवश्यकता नहीं होगी, क्योंकि आपकी जानकारी सीधे आधार डेटाबेस से ले ली जाएगी।</p>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">विधि 1: NSDL (Protean) पोर्टल के माध्यम से आवेदन करें</h2>
          <p>
            NSDL (अब Protean eGov Technologies Ltd.) पैन कार्ड जारी करने वाली दो अधिकृत एजेंसियों में से एक है।
          </p>

          <h3 className="font-headline text-xl sm:text-2xl font-semibold">स्टेप-बाय-स्टेप प्रक्रिया:</h3>
          <ol className="list-decimal list-inside space-y-3 pl-4">
            <li>NSDL के आधिकारिक <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">PAN Services Portal</a> पर जाएं।</li>
            <li>'Application Type' में 'New PAN - Indian Citizen (Form 49A)' चुनें। यदि आप विदेशी नागरिक हैं, तो Form 49AA चुनें।</li>
            <li>'Category' में 'Individual' चुनें।</li>
            <li>अपनी व्यक्तिगत जानकारी जैसे नाम, जन्मतिथि, ईमेल आईडी और मोबाइल नंबर भरें।</li>
            <li>कैप्चा कोड दर्ज करें और 'Submit' पर क्लिक करें। आपको एक टोकन नंबर मिलेगा, इसे भविष्य के लिए नोट कर लें।</li>
            <li>'Continue with PAN Application Form' पर क्लिक करें। अब आपको आवेदन फॉर्म पर पुनः निर्देशित किया जाएगा।</li>
            <li>यहां आपको आवेदन जमा करने के तीन विकल्प मिलेंगे:
                <ul className='list-disc pl-8 mt-2 space-y-1'>
                    <li><strong>e-KYC & e-Sign (Paperless):</strong> सबसे आसान तरीका। इसमें आधार OTP का उपयोग होता है और कोई दस्तावेज़ अपलोड करने की आवश्यकता नहीं होती है।</li>
                    <li><strong>Scanned images through e-Sign:</strong> इसमें आपको अपनी फोटो और हस्ताक्षर की स्कैन की हुई कॉपी अपलोड करनी होगी।</li>
                    <li><strong>Forward application documents physically:</strong> इसमें आपको फॉर्म भरने के बाद दस्तावेज़ों को NSDL के पते पर भेजना होता है।</li>
                </ul>
            </li>
            <li>अपनी व्यक्तिगत, संपर्क और अन्य जानकारी को ध्यानपूर्वक भरें। AO (Assessing Officer) कोड आपके क्षेत्र के अनुसार स्वतः भर सकता है।</li>
            <li>दस्तावेज़ अपलोड करें (यदि दूसरा विकल्प चुना है) और 'Submit' करें।</li>
            <li>अगले पेज पर, आपको भुगतान करना होगा। आप क्रेडिट/डेबिट कार्ड, नेट बैंकिंग, या डिमांड ड्राफ्ट के माध्यम से भुगतान कर सकते हैं।</li>
            <li>सफल भुगतान के बाद, आपको एक पावती (acknowledgment) रसीद मिलेगी। इसका प्रिंटआउट ले लें। यदि आपने e-KYC नहीं चुना है, तो इस रसीद पर अपनी फोटो चिपकाएं, हस्ताक्षर करें और आवश्यक दस्तावेजों के साथ NSDL के पुणे स्थित कार्यालय में भेजें।</li>
          </ol>

           <div className="pt-4">
              <Button asChild>
                <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" target="_blank" rel="noopener noreferrer">
                  NSDL पोर्टल पर अप्लाई करें
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
          </div>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">विधि 2: UTIITSL पोर्टल के माध्यम से आवेदन करें</h2>
          <p>
            UTI Infrastructure Technology and Services Limited (UTIITSL) भी पैन कार्ड जारी करने के लिए एक अधिकृत एजेंसी है।
          </p>
           <ol className="list-decimal list-inside space-y-3 pl-4">
            <li>UTIITSL के <a href="https://www.pan.utiitsl.com/PAN/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">PAN Online Portal</a> पर जाएं।</li>
            <li>'PAN Card as an Indian Citizen/NRI' के तहत 'Click to Apply' पर क्लिक करें।</li>
            <li>'Apply for New PAN Card (Form 49A)' चुनें।</li>
            <li>'Physical Mode' (दस्तावेज़ भेजना) या 'Digital Mode' (पेपरलेस) में से चुनें। डिजिटल मोड (आधार-आधारित e-KYC) अधिक सुविधाजनक है।</li>
            <li>अपनी व्यक्तिगत जानकारी भरें और 'Submit' करें।</li>
            <li>एक कूपन नंबर जेनरेट होगा। अब आपको फॉर्म के बाकी हिस्सों को भरना होगा, जिसमें पता, संपर्क विवरण आदि शामिल हैं।</li>
            <li>दस्तावेज़ों को अपलोड करें (यदि आवश्यक हो) और भुगतान करें।</li>
            <li>भुगतान के बाद, आपको पावती रसीद मिलेगी। इसे सहेज कर रखें।</li>
          </ol>

           <div className="pt-4">
              <Button asChild>
                <a href="https://www.pan.utiitsl.com/PAN/" target="_blank" rel="noopener noreferrer">
                  UTIITSL पोर्टल पर अप्लाई करें
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
          </div>


          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">पैन कार्ड आवेदन का स्टेटस कैसे ट्रैक करें?</h2>
          <p>आवेदन जमा करने के बाद, आप अपने 15-अंकीय पावती नंबर का उपयोग करके अपने आवेदन की स्थिति को ट्रैक कर सकते हैं।</p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>NSDL स्टेटस ट्रैकिंग:</strong> <a href="https://tin.tin.nsdl.com/pantan/StatusTrack.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">NSDL Status Track</a> पेज पर जाएं।</li>
            <li><strong>UTIITSL स्टेटस ट्रैकिंग:</strong> <a href="https://www.trackpan.utiitsl.com/PANONLINE/#forward" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">UTIITSL Track PAN Card</a> पेज पर जाएं।</li>
          </ul>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">अक्सर पूछे जाने वाले प्रश्न (FAQ)</h2>

          <div className="space-y-4">
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">1. पैन कार्ड के लिए कौन आवेदन कर सकता है?</summary>
                <p className="mt-2 text-muted-foreground">कोई भी भारतीय नागरिक, NRI, और विदेशी नागरिक (जो भारत में टैक्स भरते हैं) पैन कार्ड के लिए आवेदन कर सकते हैं। कंपनियां, ट्रस्ट और अन्य संस्थाएं भी आवेदन कर सकती हैं।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">2. ऑनलाइन आवेदन के बाद पैन कार्ड कितने दिनों में आता है?</summary>
                <p className="mt-2 text-muted-foreground">सफलतापूर्वक आवेदन और दस्तावेज़ सत्यापन के बाद, e-PAN कार्ड आमतौर पर कुछ घंटों से लेकर 1-2 दिनों में आपकी ईमेल आईडी पर आ जाता है, जबकि फिजिकल पैन कार्ड आपके पते पर 15-20 कार्य दिवसों में पहुँचता है।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">3. क्या बिना आधार कार्ड के पैन कार्ड बन सकता है?</summary>
                <p className="mt-2 text-muted-foreground">आजकल, नए पैन कार्ड के लिए आवेदन करते समय आधार कार्ड लगभग अनिवार्य है। आधार-आधारित e-KYC प्रक्रिया को बहुत आसान बना देता है। यदि आपके पास आधार नहीं है, तो आपको अन्य पहचान और पते के प्रमाण देने होंगे, और प्रक्रिया अधिक जटिल हो सकती है।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">4. पैन कार्ड आवेदन के लिए फीस कितनी है?</summary>
                <p className="mt-2 text-muted-foreground">भारतीय नागरिकों के लिए, भारत में पते पर पैन कार्ड भेजने की फीस लगभग ₹107 (GST सहित) है। यदि आपको केवल e-PAN कार्ड चाहिए, तो फीस कम हो सकती है। विदेशी पते के लिए फीस अधिक होती है।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">5. अगर मेरे आवेदन फॉर्म में कोई गलती हो जाए तो क्या करें?</summary>
                <p className="mt-2 text-muted-foreground">यदि आपने फॉर्म जमा कर दिया है और बाद में कोई गलती पता चलती है, तो आपको पैन कार्ड करेक्शन के लिए आवेदन करना होगा। इसके लिए भी NSDL या UTIITSL पोर्टल पर "Change/Correction in PAN Data" का विकल्प चुनना होता है।</p>
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
