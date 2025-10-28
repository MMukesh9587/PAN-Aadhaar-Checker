
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function BlogPage() {
  const blogPosts = PlaceHolderImages.filter(img => img.id.startsWith("blog-"));

  return (
    <main className="flex min-h-dvh w-full flex-col items-center bg-background p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center my-8 md:my-12">
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
                अन्य महत्वपूर्ण जानकारी
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              पैन, आधार और आयकर से संबंधित नवीनतम अपडेट और गाइड।
            </p>
        </header>
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
        </section>
      </div>
    </main>
  );
}
