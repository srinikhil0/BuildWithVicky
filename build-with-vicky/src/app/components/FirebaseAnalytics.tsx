"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { analytics } from "../firebase/config";
import { logEvent } from "firebase/analytics";

export default function FirebaseAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only track page views if analytics is initialized
    const trackPageView = async () => {
      // Check if analytics is available
      if (!analytics) {
        console.log("Analytics not initialized, skipping page view tracking");
        return;
      }

      try {
        logEvent(analytics, "page_view", {
          page_path: pathname,
          page_location: window.location.href,
          page_title: document.title,
        });
        console.log("Page view tracked successfully");
      } catch (error) {
        console.error("Failed to log page view:", error);
      }
    };

    // Small delay to ensure Firebase is initialized
    const timeoutId = setTimeout(() => {
      trackPageView();
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [pathname, searchParams]);

  return null; // This component doesn't render anything
} 