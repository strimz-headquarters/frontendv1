import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import ScrollToTopBtn from "@/components/shared/ScrollToTopBtn";
import "@/styles/globals.css";
import { getMetadata } from "@/utils/getMetadata";

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
        <NavBar />
        <main className="w-full">
          {children}
        </main>
        <ScrollToTopBtn />
        <Footer />
      </body>
    </html>
  );
}
