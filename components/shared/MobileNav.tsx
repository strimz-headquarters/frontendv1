'use client'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetTrigger,
} from "@/components/ui/sheet";
import { AiOutlineMenu } from 'react-icons/ai';
import strimzLogo from "@/public/logo/logo.png";
import Logo from './Logo';
import { Link as Spy } from "react-scroll";
import { MdOutlineArrowOutward } from 'react-icons/md';

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="text-strimzPrimary">
                    <AiOutlineMenu className='w-6 h-6' />
                </button>
            </SheetTrigger>
            <SheetContent className='w-full bg-[#F9FAFB] border-none outline-none'>
                <main className="w-full flex flex-col ">
                    <div className="w-full py-6 px-6 flex justify-between items-center">
                        {/* logo */}
                        <Logo href='/' classname='w-[120px]' image={strimzLogo} />
                    </div>
                    <div className="w-full mt-16 flex flex-col justify-center gap-3 items-center">
                        <SheetClose asChild>
                            <Spy
                                to="whyStrimz"
                                smooth={true}
                                spy={true}
                                duration={500}
                                className={`capitalize font-poppins text-strimzPrimary font-[500] text-2xl cursor-pointer hover:underline flex items-center gap-2`}
                            >
                                why strimz?
                                <MdOutlineArrowOutward className="w-6 h-6" />
                            </Spy>
                        </SheetClose>
                        <SheetClose asChild>
                            <Spy
                                to="features"
                                smooth={true}
                                spy={true}
                                duration={500}
                                className={`capitalize font-poppins text-strimzPrimary font-[500] text-2xl cursor-pointer hover:underline flex items-center gap-2`}
                            >
                                features
                                <MdOutlineArrowOutward className="w-6 h-6" />
                            </Spy>
                        </SheetClose>
                    </div>
                </main>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav