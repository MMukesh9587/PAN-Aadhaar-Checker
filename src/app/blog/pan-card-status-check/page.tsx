
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Search, Info, HelpCircle, User, Calendar } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'पैन कार्ड स्टेटस कैसे चेक करें (NSDL/UTI) - 2024 गाइड | PAN Card Status Check',
  description: 'अपने पैन कार्ड आवेदन का स्टेटस ऑनलाइन कैसे चेक करें? जानें NSDL (Acknowledgement Number) और UTIITSL (Coupon Number) पोर्टल पर पैन कार्ड स्टेटस ट्रैक करने की पूरी प्रक्रिया।',
  keywords: 'pan card status, pan card status check, nsdl pan status, uti pan status, track pan card, पैन कार्ड स्टेटस, पैन कार्ड स्टेटस चेक, acknowledgement number, coupon number',
  alternates: {
    canonical: '/blog/pan-card-status-check',
  },
  openGraph: {
    title: 'पैन कार्ड स्टेटस कैसे चेक करें (NSDL/UTI) - 2024 गाइड | PAN Card Status Check',
    description: 'NSDL और UTIITSL पोर्टल पर अपने पैन कार्ड आवेदन की स्थिति को ट्रैक करने की स्टेप-बाय-स्टेप प्रक्रिया सीखें।',
    url: '/blog/pan-card-status-check',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1080&q=80&fit=max',
        width: 1080,
        height: 720,
        alt: 'Person checking status on a laptop',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  'headline': 'पैन कार्ड स्टेटस कैसे चेक करें (NSDL और UTIITSL): पूरी गाइड 2024',
  'description': 'यह गाइड आपको पैन कार्ड आवेदन की स्थिति को ऑनलाइन ट्रैक करने की पूरी प्रक्रिया बताती है, जिसमें NSDL के Acknowledgement Number और UTIITSL के Coupon Number का उपयोग शामिल है।',
  'image': 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1080&q=80&fit=max',  
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
    '@id': 'https://your-domain.com/blog/pan-card-status-check'
  },
  'faqPage': {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'पैन कार्ड स्टेटस जांचने के लिए क्या जानकारी चाहिए?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'आपको उस पोर्टल के आधार पर Acknowledgement Number (NSDL के लिए) या Coupon Number (UTIITSL के लिए) की आवश्यकता होगी जिससे आपने आवेदन किया था। इसके अलावा, आपको अपनी जन्मतिथि या पैन नंबर की भी आवश्यकता हो सकती है।'
          }
        },
        {
          '@type': 'Question',
          'name': 'आवेदन करने के कितने समय बाद मैं अपना स्टेटस चेक कर सकता हूँ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'आमतौर पर, आप पैन कार्ड के लिए आवेदन करने के 24 से 48 घंटों के बाद अपने आवेदन की स्थिति को ट्रैक कर सकते हैं।'
          }
        },
        {
          '@type': 'Question',
          'name': 'अगर मेरा Acknowledgement/Coupon नंबर खो गया है तो क्या करें?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'यदि आपका ट्रैकिंग नंबर खो गया है, तो आप NSDL या UTIITSL की वेबसाइट पर अपना नाम और जन्मतिथि का उपयोग करके इसे पुनः प्राप्त करने का प्रयास कर सकते हैं। कुछ मामलों में, आपको उनकी ग्राहक सेवा से संपर्क करना पड़ सकता है।'
          }
        },
        {
          '@type': 'Question',
          'name': 'पैन कार्ड स्टेटस "Dispatched" दिखा रहा है। इसका क्या मतलब है?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'इसका मतलब है कि आपका फिजिकल पैन कार्ड प्रिंट हो चुका है और आपके पंजीकृत पते पर डाक द्वारा भेज दिया गया है। इसे आप तक पहुंचने में 7-15 कार्य दिवस लग सकते हैं। आपको एक ट्रैकिंग नंबर (AWB number) भी मिल सकता है।'
          }
        },
        {
          '@type': 'Question',
          'name': 'क्या मैं NSDL पर आवेदन करके UTIITSL पर स्टेटस चेक कर सकता हूँ?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'नहीं, आप ऐसा नहीं कर सकते। आपने जिस एजेंसी (NSDL या UTIITSL) के माध्यम से पैन कार्ड के लिए आवेदन किया है, आपको उसी एजेंसी के पोर्टल पर अपने आवेदन का स्टेटस ट्रैक करना होगा।'
          }
        }
      ]
    }
};


