import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import ScrollToTopBtn from "@/components/shared/ScrollToTopBtn";
import "@/styles/globals.css";
import { getMetadata } from "@/utils/getMetadata";

export const metadata = getMetadata({
  title: "Strimz",
  description: "Join the Strimz waitlist to receive updates on our new features and services. Sign up now to be the first to know when we launch!",
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
