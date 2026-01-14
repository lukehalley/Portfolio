'use client';

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";

export function AnalyticsProvider() {
  const [mounted, setMounted] = useState(false);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render GA if no ID or not mounted
  if (!mounted || !gaId) {
    return null;
  }

  // Wrap in error boundary-style try-catch
  try {
    return <GoogleAnalytics gaId={gaId} />;
  } catch (error) {
    // Silently fail - GA shouldn't break the site
    console.warn('Analytics initialization failed:', error);
    return null;
  }
}
