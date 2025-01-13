import mtn from "@/public/subs/network/mtn.png"
import airtel from "@/public/subs/network/airtel.png"
import glo from "@/public/subs/network/glo.png"
import ninemobile from "@/public/subs/network/9mobile.png"
// tv
import gotv from "@/public/subs/TvSubs/gotv.png"
import dstv from "@/public/subs/TvSubs/dstv.png"
import showmax from "@/public/subs/TvSubs/showmax.png"
import startimes from "@/public/subs/TvSubs/startimes.png"
// electric
import aedc from "@/public/subs/electric/aedc.png"
import apl from "@/public/subs/electric/apl.png"
import bedc from "@/public/subs/electric/bedc.png"
import eedc from "@/public/subs/electric/eedc.png"
import ekedc from "@/public/subs/electric/ekedc.png"
import ibedc from "@/public/subs/electric/ibedc.png"
import ikeja from "@/public/subs/electric/ikeja.png"
import jos from "@/public/subs/electric/jos.png"
import kaduna from "@/public/subs/electric/kaduna.png"


export const networkProviders = [
    {
        name: "MTN",
        image: mtn,
        width: 128,
        height: 128,
        href: "/user/subscription",
    },
    {
        name: "Airtel",
        image: airtel,
        width: 128,
        height: 128,
        href: "/user/subscription",
    },
    {
        name: "GLO",
        image: glo,
        width: 128,
        height: 128,
        href: "/user/subscription",
    },
    {
        name: "9mobile",
        image: ninemobile,
        width: 128,
        height: 128,
        href: "/user/subscription",
    },
]


export const tvProviders = [
    {
        name: "GOTV",
        image: gotv,
        className: "w-[87px] h-[32px]",
        width: 347,
        height: 128,
        href: "/user/subscription",
    },
    {
        name: "DSTV",
        image: dstv,
        className: "w-[87px] h-[32px]",
        width: 347,
        height: 128,
        href: "/user/subscription",
    },
    {
        name: "SHOWMAX",
        image: showmax,
        width: 128,
        height: 128,
        href: "/user/subscription",
    },
    {
        name: "STARTIMES",
        image: startimes,
        width: 129,
        height: 128,
        href: "/user/subscription",
    }
]

export const electricProviders = [
    {
        name: "Abuja Electric",
        image: aedc,
        width: 128,
        height: 128,
        href: "/user/subscription",
    },
    {
        name: "Aba Power",
        image: apl,
        width: 128,
        height: 128,
        href: "/user/subscription",
    },
    {
        name: "Benin Electric",
        image: bedc,
        className: "w-[64px] h-[32px]",
        width: 256,
        height: 128,
        href: "/user/subscription",
    },
    {
        name: "Enugu Electric",
        image: eedc,
        className: "w-[64px] h-[32px]",
        width: 246,
        height: 128,
        href: "/user/subscription",
    },
    {
        name: "Eko Electric",
        image: ekedc,
        className: "w-[64px] h-[32px]",
        width: 202,
        height: 128,
        href: "/user/subscription",
    },
    {
        name: "Ibadan Electric",
        image: ibedc,
        className: "w-[64px] h-[32px]",
        width: 249,
        height: 128,
        href: "/user/subscription",
    },
    {
        name: "Ikeja Electric",
        image: ikeja,
        width: 181,
        height: 128,
        href: "/user/subscription",
    },
    {
        name: "Jos Electric",
        image: jos,
        className: "w-[64px] h-[32px]",
        width: 164,
        height: 128,
        href: "/user/subscription",
    },
    {
        name: "Kaduna Electric",
        image: kaduna,
        className: "w-[64px] h-[32px]",
        width: 214,
        height: 128,
        href: "/user/subscription",
    },
]