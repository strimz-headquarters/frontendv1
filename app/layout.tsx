import "@/styles/globals.css";
import Head from "next/head";
import { getMetadata } from "@/utils/getMetadata";
import { Toaster } from 'sonner';

export const metadata = getMetadata({
  title: "Strimz",
  description: "Strimz is a DeFi solution designed to automate crypto payroll and subscription payments, offering secure and seamless financial management.",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.strimz.xyz",
              "name": "Strimz",
              "description": "Strimz automates crypto payroll and subscription payments, offering secure and seamless financial management.",
            }),
          }}
        />
      </Head>
      <body
        className="w-full min-h-screen antialiased bg-[#FFFFFF]"
      >
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
