"use client";
import Logo from "../shared/Logo";
import StrimzLogo from "@/public/logo/logo.png"
import UserDropdown from "./UserDropdown";
import { useEffect, useMemo, useState } from "react";
import { CiWallet } from "react-icons/ci";
import { IoCopyOutline } from "react-icons/io5";
import { toast } from "sonner";

const Header = ({
    sidebarOpen,
    setSidebarOpen,
}: {
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

    const [user, setUser] = useState<{ username?: string, address?: string }>({});

    useEffect(() => {
        const data = window.localStorage.getItem("strimzUser");
        const parsedUser = data ? JSON.parse(data) : {};
        setUser(parsedUser);
    }, []);

    const shortenAddress = useMemo(() => {
        return user?.address ? `${user?.address.slice(0, 8)}...${user?.address.slice(-6)}` : "";
    }, [user?.address]);


    // async function clipboard copy
    const copyTextToClipboard = async (text: any) => {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    //handle copy to clipboard
    const handleCopy = () => {
        copyTextToClipboard(user?.address).then(() => {
            toast.success("Wallet address copied to clipboard", {
                position: "top-right",
            })
        }).catch((err) => {
            console.log(err);
            toast.error("Failed to copy wallet address", {
                position: "top-right",
            })
        });
    }

    return (
        <header className="sticky top-0 z-[99] flex w-full bg-white overflow-hidden border-b border-[#E5E7EB]">
            <div className="flex flex-grow items-center justify-between py-3 px-4 shadow md:px-6 ">
                <div className="flex items-center gap-3 sm:gap-4 lg:hidden">
                    {/* <!-- Hamburger Toggle BTN --> */}
                    <button
                        aria-controls="sidebar"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSidebarOpen(!sidebarOpen);
                        }}
                        className="z-[9999] block rounded-sm border border-[#E5E7EB] bg-[#F9FAFB] p-1.5 shadow-sm lg:hidden"
                    >
                        <span className="relative block h-5 w-5 cursor-pointer">
                            <span className="block absolute right-0 h-full w-full">
                                <span
                                    className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-strimzPrimary delay-[0] duration-200 ease-in-out ${!sidebarOpen && "!w-full delay-300"
                                        }`}
                                ></span>
                                <span
                                    className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-strimzPrimary delay-150 duration-200 ease-in-out ${!sidebarOpen && "delay-400 !w-full"
                                        }`}
                                ></span>
                                <span
                                    className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-strimzPrimary delay-200 duration-200 ease-in-out ${!sidebarOpen && "!w-full delay-500"
                                        }`}
                                ></span>
                            </span>
                            <span className="absolute right-0 h-full w-full rotate-45">
                                <span
                                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-strimzPrimary delay-300 duration-200 ease-in-out ${!sidebarOpen && "!h-0 !delay-[0]"
                                        }`}
                                ></span>
                                <span
                                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-strimzPrimary duration-200 ease-in-out ${!sidebarOpen && "!h-0 !delay-200"
                                        }`}
                                ></span>
                            </span>
                        </span>
                    </button>
                    {/* <!-- Hamburger Toggle BTN --> */}

                    <Logo href='/user' classname='w-[101.58px] flex-shrink-0 lg:hidden flex' image={StrimzLogo} />
                </div>

                <div className="hidden sm:flex flex-col">
                    <h4 className="text-strimzPrimary capitalize font-sora font-[500] text-base">Welcome Back, {user?.username}</h4>
                    <div className="flex gap-1 items-center">
                        <CiWallet className="w-4 h-4" />
                        <p className="text-sm capitalize text-[#58556A] font-poppins font-[400]">{shortenAddress}</p>
                        <button type="button" onClick={handleCopy} className="text-[#58556A]">
                            <IoCopyOutline className="w-4 h-4" />
                        </button>
                    </div>

                </div>

                <div className="flex items-center gap-3">
                    {/* <!-- User Area --> */}
                    <UserDropdown />
                    {/* <!-- User Area --> */}
                </div>
            </div>
        </header>
    );
};

export default Header;