import { tvProviders } from "@/utils/UtilityData"
import Image from "next/image"
import Link from "next/link"
import { IoMdTv } from "react-icons/io"


const CableTv = () => {
    return (
        <section className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#F5FFFA] border-[0.5px] border-[#94F9C9] shadow-subIconShadow text-strimzBrandAccent">
                    <IoMdTv className="w-4 h-4" />
                </span>
                <span className="text-base text-strimzPrimary font-[500] font-poppins">Cable TV</span>
            </div>

            <main className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                    tvProviders.map((tv, i) => (
                        <Link key={i} className="bg-white border border-[#E5E7EB] shadow-[0px_1px_2px_0px_#00000014] p-[12px] rounded-[12px] flex flex-col gap-3" href={tv.href}>
                            <Image src={tv.image} className={`object-contain ${tv.className ? tv.className : "w-[32px] h-[32px]"}`} alt={tv.name} width={tv.width} height={tv.height} quality={100} priority />
                            <span className="text-sm text-strimzPrimary font-poppins font-[500]">{tv.name}</span>
                        </Link>
                    ))
                }
            </main>
        </section>
    )
}

export default CableTv