import Image from "next/image"
import StrimzLogoPattern from "@/public/vec/strimzLogoPatternNoBg.svg"
import Payroll from "@/public/vec/payroll.svg"
import { Element } from "react-scroll";
import usdt from "@/public/brands/USDT.svg"
import usdc from "@/public/brands/USDC.svg"

const PayInCrypto = () => {
    return (
        <Element name="features">
            <section className="w-full lg:h-[724px] md:h-[804px] h-[718px] bg-[#F9FAFB] flex justify-center md:items-center items-end relative overflow-hidden">
                <div className="md:w-[603px] md:h-[645px] w-[323px] h-[303px]">
                    <Image src={StrimzLogoPattern} className="w-full h-full" alt="LogoPattern" width={603} height={645} quality={100} priority />
                </div>

                {/* overlay */}
                <main className="absolute top-0 left-0 w-full h-full flex lg:flex-row flex-col lg:justify-between justify-center lg:items-center bg-transparent gap-16 md:gap-8">
                    <div className="lg:w-[403px] flex flex-col gap-3 md:pl-12 px-6">
                        <h3 className="md:text-[40px] text-3xl font-sora font-[700] text-strimzPrimary md:leading-[48px]">Pay your team<br /> in crypto</h3>
                        <p className="text-[#58556A] font-[400] font-poppins text-base">Say goodbye to complicated payment processes. With Strimz, you can pay your team in crypto quickly and securely, all while keeping everything simple and stress-free.</p>
                    </div>
                    <div className="md:w-[798px] md:h-[491px] w-[604px] h-[372px] relative">
                        <Image src={Payroll} className="w-full h-full" alt="payroll" width={814} height={535} quality={100} priority />
                        <Image src={usdt} className="absolute -top-7 left-[55%] w-[64px] h-[64px]" alt="usdt" width={68} height={69} quality={100} priority />
                        <Image src={usdc} className="absolute top-[70%] left-0 w-[64px] h-[64px]" alt="usdt" width={68} height={69} quality={100} priority />
                    </div>
                </main>
            </section>
        </Element>
    )
}

export default PayInCrypto