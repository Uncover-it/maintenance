import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.uncoverit.org"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Uncover it - Malware Configuration Extractor",
    template: "Uncover it - %s",
  },
  description:
    "Uncover it is a malware config extractor that can analyze files dynamically and statically.",
  keywords: [
    "malware analysis",
    "malware config",
    "malware extractor",
    "cybersecurity",
    "uncover malware",
    "file",
    "files",
    "malware",
    "analysis",
    "size",
    "uncover",
    "home",
    "status",
    "malware config extractor",
    "malware configuration extractor",
    "security",
    "programming",
    "coding",
    "tech",
    "technology",
    "uncover it",
    "uncoverit",
    "virus",
    "trojan",
    "worm",
    "ransomware",
    "spyware",
    "adware",
    "rootkit",
    "keylogger",
    "botnet",
    "script kiddie",
    "skid",
    "discord",
    "discord safety",
    "webhook from file",
    "webhook from malware",
    "discord rat",
    "discord virus",
    "static malware analysis",
    "malware exposer",
    "malware decompiler",
    "reverse malware",
    "malware scanner",
    "decompiler",
    "online decompiler",
    "decompiler online",
    "xworm decompiler",
    "xworm",
    "xworm malware",
    "xworm malware decompiler",
    "xworm decompiler online",
    "xworm online decompiler",
    "xworm malware scanner",
    "malware scanner online",
    "malware scanner free",
    "malware scanner online free",
    "free malware scanner",
    "free malware scanner online",
    "online decompiler free",
    "uncover tool",
  ],
  openGraph: {
    title: "Malware Config Extractor",
    description:
      "Uncover it is a malware config extractor that can analyze files dynamically and statically.",
    url: "https://www.uncoverit.org",
    siteName: "Uncover it",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Uncover it",
    card: "summary_large_image",
    description:
      "Uncover it is a malware config extractor that can analyze files dynamically and statically.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" disableTransitionOnChange enableSystem>
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-46BHLDMYVM" />
    </html>
  );
}
