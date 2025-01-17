import mtn from "@/public/utilityProviders/network/mtn.png"
import airtel from "@/public/utilityProviders/network/airtel.png"
import glo from "@/public/utilityProviders/network/glo.png"
import ninemobile from "@/public/utilityProviders/network/9mobile.png"
// tv
import gotv from "@/public/utilityProviders/TvSubs/gotv.png"
import dstv from "@/public/utilityProviders/TvSubs/dstv.png"
import showmax from "@/public/utilityProviders/TvSubs/showmax.png"
import startimes from "@/public/utilityProviders/TvSubs/startimes.png"
// electric
import aedc from "@/public/utilityProviders/electric/aedc.png"
import apl from "@/public/utilityProviders/electric/apl.png"
import bedc from "@/public/utilityProviders/electric/bedc.png"
import eedc from "@/public/utilityProviders/electric/eedc.png"
import ekedc from "@/public/utilityProviders/electric/ekedc.png"
import ibedc from "@/public/utilityProviders/electric/ibedc.png"
import ikeja from "@/public/utilityProviders/electric/ikeja.png"
import jos from "@/public/utilityProviders/electric/jos.png"
import kaduna from "@/public/utilityProviders/electric/kaduna.png"


export const networkProviders = [
    {
        name: "MTN",
        image: mtn,
        width: 128,
        height: 128,
        href: "/user/utilitybills",
    },
    {
        name: "Airtel",
        image: airtel,
        width: 128,
        height: 128,
        href: "/user/utilitybills",
    },
    {
        name: "GLO",
        image: glo,
        width: 128,
        height: 128,
        href: "/user/utilitybills",
    },
    {
        name: "9mobile",
        image: ninemobile,
        width: 128,
        height: 128,
        href: "/user/utilitybills",
    },
]


export const tvProviders = [
    {
        name: "GOTV",
        image: gotv,
        className: "w-[87px] h-[32px]",
        width: 347,
        height: 128,
        href: "/user/utilitybills",
    },
    {
        name: "DSTV",
        image: dstv,
        className: "w-[87px] h-[32px]",
        width: 347,
        height: 128,
        href: "/user/utilitybills",
    },
    {
        name: "SHOWMAX",
        image: showmax,
        width: 128,
        height: 128,
        href: "/user/utilitybills",
    },
    {
        name: "STARTIMES",
        image: startimes,
        width: 129,
        height: 128,
        href: "/user/utilitybills",
    }
]

export const electricProviders = [
    {
        name: "Abuja Electric",
        image: aedc,
        width: 128,
        height: 128,
        href: "/user/utilitybills",
    },
    {
        name: "Aba Power",
        image: apl,
        width: 128,
        height: 128,
        href: "/user/utilitybills",
    },
    {
        name: "Benin Electric",
        image: bedc,
        className: "w-[64px] h-[32px]",
        width: 256,
        height: 128,
        href: "/user/utilitybills",
    },
    {
        name: "Enugu Electric",
        image: eedc,
        className: "w-[64px] h-[32px]",
        width: 246,
        height: 128,
        href: "/user/utilitybills",
    },
    {
        name: "Eko Electric",
        image: ekedc,
        className: "w-[64px] h-[32px]",
        width: 202,
        height: 128,
        href: "/user/utilitybills",
    },
    {
        name: "Ibadan Electric",
        image: ibedc,
        className: "w-[64px] h-[32px]",
        width: 249,
        height: 128,
        href: "/user/utilitybills",
    },
    {
        name: "Ikeja Electric",
        image: ikeja,
        width: 181,
        height: 128,
        href: "/user/utilitybills",
    },
    {
        name: "Jos Electric",
        image: jos,
        className: "w-[64px] h-[32px]",
        width: 164,
        height: 128,
        href: "/user/utilitybills",
    },
    {
        name: "Kaduna Electric",
        image: kaduna,
        className: "w-[64px] h-[32px]",
        width: 214,
        height: 128,
        href: "/user/utilitybills",
    },
]