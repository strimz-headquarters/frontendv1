'use client'
import PayBills from "@/components/guest/Features/PayBills";
import PayInCrypto from "@/components/guest/Features/PayInCrypto";
import HeroSection from "@/components/guest/HeroSection";
import Newsletter from "@/components/guest/Newsletter";
import WhyStrimz from "@/components/guest/WhyStrimz";


export default function Home() {
  return (
    <main className="w-full flex flex-col overflow-x-hidden">
      <HeroSection />
      <WhyStrimz />
      <PayInCrypto />
      <PayBills />
      <Newsletter />
    </main>
  );
}
