import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://shaikahmadnawaz.vercel.app"),
  title: {
    default: "Shaik Ahmad Nawaz",
    template: "%s | Shaik Ahmad Nawaz",
  },
  description: "Developer.",
  openGraph: {
    title: "Shaik Ahmad Nawaz",
    description: "Developer.",
    url: "https://shaikahmadnawaz.vercel.app",
    siteName: "Shaik Ahmad Nawaz",
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
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Shaik Ahmad Nawaz",
    card: "summary_large_image",
  },
  // Its a good practice to add verification keys
  // verification: {
  //   // google: "",
  //   // yandex: "",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          dmSans.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
