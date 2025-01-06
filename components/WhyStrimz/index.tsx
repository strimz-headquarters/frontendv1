import { whyStrimzData } from '@/utils/whyStrimzData'
import React, { useMemo } from 'react'
import { Element } from "react-scroll";
import Image from 'next/image'
import icon1 from "@/public/vec/Icon1.svg"
import icon2 from "@/public/vec/Icon2.svg"
import icon3 from "@/public/vec/Icon3.svg"
import icon4 from "@/public/vec/Icon4.svg"

const WhyStrimz = () => {
    const renderIcons = useMemo(() => {
        return [icon1, icon2, icon3, icon4]
    }, [])


    return (
        <Element name="whyStrimz" >
            <section className='w-full py-28 lg:px-12 md:px-8 px-8 bg-strimzPrimary grid lg:grid-cols-3 md:gap-20 gap-16 lg:-mt-[150px] md:-mt-[135px] -mt-[35px]'>
                <div className='md:col-span-1 flex flex-col gap-4'>
                    <h2 className='font-sora font-[700] lg:text-[48px] md:text-[40px] text-4xl capitalize lg:leading-[52px] md:leading-[48px] text-white'>
                        why<br /> Strimz?
                    </h2>
                    <p className='text-[#BCBAC4] font-poppins font-[400] text-base'>Streamline payments with automation, real-time tracking, and precise processing, giving you more time to focus on what truly matters.</p>
                </div>
                <div className='md:col-span-2 grid md:grid-cols-2 md:gap-12 gap-10'>
                    {
                        whyStrimzData.map((item, index) => (
                            <div key={index} className='flex flex-col gap-8'>
                                {/* Icon */}
                                <div className="w-[72px] h-[72px]">
                                    <Image src={renderIcons[index]} className="w-full h-full" alt="icon" width={72} height={72} quality={100} priority />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <h3 className='font-poppins font-[600] md:text-[20px] md:leading-[28px] text-xl text-white'>{item.title}</h3>
                                    <p className='text-[#BCBAC4] font-poppins font-[400] text-base'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </section>
        </Element>
    )
}

export default WhyStrimz