"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Github, Linkedin, Share2 } from "lucide-react";
import { BlogPost as BlogPostType, author, formatBlogDate } from "@/data/blog";
import { useEffect, useState } from "react";

interface BlogPostProps {
  post: BlogPostType;
}

// Parse markdown-style content into React elements
function parseContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let currentParagraph: string[] = [];
  let inCodeBlock = false;
  let codeBlockContent: string[] = [];
  let codeBlockLanguage = "";
  let inTable = false;
  let tableRows: string[][] = [];
  let key = 0;

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(" ");
      if (text.trim()) {
        elements.push(
          <p key={key++} className="blog-paragraph">
            {parseInlineElements(text)}
          </p>
        );
      }
      currentParagraph = [];
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      const headerRow = tableRows[0];
      const bodyRows = tableRows.slice(2); // Skip header and separator
      elements.push(
        <div key={key++} className="blog-table-wrapper">
          <table className="blog-table">
            <thead>
              <tr>
                {headerRow.map((cell, i) => (
                  <th key={i}>{parseInlineElements(cell.trim())}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{parseInlineElements(cell.trim())}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <pre key={key++} className="blog-code-block">
            <div className="blog-code-header">
              <span className="blog-code-lang">{codeBlockLanguage || "code"}</span>
            </div>
            <code>{codeBlockContent.join("\n")}</code>
          </pre>
        );
        inCodeBlock = false;
        codeBlockContent = [];
        codeBlockLanguage = "";
      } else {
        flushParagraph();
        flushTable();
        inCodeBlock = true;
        codeBlockLanguage = line.slice(3).trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      continue;
    }

    // Tables
    if (line.includes("|") && line.trim().startsWith("|")) {
      flushParagraph();
      if (!inTable) {
        inTable = true;
      }
      const cells = line.split("|").filter((_, i, arr) => i > 0 && i < arr.length - 1);
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Empty lines
    if (line.trim() === "") {
      flushParagraph();
      continue;
    }

    // Headers
    if (line.startsWith("## ")) {
      flushParagraph();
      elements.push(
        <h2 key={key++} className="blog-h2">
          {parseInlineElements(line.slice(3))}
        </h2>
      );
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      elements.push(
        <h3 key={key++} className="blog-h3">
          {parseInlineElements(line.slice(4))}
        </h3>
      );
      continue;
    }

    // Horizontal rule
    if (line.trim() === "---") {
      flushParagraph();
      elements.push(<hr key={key++} className="blog-hr" />);
      continue;
    }

    // Block quotes
    if (line.startsWith("> ")) {
      flushParagraph();
      elements.push(
        <blockquote key={key++} className="blog-blockquote">
          {parseInlineElements(line.slice(2))}
        </blockquote>
      );
      continue;
    }

    // List items
    if (line.match(/^[-*] /)) {
      flushParagraph();
      elements.push(
        <li key={key++} className="blog-list-item">
          {parseInlineElements(line.slice(2))}
        </li>
      );
      continue;
    }

    // Numbered list items
    if (line.match(/^\d+\. /)) {
      flushParagraph();
      const content = line.replace(/^\d+\. /, "");
      elements.push(
        <li key={key++} className="blog-list-item blog-list-item-numbered">
          {parseInlineElements(content)}
        </li>
      );
      continue;
    }

    // Regular paragraph content
    currentParagraph.push(line);
  }

  flushParagraph();
  flushTable();

  return elements;
}

// Parse inline elements like **bold**, *italic*, `code`, and [links](url)
function parseInlineElements(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Bold (must check before italic)
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    // Italic (single asterisks, not adjacent to other asterisks)
    const italicMatch = remaining.match(/(?<!\*)\*([^*]+)\*(?!\*)/);
    // Inline code
    const codeMatch = remaining.match(/`([^`]+)`/);
    // Links
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);

    const matches = [
      boldMatch ? { type: "bold", match: boldMatch, index: boldMatch.index! } : null,
      italicMatch ? { type: "italic", match: italicMatch, index: italicMatch.index! } : null,
      codeMatch ? { type: "code", match: codeMatch, index: codeMatch.index! } : null,
      linkMatch ? { type: "link", match: linkMatch, index: linkMatch.index! } : null,
    ].filter(Boolean) as { type: string; match: RegExpMatchArray; index: number }[];

    if (matches.length === 0) {
      parts.push(remaining);
      break;
    }

    // Find earliest match
    matches.sort((a, b) => a.index - b.index);
    const earliest = matches[0];

    // Add text before match
    if (earliest.index > 0) {
      parts.push(remaining.slice(0, earliest.index));
    }

    // Add matched element
    if (earliest.type === "bold") {
      parts.push(
        <strong key={key++} className="blog-bold">
          {earliest.match[1]}
        </strong>
      );
    } else if (earliest.type === "italic") {
      parts.push(
        <em key={key++} className="blog-italic">
          {earliest.match[1]}
        </em>
      );
    } else if (earliest.type === "code") {
      parts.push(
        <code key={key++} className="blog-inline-code">
          {earliest.match[1]}
        </code>
      );
    } else if (earliest.type === "link") {
      parts.push(
        <a
          key={key++}
          href={earliest.match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="blog-link"
        >
          {earliest.match[1]}
        </a>
      );
    }

    remaining = remaining.slice(earliest.index + earliest.match[0].length);
  }

  return parts.length === 1 ? parts[0] : parts;
}

export function BlogPost({ post }: BlogPostProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [copied, setCopied] = useState(false);

  const sharePost = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url,
        });
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      {/* Reading progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50"
        style={{ scaleX }}
      />

      <article className="min-h-screen pb-24">
        {/* Header */}
        <header className="px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono font-bold text-primary hover:text-red-600 transition-colors duration-300 mb-8"
              style={{ fontSize: "var(--fluid-sm)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              All posts
            </Link>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 font-mono border-2 border-primary-ghost text-primary-subtle"
                  style={{ fontSize: "var(--fluid-xs)" }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-black tracking-tighter leading-none text-primary mb-4"
              style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)" }}
            >
              {post.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-tertiary uppercase tracking-tight mb-8"
              style={{ fontSize: "var(--fluid-lg)", fontWeight: 500 }}
            >
              {post.subtitle}
            </motion.p>

            {/* Author & Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-6 py-6 border-y-4 border-primary"
            >
              {/* Author */}
              <div className="flex items-center gap-3">
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
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-primary-ghost" />

              {/* Date */}
              <div className="flex items-center gap-2 text-secondary">
                <Calendar className="w-4 h-4" />
                <span className="font-mono" style={{ fontSize: "var(--fluid-sm)" }}>
                  {formatBlogDate(post.date)}
                </span>
              </div>

              {/* Reading time */}
              <div className="flex items-center gap-2 text-secondary">
                <Clock className="w-4 h-4" />
                <span className="font-mono" style={{ fontSize: "var(--fluid-sm)" }}>
                  {post.readingTime} min read
                </span>
              </div>

              {/* Share */}
              <button
                onClick={sharePost}
                className="ml-auto flex items-center gap-2 font-mono font-bold text-primary hover:text-red-600 transition-colors duration-300"
                style={{ fontSize: "var(--fluid-sm)" }}
              >
                <Share2 className="w-4 h-4" />
                {copied ? "Copied!" : "Share"}
              </button>
            </motion.div>
          </div>
        </header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="px-4 sm:px-6 md:px-12 lg:px-24"
        >
          <div className="max-w-3xl mx-auto blog-content">
            {parseContent(post.content)}
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="px-4 sm:px-6 md:px-12 lg:px-24 mt-16">
          <div className="max-w-3xl mx-auto">
            {/* Author bio card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="brutal-border bg-white p-6 sm:p-8 md:p-10"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="relative w-20 h-20 border-4 border-primary overflow-hidden flex-shrink-0">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    className="object-cover grayscale"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <h3
                      className="font-black text-primary"
                      style={{ fontSize: "var(--fluid-xl)" }}
                    >
                      {author.name}
                    </h3>
                    <p
                      className="font-mono text-secondary"
                      style={{ fontSize: "var(--fluid-sm)" }}
                    >
                      {author.role}
                    </p>
                  </div>
                  <p
                    className="text-primary/80 leading-relaxed"
                    style={{ fontSize: "var(--fluid-base)" }}
                  >
                    {author.bio}
                  </p>
                  <div className="flex gap-3 pt-2">
                    <a
                      href="https://github.com/lukehalley"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border-2 border-primary text-primary hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/luke-halley-284b9b115/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border-2 border-primary text-primary hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Back to all posts */}
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 font-mono font-bold uppercase text-primary border-4 border-primary hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors duration-300"
                style={{ fontSize: "var(--fluid-base)" }}
              >
                <ArrowLeft className="w-5 h-5" />
                All posts
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </>
  );
}
