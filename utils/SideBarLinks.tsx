import { AiOutlineDollar } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";

type SideBarLinksTypes = {
    href: string;
    title: string;
    icon: React.ReactNode;
}

export const SideBarLinks: SideBarLinksTypes[] = [
    {
        href: "/user",
        title: "Home",
        icon: <GoHome className="w-[20px] h-[20px]" />
    },
    {
        href: "/user/payroll",
        title: "Payroll",
        icon: <AiOutlineDollar className="w-[20px] h-[20px]" />
    },
    {
        href: "/user/subscription",
        title: "Subscription",
        icon: <MdOutlineSubscriptions className="w-[20px] h-[20px]" />
    }
]