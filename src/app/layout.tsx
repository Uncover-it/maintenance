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
    default: "Uncover it - Maintenance in progress",
    template: "Uncover it - %s",
  },
  description:
    "Maintenance page for Uncover it",
  openGraph: {
    title: "Maintenance Page",
    description:
      "Maintenance page for Uncover it",
    url: "https://maintenance.uncoverit.org",
    siteName: "Uncover it",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Uncover it - Maintenance in progress",
    card: "summary_large_image",
    description:
      "Maintenance page for Uncover it",
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
