'use client'
import Link from 'next/link';
import {
    LogOut,
    Settings,
    User,
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RxCaretDown } from 'react-icons/rx';
import { PiUserCircleLight } from "react-icons/pi";

const UserDropdown: React.FC = () => {

    const handleLogout = () => {
        console.log('Logged out');
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='focus:outline-none focus:border-none' asChild>
                <button type="button" className="bg-[#F3F4F6] p-[8px] flex justify-center items-center gap-[8px] text-[#58556A] rounded-[12px]">
                    <PiUserCircleLight className='w-[24px] h-[24px]' />
                    <RxCaretDown className='w-[24px] h-[24px]' />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-[#58556A] w-44 z-[100] mr-2">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                        <Link href="/user/profile">
                            <User />
                            <span>Profile</span>
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/user/settings">
                            <Settings />
                            <span>Settings</span>
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <button onClick={handleLogout} className='w-full'>
                        <LogOut />
                        <span>Log out</span>
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserDropdown;
