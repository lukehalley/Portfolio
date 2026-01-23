"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";
import { getAllPosts, author } from "@/data/blog";
import { GridCanvas } from "@/components/GridCanvas";
import Image from "next/image";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Fixed background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <GridCanvas />
      </div>

      <main className="min-h-screen">
        {/* Header */}
        <header className="px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Back to home */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono font-bold text-primary hover:text-red-600 transition-colors duration-300 mb-8"
              style={{ fontSize: "var(--fluid-sm)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Title section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <h1
                className="font-black tracking-tighter leading-none text-primary"
                style={{ fontSize: "clamp(3rem, 10vw, 6rem)" }}
              >
                Blog
              </h1>

              <p
                className="text-primary/80 max-w-2xl leading-relaxed"
                style={{ fontSize: "var(--fluid-lg)" }}
              >
                Writing about open-source projects, cloud infrastructure, and
                the tools that make developers more productive.
              </p>

              {/* Author card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 pt-6 border-t-2 border-primary-whisper"
              >
                <div className="relative w-12 h-12 border-3 border-primary overflow-hidden">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div>
                  <p
                    className="font-bold text-primary"
                    style={{ fontSize: "var(--fluid-base)" }}
                  >
                    {author.name}
                  </p>
                  <p
                    className="font-mono text-secondary"
                    style={{ fontSize: "var(--fluid-sm)" }}
                  >
                    {author.role}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </header>

        {/* Posts grid */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12 pb-24">
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}

            {posts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="brutal-border bg-white p-12 text-center"
              >
                <p
                  className="text-primary/60 font-mono"
                  style={{ fontSize: "var(--fluid-lg)" }}
                >
                  No posts yet. Check back soon.
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
