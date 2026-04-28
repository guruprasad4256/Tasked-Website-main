import { useEffect } from "react";
import axios, { AxiosError } from "axios";

interface UTMData {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  page: string;
  fullUrl: string;
  referrer: string | null;
  timestamp: string;
}

export default function useUTMTracker(): void {
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const params = url.searchParams;

      const utmData: UTMData = {
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        utm_term: params.get("utm_term"),
        utm_content: params.get("utm_content"),
        page: url.pathname,
        fullUrl: url.toString(),
        referrer: document.referrer || null,
        timestamp: new Date().toISOString(),
      };

      // Only send if there’s at least one UTM param
      if (utmData.utm_source || utmData.utm_medium || utmData.utm_campaign) {
        axios.post("https://api.manhoursonhire.com/api/track-utm", utmData).catch((err: AxiosError) => {
          console.error("UTM tracking error:", err.message);
        });
      }
    } catch (error) {
      console.error("UTM tracker failed:", (error as Error).message);
    }
  }, []);
}
