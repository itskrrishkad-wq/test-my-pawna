export interface Author {
  name: string;
  avatar: string;
  bio: string;
  role: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  author: Author;
  publishDate: string;
  readTime: number;
  featured: boolean;
  tags: string[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  articleCount: number;
}

const authors: Record<string, Author> = {
  sarah: {
    name: "Sarah Mitchell",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    bio: "Sarah is a growth marketing strategist with 10+ years of experience scaling SaaS companies. She writes about SEO, content strategy, and data-driven growth.",
    role: "Head of Growth",
  },
  james: {
    name: "James Chen",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    bio: "James is a technical SEO specialist and full-stack developer. He focuses on performance optimization and technical content strategies.",
    role: "Technical SEO Lead",
  },
  emma: {
    name: "Emma Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    bio: "Emma specializes in content marketing and brand storytelling. She helps B2B companies build authority through strategic content.",
    role: "Content Director",
  },
};

export const categories: Category[] = [
  {
    slug: "seo",
    name: "SEO",
    description:
      "Search engine optimization strategies, technical SEO guides, and ranking tips",
    articleCount: 24,
  },
  {
    slug: "content-marketing",
    name: "Content Marketing",
    description:
      "Content strategy, copywriting, and content distribution tactics",
    articleCount: 18,
  },
  {
    slug: "growth",
    name: "Growth",
    description: "Growth hacking, user acquisition, and scaling strategies",
    articleCount: 15,
  },
  {
    slug: "analytics",
    name: "Analytics",
    description: "Data analytics, tracking, and performance measurement",
    articleCount: 12,
  },
  {
    slug: "email-marketing",
    name: "Email Marketing",
    description: "Email campaigns, automation, and list building strategies",
    articleCount: 9,
  },
  {
    slug: "social-media",
    name: "Social Media",
    description: "Social media strategy, paid social, and community building",
    articleCount: 11,
  },
];

const articleContent = `
<h2 id="introduction">Introduction</h2>
<p>In today's competitive digital landscape, having a solid strategy isn't just an advantage—it's a necessity. Companies that invest in data-driven approaches consistently outperform their competitors by significant margins.</p>

<p>This comprehensive guide will walk you through everything you need to know to build a strategy that drives real, measurable results for your business.</p>

<div class="key-takeaway">
<strong>Key Takeaway:</strong> Companies that adopt data-driven strategies see an average 23% increase in revenue within the first year of implementation.
</div>

<h2 id="why-it-matters">Why This Matters in 2025</h2>
<p>The digital ecosystem is evolving rapidly. What worked two years ago may no longer be effective. Understanding the current landscape is crucial for making informed decisions about where to invest your time and resources.</p>

<p>Recent studies show that 78% of marketers who regularly update their strategies report better ROI compared to those who maintain static approaches.</p>

<blockquote>The best time to start optimizing was yesterday. The second best time is today.</blockquote>

<h2 id="step-by-step">Step-by-Step Implementation Guide</h2>
<h3 id="step-1">Step 1: Audit Your Current Position</h3>
<p>Before making any changes, you need to understand where you currently stand. Conduct a thorough audit of your existing efforts, including performance metrics, content inventory, and competitive positioning.</p>

<ul>
<li>Review your analytics data for the past 12 months</li>
<li>Identify your top-performing content and channels</li>
<li>Analyze competitor strategies and positioning</li>
<li>Document your current tech stack and tools</li>
</ul>

<h3 id="step-2">Step 2: Define Clear Objectives</h3>
<p>Set specific, measurable goals that align with your broader business objectives. Use the SMART framework to ensure your goals are actionable and trackable.</p>

<div class="callout-box">
<strong>💡 Pro Tip:</strong> Focus on 3-5 key objectives rather than trying to optimize everything at once. Concentrated effort yields better results than scattered attention.
</div>

<h3 id="step-3">Step 3: Build Your Framework</h3>
<p>Create a systematic framework that you can execute consistently. The best strategies are repeatable and scalable—they don't rely on heroic individual efforts.</p>

<table>
<thead>
<tr><th>Phase</th><th>Timeline</th><th>Key Actions</th></tr>
</thead>
<tbody>
<tr><td>Foundation</td><td>Month 1-2</td><td>Audit, goal setting, tool setup</td></tr>
<tr><td>Execution</td><td>Month 3-6</td><td>Content creation, outreach, optimization</td></tr>
<tr><td>Scaling</td><td>Month 7-12</td><td>Automation, expansion, refinement</td></tr>
</tbody>
</table>

<h2 id="common-mistakes">Common Mistakes to Avoid</h2>
<p>Even experienced professionals make these errors. Being aware of common pitfalls can save you months of wasted effort and resources.</p>

<ol>
<li><strong>Ignoring data:</strong> Making decisions based on gut feeling rather than analytics</li>
<li><strong>Moving too fast:</strong> Trying to implement everything at once without proper testing</li>
<li><strong>Neglecting foundations:</strong> Skipping basic setup in favor of advanced tactics</li>
<li><strong>Not iterating:</strong> Setting and forgetting instead of continuously optimizing</li>
</ol>

<h2 id="measuring-success">Measuring Success</h2>
<p>Track these key metrics to evaluate the effectiveness of your strategy:</p>

<ul>
<li><strong>Organic traffic growth</strong> — Month-over-month increase in search-driven visitors</li>
<li><strong>Conversion rate</strong> — Percentage of visitors who take desired actions</li>
<li><strong>Engagement metrics</strong> — Time on page, pages per session, bounce rate</li>
<li><strong>Revenue attribution</strong> — Direct revenue tied to your content efforts</li>
</ul>

<h2 id="conclusion">Conclusion</h2>
<p>Building a successful strategy requires patience, consistency, and a willingness to adapt. By following the framework outlined in this guide, you'll be well-positioned to achieve sustainable growth that compounds over time.</p>

<p>Remember: the most important step is the first one. Start with a small, focused initiative, measure your results, and scale what works.</p>
`;

export const articles: Article[] = [
  {
    slug: "complete-seo-guide-2025",
    title: "The Complete SEO Guide for 2025: Strategies That Actually Work",
    excerpt:
      "Master the latest SEO techniques with our comprehensive guide. From technical optimization to content strategy, learn what's driving results in 2025.",
    content: articleContent,
    featuredImage: "/images/thumbnails/complete-seo-guide-2025.webp",
    category: "seo",
    author: authors.sarah,
    publishDate: "2025-02-10",
    readTime: 12,
    featured: true,
    tags: ["SEO", "Strategy", "2025"],
  },
  {
    slug: "content-marketing-roi",
    title: "How to 10x Your Content Marketing ROI This Year",
    excerpt:
      "Discover proven frameworks for maximizing your content marketing investment. Real case studies, actionable templates, and data-backed strategies inside.",
    content: articleContent,
    featuredImage: "/images/thumbnails/content-marketing-roi.webp",
    category: "content-marketing",
    author: authors.emma,
    publishDate: "2025-02-05",
    readTime: 9,
    featured: true,
    tags: ["Content Marketing", "ROI", "Strategy"],
  },
  {
    slug: "technical-seo-checklist",
    title: "Technical SEO Checklist: 50 Points for Maximum Performance",
    excerpt:
      "A comprehensive technical SEO checklist covering site speed, crawlability, indexation, and Core Web Vitals optimization for peak search performance.",
    content: articleContent,
    featuredImage: "/images/thumbnails/technical-seo-checklist.webp",
    category: "seo",
    author: authors.james,
    publishDate: "2025-01-28",
    readTime: 15,
    featured: true,
    tags: ["Technical SEO", "Checklist", "Performance"],
  },
  {
    slug: "growth-hacking-saas",
    title: "Growth Hacking for SaaS: From 0 to 10K Users",
    excerpt:
      "Learn the exact growth playbook that took our SaaS from zero to 10,000 users in 6 months. Step-by-step breakdown with real metrics.",
    content: articleContent,
    featuredImage: "/images/thumbnails/growth-hacking-saas.webp",
    category: "growth",
    author: authors.sarah,
    publishDate: "2025-01-20",
    readTime: 11,
    featured: false,
    tags: ["Growth", "SaaS", "User Acquisition"],
  },
];

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter((a) => a.category === categorySlug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getRelatedArticles(currentSlug: string, limit = 3): Article[] {
  const current = articles.find((a) => a.slug === currentSlug);
  if (!current) return articles.slice(0, limit);
  return articles
    .filter((a) => a.slug !== currentSlug && a.category === current.category)
    .slice(0, limit);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
