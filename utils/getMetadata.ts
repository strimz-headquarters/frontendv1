import type { Metadata } from "next";

const isProduction = process.env.NODE_ENV === "production";
const baseUrl = isProduction
  ? "https://www.strimz.xyz"
  : `http://localhost:${process.env.PORT || 3000}`;

const titleTemplate = "%s | Token Streaming App";

export const getMetadata = ({
  title,
  description,
  imageRelativePath = "/thumbnail.png",
}: {
  title: string;
  description: string;
  imageRelativePath?: string;
}): Metadata => {
  const imageUrl = `${baseUrl}${imageRelativePath}`;

  return {
    generator: "Strimz Team",
    applicationName: "Strimz",
    referrer: "origin-when-cross-origin",
    keywords: [
      "strimz",
      "Strimz",
      "Strimz.xyz",
      "Token streaming",
      "Token streaming app",
      "Token streaming platform",
      "Crypto payments",
      "Automation",
      "automated payroll",
      "automated utility bills",
      "automated subscriptions",
      "utility bills",
      "subscription",
      "subscription automation",
      "subscription payments",
      "subscription management",
      "subscription management platform",
      "subscription management software",
      "subscription management app",
      "subscription management tools",
    ],
    authors: [
      { name: "SignorDev", url: "https://twitter.com/onesignor" },
      { name: "Zee", url: "https://twitter.com/gathoni_zarah" },
      { name: "Zarah", url: "https://twitter.com/zarah_0x" },
    ],
    creator: "Strimz Team",
    publisher: "Omemgboji Emmanuel",
    metadataBase: new URL(baseUrl),
    manifest: `${baseUrl}/manifest.json`,
    alternates: {
      canonical: baseUrl,
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    title: {
      default: title,
      template: titleTemplate,
    },
    description: description,
    openGraph: {
      title: {
        default: title,
        template: titleTemplate,
      },
      description: description,
      images: [
        {
          url: imageUrl,
          alt: "Strimz - Token Streaming App",
        },
      ],
      type: "website",
      siteName: "Strimz",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image", // Ensures Twitter uses a large image for the preview
      title: {
        default: title,
        template: titleTemplate,
      },
      description: description,
      creator: "@Strimz_HQ",
      images: [
        {
          url: imageUrl,
          alt: "Strimz - Token Streaming App",
        },
      ],
    },
    icons: {
      icon: [
        {
          url: `${baseUrl}/favicon-32x32.png`, // Standard favicon for browsers
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: `${baseUrl}/favicon-16x16.png`, // Smaller favicon for some contexts
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: `${baseUrl}/favicon-192x192.png`, // Icon for mobile devices and apps
          sizes: "192x192",
          type: "image/png",
        },
        {
          url: `${baseUrl}/favicon-512x512.png`, // High-resolution icon for apps/PWAs
          sizes: "512x512",
          type: "image/png",
        },
      ],
      apple: [
        {
          url: `${baseUrl}/apple-touch-icon.png`, // Apple touch icon for iOS devices
          sizes: "180x180",
          type: "image/png",
        },
      ],
      shortcut: [
        {
          url: `${baseUrl}/favicon.ico`, // ICO format for legacy browsers
          sizes: "48x48",
          type: "image/x-icon",
        },
      ],
      other: [
        {
          url: `${baseUrl}/favicon-192x192.png`, // Manifest icon for web app manifest
          sizes: "192x192",
          type: "image/png",
        },
        {
          url: `${baseUrl}/favicon-512x512.png`, // Larger manifest icon
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  };
};
