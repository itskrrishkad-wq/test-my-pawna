"use client";
import ArticleCard from "@/components/ArticleCard";
import { articles, formatDate, getRelatedArticles } from "@/constant/data";
import { Calendar, Clock, Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { use } from "react";

const BlogPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground">
            Article not found
          </h1>
          <Link
            href="/"
            className="mt-4 inline-block text-accent hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </>
    );
  }

  const related = getRelatedArticles(article.slug);
  const shareUrl = encodeURIComponent(
    `https://growthpulse.blog/blog/${article.slug}`,
  );
  const shareTitle = encodeURIComponent(article.title);
  return (
    <div className="w-full pt-20">
      <main className="container mx-auto px-6">
        {/* Breadcrumbs */}
        <nav
          className="py-4 text-sm text-muted-foreground"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-1.5 flex-wrap">
            <li>
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <p className="hover:text-foreground transition-colors capitalize">
                {article.category.replace("-", " ")}
              </p>
            </li>
            <li>/</li>
            <li className="text-foreground truncate max-w-[200px]">
              {article.title}
            </li>
          </ol>
        </nav>

        {/* Article Header */}
        <header className="max-w-3xl mx-auto text-center py-8">
          <Link
            href={`/category/${article.category}`}
            className="text-xs font-semibold uppercase tracking-wider text-accent"
          >
            {article.category.replace("-", " ")}
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-3 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground flex-wrap">
            <div className="flex items-center gap-1">
              <Calendar size={14} /> {formatDate(article.publishDate)}
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} /> {article.readTime} min read
            </div>
          </div>

          {/* Share */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <span className="text-xs text-muted-foreground mr-1">Share:</span>
            <a
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter size={16} />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook size={16} />
            </a>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto">
          <img
            src={article.featuredImage}
            alt={article.title}
            className="w-full rounded-xl aspect-[2/1] object-cover"
          />
        </div>

        {/* Content + Sidebar */}
        <div className="max-w-6xl mx-auto py-12">
          <article className="max-w-3xl mx-auto w-full">
            <div
              className="prose-blog"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
        </div>

        {/* Related Articles Full Width */}
        {related.length > 0 && (
          <section className="max-w-6xl mx-auto py-12 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              You might also like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default BlogPage;
