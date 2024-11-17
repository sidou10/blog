import "./globals.css";

import { Inter } from "next/font/google";
import { themeEffect } from "./theme-effect";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";
import { doge } from "./doge";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saad Bencherif's Blog",
  description:
    "Saad Bencherif is the co-founder and CPO of Presti AI. In this blog, he shares his entrepreneurial journey and learnings along the way.",
  openGraph: {
    title: "Saad Bencherif's Blog",
    description:
      "Saad Bencherif is the co-founder and CPO of Presti AI. In this blog, he shares his entrepreneurial journey and learnings along the way.",
    url: "https://saadbencherif.com",
    siteName: "Saad Bencherif's Blog",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SaadBencherif10",
    creator: "@SaadBencherif10",
  },
  metadataBase: new URL("https://saadbencherif.com"),
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();(${doge.toString()})();`,
          }}
        />
      </head>

      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
