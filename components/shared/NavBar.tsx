'use client'
import { useScroll, motion, useSpring } from 'framer-motion';
import React from 'react'
import Logo from './Logo';
import StrimzLogo from "@/public/logo/logo.png"
import { Link as Spy } from "react-scroll";
import MobileNav from './MobileNav';

const NavBar = () => {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 bg-strimzBrandAccent origin-[0%] h-[6px] z-[42]"
                style={{ scaleX }}
            />
            <header className='w-full flex justify-center items-center'>
                <nav className='lg:w-1/2 md:w-[70%] w-[90%]  h-[64px] flex justify-between items-center md:mt-[32px] mt-[24px] border border-[#E5E7EB] shadow-navbarShadow rounded-[20px] px-4'>
                    <Logo href='/' classname='w-[101px]' image={StrimzLogo} />

                    <div className='hidden md:flex gap-[24px] font-poppins items-center'>
                        <Spy
                            to="whyStrimz"
                            smooth={true}
                            spy={true}
                            duration={700}
                            className={`capitalize font-poppins text-[#58556A] font-[500] text-[16px] cursor-pointer transition-all hover:text-strimzPrimary`}
                        >
                            why strimz?
                        </Spy>
                        <Spy
                            to="features"
                            smooth={true}
                            spy={true}
                            duration={500}
                            className={`capitalize font-poppins text-[#58556A] font-[500] text-[16px] cursor-pointer transition-all hover:text-strimzPrimary`}
                        >
                            features
                        </Spy>
                    </div>

                    <div className='flex items-center gap-[24px]'>
                        <Spy
                            to="joinWaitlist"
                            smooth={true}
                            spy={true}
                            duration={500}
                            className={`md:w-[130px] w-[110px] h-[40px] flex justify-center items-center bg-[#F9FAFB] rounded-[8px] border border-[#E5E7EB] shadow-[0px_-2px_4px_0px_#00000014_inset] cursor-pointer text-[14px] font-[600] font-poppins text-strimzBrandAccent`}
                        >
                            Join waitlist
                        </Spy>

                        <div className="md:hidden flex items-center">
                            <MobileNav />
                        </div>
                    </div>

                </nav>
            </header>
        </>
    )
}

export default NavBar