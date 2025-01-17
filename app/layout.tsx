import "@/styles/globals.css";
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
      <body
        className="w-full min-h-screen antialiased bg-[#FFFFFF]"
      >
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