export default function PanCardStatusCheckPost() {
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
              पैन कार्ड स्टेटस कैसे चेक करें (NSDL/UTI) - 2024 गाइड
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
              क्या आपने पैन कार्ड के लिए आवेदन किया है और अब जानना चाहते हैं कि वह कहाँ तक पहुँचा? इस गाइड में हम आपको पैन कार्ड स्टेटस ऑनलाइन चेक करने की पूरी प्रक्रिया बताएंगे।
            </p>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          
          <div className="relative w-full h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxuZXdzcGFwZXJ8ZW58MHx8fHwxNzYzNDgyODk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Checking PAN card status online on a laptop"
              fill
              style={{ objectFit: 'cover' }}
              data-ai-hint="news information"
              priority
            />
          </div>

          <p className="lead">
            पैन कार्ड के लिए आवेदन करने के बाद, यह जानना स्वाभाविक है कि आपका आवेदन स्वीकृत हुआ है या नहीं, और आपका पैन कार्ड कब तक आप तक पहुंचेगा। सौभाग्य से, भारत सरकार ने इस प्रक्रिया को बहुत पारदर्शी बना दिया है। आप घर बैठे ऑनलाइन अपने पैन कार्ड आवेदन की स्थिति (Status) को आसानी से ट्रैक कर सकते हैं।
          </p>

          <p>
            भारत में पैन कार्ड दो मुख्य सरकारी एजेंसियों द्वारा जारी किए जाते हैं - <strong>NSDL (Protean)</strong> और <strong>UTIITSL</strong>। आपने जिस एजेंसी के माध्यम से आवेदन किया है, आपको उसी के पोर्टल पर अपना स्टेटस चेक करना होगा। इस गाइड में, हम दोनों पोर्टलों पर स्टेटस ट्रैक करने की प्रक्रिया को विस्तार से समझेंगे।
          </p>

          <Card className="border-l-4 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-xl sm:text-2xl">
                <Info className="h-7 w-7 text-accent" />
                स्टेटस जांचने से पहले क्या जानना जरूरी है?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5">
                <li><strong>आवेदन पोर्टल की पहचान करें:</strong> याद करें कि आपने NSDL से आवेदन किया था या UTIITSL से।</li>
                <li><strong>ट्रैकिंग नंबर संभाल कर रखें:</strong>
                  <ul className="list-disc space-y-1 pl-5 mt-2">
                    <li>यदि आपने NSDL से आवेदन किया है, तो आपको 15-अंकीय <strong>Acknowledgement Number</strong> मिला होगा।</li>
                    <li>यदि आपने UTIITSL से आवेदन किया है, तो आपको 9-अंकीय <strong>Application Coupon Number</strong> मिला होगा।</li>
                  </ul>
                </li>
                <li><strong>धैर्य रखें:</strong> आवेदन जमा करने के तुरंत बाद स्टेटस अपडेट नहीं होता है। आमतौर पर 24-48 घंटे प्रतीक्षा करने की सलाह दी जाती है।</li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary flex items-center gap-3">
            <Search className="h-7 w-7" />
            विधि 1: NSDL (Protean) पोर्टल पर पैन कार्ड स्टेटस कैसे ट्रैक करें?
          </h2>
          <p>
            यदि आपने NSDL (अब Protean eGov Technologies Ltd.) के माध्यम से नए पैन कार्ड या पैन सुधार के लिए आवेदन किया है, तो आप अपने 15-अंकीय Acknowledgement Number का उपयोग करके स्टेटस ट्रैक कर सकते हैं।
          </p>
          <h3 className="font-headline text-xl sm:text-2xl font-semibold">स्टेप-बाय-स्टेप प्रक्रिया:</h3>
          <ol className="list-decimal list-inside space-y-3 pl-4">
            <li>सबसे पहले NSDL के आधिकारिक <a href="https://tin.tin.nsdl.com/pantan/StatusTrack.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">PAN/TAN Application Status Track</a> पेज पर जाएं।</li>
            <li>पेज खुलने पर आपको एक फॉर्म दिखाई देगा। 'Application Type' ड्रॉप-डाउन में <strong>'PAN - New / Change Request'</strong> विकल्प चुनें।</li>
            <li>इसके बाद, 'Acknowledgement Number' वाले बॉक्स में अपना 15-अंकीय रसीद नंबर ध्यान से दर्ज करें।</li>
            <li>स्क्रीन पर दिख रहे वेरिफिकेशन कैप्चा कोड को खाली बॉक्स में भरें।</li>
            <li>सारी जानकारी भरने के बाद 'Submit' बटन पर क्लिक करें।</li>
            <li>अगली स्क्रीन पर, आपके पैन आवेदन की वर्तमान स्थिति विस्तार से दिखाई देगी।</li>
          </ol>
          <div className="pt-4">
              <Button asChild>
                <a href="https://tin.tin.nsdl.com/pantan/StatusTrack.html" target="_blank" rel="noopener noreferrer">
                  NSDL पर स्टेटस ट्रैक करें
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
          </div>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary flex items-center gap-3">
             <Search className="h-7 w-7" />
            विधि 2: UTIITSL पोर्टल पर पैन कार्ड स्टेटस कैसे ट्रैक करें?
          </h2>
          <p>
            यदि आपने UTI Infrastructure Technology and Services Limited (UTIITSL) पोर्टल का उपयोग करके पैन कार्ड के लिए आवेदन किया है, तो आपको स्टेटस ट्रैक करने के लिए अपना 'Application Coupon Number' चाहिए होगा।
          </p>
           <h3 className="font-headline text-xl sm:text-2xl font-semibold">स्टेप-बाय-स्टेप प्रक्रिया:</h3>
           <ol className="list-decimal list-inside space-y-3 pl-4">
            <li>सबसे पहले UTIITSL के आधिकारिक <a href="https://www.trackpan.utiitsl.com/PANONLINE/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Track Your PAN Card</a> पोर्टल पर जाएं।</li>
            <li>यहां आपको स्टेटस जांचने के लिए एक फॉर्म मिलेगा। 'Application Coupon number' फील्ड में अपना 9-अंकीय कूपन नंबर दर्ज करें।</li>
            <li>यदि आप पैन कार्ड में सुधार (correction) या रीप्रिंट की स्थिति जांच रहे हैं, तो आप अपना 10-अंकीय पैन नंबर भी दर्ज कर सकते हैं।</li>
            <li>इसके बाद, अपनी 'Date of Birth' (जन्म तिथि) को DD/MM/YYYY फॉर्मेट में भरें या कैलेंडर से चुनें।</li>
            <li>दिए गए 'Captcha' कोड को ध्यान से संबंधित बॉक्स में भरें।</li>
            <li>सारी जानकारी भरने के बाद 'Submit' बटन पर क्लिक करें।</li>
            <li>क्लिक करते ही आपके आवेदन की वर्तमान स्थिति (Current Status) स्क्रीन पर प्रदर्शित हो जाएगी।</li>
          </ol>
          <div className="pt-4">
              <Button asChild>
                <a href="https://www.trackpan.utiitsl.com/PANONLINE/" target="_blank" rel="noopener noreferrer">
                  UTIITSL पर स्टेटस ट्रैक करें
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
          </div>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary flex items-center gap-3">
            <HelpCircle className="h-7 w-7" />
            पैन कार्ड के विभिन्न स्टेटस का क्या मतलब है?
          </h2>
          <p>स्टेटस ट्रैक करते समय, आपको कई तरह के संदेश मिल सकते हैं। यहां कुछ सामान्य स्टेटस और उनके अर्थ दिए गए हैं:</p>
          <ul className="list-disc space-y-3 pl-5">
              <li><strong>Application received and under processing:</strong> इसका मतलब है कि आपका आवेदन सफलतापूर्वक प्राप्त हो गया है और एजेंसी द्वारा इसकी जांच की जा रही है।</li>
              <li><strong>Application is processed and sent for verification:</strong> आपका आवेदन प्रारंभिक जांच के बाद आयकर विभाग को सत्यापन के लिए भेज दिया गया है।</li>
              <li><strong>PAN allotted. Card is under printing:</strong> आपका पैन नंबर आवंटित कर दिया गया है और आपका फिजिकल कार्ड प्रिंटिंग प्रक्रिया में है।</li>
              <li><strong>Your PAN card has been dispatched...:</strong> आपका पैन कार्ड प्रिंट होकर आपके पंजीकृत पते पर भेज दिया गया है। आपको स्पीड पोस्ट का ट्रैकिंग (AWB) नंबर भी मिल सकता है, जिससे आप डाक की स्थिति जान सकते हैं।</li>
              <li><strong>Application held for discrepancy/verification:</strong> आपके आवेदन में कुछ जानकारी (जैसे नाम या जन्मतिथि का मेल न खाना) गलत या अधूरी है, जिसके कारण उसे रोक दिया गया है। आपको सुधार करने के लिए ईमेल या SMS द्वारा सूचित किया जा सकता है।</li>
          </ul>

          <h2 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-primary">अक्सर पूछे जाने वाले प्रश्न (FAQ)</h2>

          <div className="space-y-4">
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">1. पैन कार्ड स्टेटस जांचने के लिए क्या जानकारी चाहिए?</summary>
                <p className="mt-2 text-muted-foreground">आपको उस पोर्टल के आधार पर Acknowledgement Number (NSDL के लिए) या Coupon Number (UTIITSL के लिए) की आवश्यकता होगी जिससे आपने आवेदन किया था। इसके अलावा, आपको अपनी जन्मतिथि या पैन नंबर की भी आवश्यकता हो सकती है।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">2. आवेदन करने के कितने समय बाद मैं अपना स्टेटस चेक कर सकता हूँ?</summary>
                <p className="mt-2 text-muted-foreground">आमतौर पर, आप पैन कार्ड के लिए आवेदन करने के 24 से 48 घंटों के बाद अपने आवेदन की स्थिति को ट्रैक कर सकते हैं।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">3. अगर मेरा Acknowledgement/Coupon नंबर खो गया है तो क्या करें?</summary>
                <p className="mt-2 text-muted-foreground">यदि आपका ट्रैकिंग नंबर खो गया है, तो आप NSDL या UTIITSL की वेबसाइट पर अपना नाम और जन्मतिथि का उपयोग करके इसे पुनः प्राप्त करने का प्रयास कर सकते हैं। कुछ मामलों में, आपको उनकी ग्राहक सेवा से संपर्क करना पड़ सकता है।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">4. पैन कार्ड स्टेटस "Dispatched" दिखा रहा है। इसका क्या मतलब है?</summary>
                <p className="mt-2 text-muted-foreground">इसका मतलब है कि आपका फिजिकल पैन कार्ड प्रिंट हो चुका है और आपके पंजीकृत पते पर डाक द्वारा भेज दिया गया है। इसे आप तक पहुंचने में 7-15 कार्य दिवस लग सकते हैं। आपको एक ट्रैकिंग नंबर (AWB number) भी मिल सकता है।</p>
            </details>
            <details className="p-4 border rounded-lg">
                <summary className="font-semibold cursor-pointer">5. क्या मैं NSDL पर आवेदन करके UTIITSL पर स्टेटस चेक कर सकता हूँ?</summary>
                <p className="mt-2 text-muted-foreground">नहीं, आप ऐसा नहीं कर सकते। आपने जिस एजेंसी (NSDL या UTIITSL) के माध्यम से पैन कार्ड के लिए आवेदन किया है, आपको उसी एजेंसी के पोर्टल पर अपने आवेदन का स्टेटस ट्रैक करना होगा।</p>
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
            <p><strong>अस्वीकरण (Disclaimer):</strong> यह एक अनौपचारिक गाइड है और केवल सूचनात्मक उद्देश्यों के लिए है। हमेशा नवीनतम जानकारी के लिए आधिकारिक NSDL (Protean), UTIITSL या आयकर विभाग की वेबसाइट देखें।</p>
          </div>

        </article>
      </div>
    </main>
  );
}

