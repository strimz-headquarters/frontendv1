'use client'
import strimzLogoNoBg from "@/public/vec/strimzLogoPNG.svg"
import Image from "next/image"
import Marquee from "react-fast-marquee"

const MovingText = () => {
    return (
        <Marquee className="w-full h-full bg-transparent">
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
            <Content />
        </Marquee>
    )
}

export default MovingText


export const Content = () => {
    return (
        <div className="w-full flex items-center">
            <Image src={strimzLogoNoBg} className="md:w-[18.97px] md:h-[20.28px] w-[16.97px] h-[18.28px]" alt="Strimz logo" width={19} height={22} quality={100} priority />
            <p className="font-poppins px-2.5 font-[400] text-white md:text-base text-sm"> Streamline payments anytime</p>
        </div >
    )
}