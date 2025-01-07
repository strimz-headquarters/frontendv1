'use client';
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import StrimzVec from "@/public/vec/StrimzVector.svg";
import mtnSvg from "@/public/brands/mtn.svg";
import spotifySvg from "@/public/brands/spotify.svg";
import starknetSvg from "@/public/brands/starknet.svg";
import youtubeSvg from "@/public/brands/youtube.svg";
import netflixSvg from "@/public/brands/netflix.svg";
import usdcSvg from "@/public/brands/USDC.svg";
import usdtSvg from "@/public/brands/USDT.svg";
import MovingText from './MovingText';

const AnimatedRevolver = () => {
    const circleRadii = [
        45,
        40,
        35,
        30,
        25,
        20,
    ];

    return (
        <section className="flex justify-center items-center w-full lg:-mt-44 md:-mt-48 -mt-12 -z-10 relative">
            <div className="relative w-full h-0 pb-[100%] lg:pb-0 lg:w-[900px] lg:h-[900px] md:w-[700px] md:h-[700px]  -z-10">
                {circleRadii.map((radiusPercent, index) => (
                    <div key={index} className="absolute  inset-0">
                        <div className='relative w-full h-full'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 100 100"
                                className="absolute inset-0 w-full h-full"
                            >
                                {/* Static background circle */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r={radiusPercent}
                                    fill="none"
                                    stroke="#E5E7EB"
                                    strokeWidth="0.1"
                                />
                                {/* Animated circle */}
                                <motion.circle
                                    cx="50"
                                    cy="50"
                                    r={radiusPercent}
                                    fill="none"
                                    stroke="#02C76A"
                                    strokeWidth="0.1"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: [0, 1, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        ease: "easeInOut",
                                        duration: 7 + index * 0.5,
                                        delay: index * 0.5,
                                    }}

                                />
                            </svg>

                            {/* Icon Positioned on the Circle */}
                            {index === 1 && (
                                <>
                                    <div
                                        className="hidden md:block absolute md:w-[18px] md:h-[18px] rounded-full border border-[#E5E7EB] bg-[#F9FAFB] shadow-circleShadow left-[10%] top-[40%]"
                                    />

                                    <div
                                        className="hidden md:block absolute md:w-[18px] md:h-[18px] rounded-full border border-[#E5E7EB] bg-[#F9FAFB] shadow-circleShadow lg:left-[17%] md:left-[20%] top-[25%]"
                                    />
                                    <div
                                        className="hidden md:block absolute md:w-[18px] md:h-[18px] rounded-full border border-[#E5E7EB] bg-[#F9FAFB] shadow-circleShadow right-[10%] top-[40%]"
                                    />

                                    <div
                                        className="hidden md:block absolute md:w-[18px] md:h-[18px] rounded-full border border-[#E5E7EB] bg-[#F9FAFB] shadow-circleShadow lg:right-[17%] md:right-[20%] top-[25%]"
                                    />
                                </>

                            )}

                            {
                                index === 2 && (
                                    <>
                                        <Image src={mtnSvg} alt="MTN" className='md:w-[48px] md:h-[48px] w-[28px] h-[28px] absolute left-[21%] lg:top-[25%] md:top-[27%] top-[23%]' width={72} height={72} priority quality={100} />
                                        <Image src={spotifySvg} alt="spotify" className='md:w-[48px] md:h-[48px] w-[28px] h-[28px] absolute right-[21%] lg:top-[25%] md:top-[27%] top-[23%]' width={72} height={72} priority quality={100} />
                                        <div
                                            className="hidden md:block absolute md:w-[18px] md:h-[18px] rounded-full border border-[#E5E7EB] bg-[#F9FAFB] shadow-circleShadow lg:right-[17%] md:right-[18%] top-[35%]"
                                        />
                                    </>
                                )
                            }

                            {
                                index === 3 && (
                                    <>
                                        <Image src={starknetSvg} alt="starknet" className='md:w-[48px] md:h-[48px] w-[28px] h-[28px] absolute left-[18%] lg:top-[43%] top-[40%]' width={72} height={72} priority quality={100} />
                                        <Image src={youtubeSvg} alt="youtube" className='md:w-[36px] md:h-[36px] w-[20px] h-[20px] absolute right-[18.5%] lg:top-[43%] top-[40%]' width={72} height={72} priority quality={100} />
                                        <div
                                            className="hidden md:block absolute md:w-[18px] md:h-[18px] rounded-full border border-[#E5E7EB] bg-[#F9FAFB] shadow-circleShadow right-[34%] lg:top-[23%] md:top-[26.5%]"
                                        />
                                        <div
                                            className="hidden md:block absolute md:w-[18px] md:h-[18px] rounded-full border border-[#E5E7EB] bg-[#F9FAFB] shadow-circleShadow lg:left-[24.3%] md:left-[26%] top-[32%]"
                                        />
                                    </>
                                )
                            }

                            {
                                index === 4 && (
                                    <>
                                        <Image src={netflixSvg} alt="netlify" className='md:w-[48px] md:h-[48px] w-[28px] h-[28px] absolute left-1/2 -translate-x-1/2 lg:top-[23%] md:top-[26.5%] top-[17%]' width={72} height={72} priority quality={100} />
                                    </>
                                )
                            }

                            {
                                index === 5 && (
                                    <>
                                        <Image src={usdtSvg} alt="USDT" className='md:w-[48px] md:h-[48px] w-[28px] h-[28px] absolute lg:left-[30.3%] md:left-[31%] left-[33%] lg:top-[38%] md:top-[37%] top-[32%]' width={72} height={72} priority quality={100} />
                                        <Image src={usdcSvg} alt="USDC" className='md:w-[48px] md:h-[48px] w-[28px] h-[28px] absolute lg:right-[30%] md:right-[31%] right-[33%] lg:top-[38%] md:top-[37%] top-[32%]' width={72} height={72} priority quality={100} />
                                        <div
                                            className="hidden md:block absolute md:w-[18px] md:h-[18px] rounded-full border border-[#E5E7EB] bg-[#F9FAFB] shadow-circleShadow lg:right-[37%] md:right-[40%] top-[33%]"
                                        />
                                        <div
                                            className="hidden md:block absolute md:w-[18px] md:h-[18px] rounded-full border border-[#E5E7EB] bg-[#F9FAFB] shadow-circleShadow lg:left-[37%] md:left-[40%] top-[33%]"
                                        />
                                    </>
                                )
                            }
                        </div>
                    </div>
                ))}
            </div>
            {/* overlay */}
            <div className='absolute w-full lg:h-[300px] md:h-[250px] h-[160px] top-1/2 left-0 flex flex-col'>
                <div className='w-full md:h-[80%] h-[75%] bg-gradient-to-b from-[#02C76A] to-[#028D4B] relative'>
                    <div className='absolute lg:w-[270px] lg:h-[270px] md:w-[200px] md:h-[200px] w-[120px] h-[120px] bg-[#FFFFFF] border-[2px] border-[#E5E7EB] shadow-strimzLogoShadow rounded-full left-1/2 transform -translate-x-1/2 lg:-top-[130px] md:-top-[100px] -top-[60px] flex justify-center items-center'>
                        <span className='relative flex lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] w-[50px] h-[50px]'>
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-strimzBrandAccent opacity-85" />
                            <Image src={StrimzVec} alt='logo' className='w-full h-full' width={120} height={120} priority quality={100} />
                        </span>
                    </div>
                </div>
                <div className='w-full md:h-[20%] h-[25%] bg-[#028D4B]'>
                    <MovingText />
                </div>
            </div>
        </section>
    );
};

export default AnimatedRevolver;
