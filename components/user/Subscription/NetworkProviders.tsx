import { networkProviders } from "@/utils/SubscriptionData"
import Image from "next/image"
import Link from "next/link"


const NetworkProviders = ({ icon }: { icon: React.ReactNode }) => {
    return (
        <section className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-[#F5FFFA] border-[0.5px] border-[#94F9C9] shadow-subIconShadow text-strimzBrandAccent">
                    {icon}
                </span>
                <span className="text-base text-strimzPrimary font-[500] font-poppins">Mobile (Airtime/Data)</span>
            </div>

            <main className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    networkProviders.map((network, i) => (
                        <Link key={i} className="bg-white border border-[#E5E7EB] shadow-[0px_1px_2px_0px_#00000014] p-[12px] rounded-[12px] flex flex-col gap-3" href={network.href}>
                            <Image src={network.image} className="w-[32px] h-[32px]" alt={network.name} width={network.width} height={network.height} quality={100} priority />
                            <span className="text-sm text-strimzPrimary font-poppins font-[500]">{network.name}</span>
                        </Link>
                    ))
                }
            </main>
        </section>
    )
}

export default NetworkProviders