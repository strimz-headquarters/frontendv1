'use client'
import { useState, useEffect } from 'react'
import Logo from './Logo'
import StrimzLogo from "@/public/logo/logo.png"
import Link from 'next/link'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const footerLinks = [
        {
            name: "Privacy policy",
            link: "/",
        },
        {
            name: "Terms of service",
            link: "/",
        },
        {
            name: "Contact us",
            link: "/",
        },
    ]

    const [year, setYear] = useState('')

    useEffect(() => {
        const year = new Date().getFullYear()
        setYear(year.toString())
    }, [])

    return (
        <footer className='w-full bg-[#F5FFFA] flex flex-col lg:px-20 md:px-12 px-4 pb-10'>
            <section className='w-full flex md:flex-row flex-col md:justify-between justify-center items-center gap-6 md:gap-0 border-b border-[#E5E7EB] pb-4'>
                <Logo href='/' classname='lg:w-[126.98px] md:w-[101px] w-[126.98px]' image={StrimzLogo} />

                <div className='flex md:flex-row flex-col items-center lg:gap-6 md:gap-4 gap-4'>
                    {
                        footerLinks.map((link, index) => (
                            <Link key={index} href={link.link} className='font-[400] font-poppins text-base text-[#58556A] transition hover:text-strimzPrimary'>{link.name}</Link>
                        ))
                    }
                </div>

                <div className='flex items-center gap-4'>
                    <Link href="https://x.com/Strimz_HQ" target='_blank' className='text-[#58556A] transition hover:text-strimzPrimary'>
                        <FaXTwitter className='w-6 h-6' />
                    </Link>
                    <Link href="https://www.linkedin.com/company/strimzhq/" target='_blank' className='text-[#58556A] transition hover:text-strimzPrimary'>
                        <FaLinkedin className='w-6 h-6' />
                    </Link>
                </div>
            </section>
            <section className='w-full flex md:flex-row flex-col md:justify-between justify-center items-center gap-4 md:gap-0 pt-4'>
                <p className='text-sm md:text-base font-[400] font-poppins text-[#58556A]'>Made with 💖 by the Strimz team</p>
                <p className='font-[400] font-poppins md:text-base text-sm text-[#58556A]'>© {year} Strimz. All rights reserved.</p>
            </section>
        </footer>
    )
}

export default Footer