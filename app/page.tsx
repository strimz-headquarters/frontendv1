'use client'
import PayBills from "@/components/Features/PayBills";
import PayInCrypto from "@/components/Features/PayInCrypto";
import HeroSection from "@/components/HeroSection";
import JoinWaitList from "@/components/JoinWaitList";
import WhyStrimz from "@/components/WhyStrimz";


export default function Home() {
  return (
    <main className="w-full flex flex-col overflow-x-hidden">
      <HeroSection />
      <WhyStrimz />
      <PayInCrypto />
      <PayBills />
      <JoinWaitList />
    </main>
  );
}
