import Link from "next/link";
import { TbError404 } from "react-icons/tb";
import Image from "next/image";
import pattern from "@/public/vec/Patterns.png"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#F9FAFB]] p-4">

            <TbError404 className="md:w-[300px] md:h-[300px] w-[200px] h-[200px] text-strimzBrandAccent" />

            <h1 className="text-center text-strimzPrimary font-sora font-[700] lg:text-[52px] lg:leading-[52px] text-[36px] leading-[36px] tracking-tight lg:-mt-6 mb-4">
                Oops! Lost in the Flow?
            </h1>

            <p className="text-lg text-[#58556A] font-[400] font-poppins mb-6 text-center max-w-[500px]">
                It seems the page you&apos;re looking for has gone off-chain. Let&apos;s get you back on track!
            </p>


            <Link href="/" className="w-[151px] h-[40px] flex justify-center items-center rounded-[8px] bg-strimzBrandAccent text-[#FFFFFF] font-poppins font-[600] shadow-joinWaitlistBtnShadow z-10 text-shadow text-[14px] hover:bg-strimzPrimary">Return Home</Link>


            {/* Decorative SVG */}
            <div className="absolute -z-10 opacity-20 inset-x-0 bottom-0 pointer-events-none">
                <Image src={pattern} className="w-[1527px] h-[191px] object-cover" alt="LogoPattern" width={5760} height={764} quality={100} priority />
            </div>
            <div className="absolute -z-10 opacity-20 top-0 inset-x-0 pointer-events-none">
                <Image src={pattern} className="w-[1527px] h-[191px] object-cover" alt="LogoPattern" width={5760} height={764} quality={100} priority />
            </div>
        </div>
    );
}
