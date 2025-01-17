import { electricProviders } from "@/utils/UtilityData"
import Image from "next/image"
import Link from "next/link"
import { IoBulbOutline } from "react-icons/io5"

const Electricity = () => {
    return (
        <section className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#F5FFFA] border-[0.5px] border-[#94F9C9] shadow-subIconShadow text-strimzBrandAccent">
                    <IoBulbOutline className="w-4 h-4" />
                </span>
                <span className="text-base text-strimzPrimary font-[500] font-poppins">Electricity</span>
            </div>

            <main className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                    electricProviders.map((item, i) => (
                        <Link key={i} className="bg-white border border-[#E5E7EB] shadow-[0px_1px_2px_0px_#00000014] p-[12px] rounded-[12px] flex flex-col gap-3" href={item.href}>
                            <Image src={item.image} className={`object-contain ${item.className ? item.className : "w-[32px] h-[32px]"}`} alt={item.name} width={item.width} height={item.height} quality={100} priority />
                            <span className="text-sm text-strimzPrimary font-poppins font-[500]">{item.name}</span>
                        </Link>
                    ))
                }
            </main>
        </section>
    )
}

export default Electricity