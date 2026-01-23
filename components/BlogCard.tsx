"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { BlogPost, formatBlogDate } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="pt-4"
    >
      <Link href={`/blog/${post.slug}`} className="block group">
        <div className="brutal-border bg-white p-6 sm:p-8 md:p-10 relative">
          {/* Featured badge */}
          {post.featured && (
            <div className="absolute -top-3 sm:-top-4 left-4 sm:left-6 md:left-8 bg-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 border-3 sm:border-4 border-primary z-10">
              <span
                className="font-mono font-black tracking-tight uppercase"
                style={{ fontSize: "var(--fluid-xs)" }}
              >
                Featured
              </span>
            </div>
          )}

          {/* Date badge */}
          <div
            className={`absolute -top-3 sm:-top-4 ${post.featured ? "left-28 sm:left-36" : "left-4 sm:left-6 md:left-8"} bg-white px-3 py-1.5 sm:px-4 sm:py-2 border-3 sm:border-4 border-primary z-10`}
          >
            <span
              className="font-mono font-black tracking-tight uppercase"
              style={{ fontSize: "var(--fluid-xs)" }}
            >
              {formatBlogDate(post.date)}
            </span>
          </div>

          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-r-3 border-t-3 sm:border-r-4 sm:border-t-4 border-tertiary-faint group-hover:border-tertiary transition-colors duration-300" />

          {/* Content */}
          <div className="mt-4 space-y-4">
            {/* Title */}
            <h2
              className="font-black tracking-tight leading-tight text-primary group-hover:text-red-600 transition-colors duration-300"
              style={{ fontSize: "var(--fluid-3xl)" }}
            >
              {post.title}
            </h2>

            {/* Subtitle */}
            <p
              className="font-mono text-tertiary uppercase tracking-tight"
              style={{ fontSize: "var(--fluid-sm)", fontWeight: 500 }}
            >
              {post.subtitle}
            </p>

            {/* Excerpt */}
            <p
              className="text-primary/80 leading-relaxed"
              style={{ fontSize: "var(--fluid-base)" }}
            >
              {post.excerpt}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t-2 border-primary-whisper">
              {/* Reading time */}
              <div className="flex items-center gap-2 text-secondary">
                <Clock className="w-4 h-4" />
                <span
                  className="font-mono"
                  style={{ fontSize: "var(--fluid-sm)" }}
                >
                  {post.readingTime} min read
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 font-mono border-2 border-primary-ghost text-primary-subtle"
                    style={{ fontSize: "var(--fluid-xs)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read more arrow */}
              <div className="ml-auto">
                <span className="inline-flex items-center gap-2 font-mono font-bold text-primary group-hover:text-red-600 transition-colors duration-300">
                  <span style={{ fontSize: "var(--fluid-sm)" }}>Read</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
