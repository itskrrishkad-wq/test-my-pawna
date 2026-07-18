import { Article } from "@/constant/data";
import Link from "next/link";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({
  article,
  featured = false,
}: ArticleCardProps) {
  return (
    <article className="group">
      <Link href={`/blog/${article.slug}`} className="block">
        <div
          className={`overflow-hidden rounded-xl ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}
        >
          <img
            src={article.featuredImage}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-3 mb-2">
            <div
              onClick={(e) => e.stopPropagation()}
              className="text-xs font-semibold uppercase tracking-wider text-green-500 hover:text-green-500/80 transition-colors"
            >
              {article.category.replace("-", " ")}
            </div>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">
              {article.readTime} min read
            </span>
          </div>

          <h2
            className={`font-bold text-foreground group-hover:text-secondary-foreground transition-colors leading-snug line-clamp-2 ${featured ? "text-2xl" : "text-lg"}`}
          >
            {article.title}
          </h2>

          <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
