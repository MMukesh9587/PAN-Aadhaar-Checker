import { MetadataRoute } from 'next';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = 'https://your-domain.com'; // Replace with your actual domain

  // Get all blog post URLs
  const blogPosts = PlaceHolderImages.filter(img => img.id.startsWith("blog-")).map((post) => ({
    url: `${domain}${post.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Add static pages
  const staticPages = [
    {
      url: `${domain}/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
        url: `${domain}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    },
    {
        url: `${domain}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    },
    {
        url: `${domain}/privacy-policy`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.5,
    },
    {
        url: `${domain}/terms-and-conditions`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: 0.5,
    }
  ];

  return [...staticPages, ...blogPosts];
}
