"use client";
import ArticleCard from "@/components/ArticleCard";
import { getFeaturedArticles } from "@/constant/data";
import React from "react";

const AllBlogsPage = () => {
  const featured = getFeaturedArticles();
  return (
    <div className="container mx-auto pb-20 pt-28">
      <div className="text-center mb-12 sm:mb-16 animate-slide-up">
        <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-stone mb-4 sm:mb-6">
          All Blogs
        </h2>
        <p className="text-lg sm:text-xl text-stone/80 font-poppins">
          Camping tips, outdoor inspiration, and guides for your next adventure.
          🏕️
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.slice(0, 3).map((article) => (
          <ArticleCard key={article.slug} article={article} featured />
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
