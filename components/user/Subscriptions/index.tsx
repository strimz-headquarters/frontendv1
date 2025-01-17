import { subscriptionProviders } from "@/utils/SubscriptionData"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineLoading3Quarters } from "react-icons/ai"


const StrimzSubscriptions = () => {
    return (
        <section className="w-full flex flex-col">
            <div className="w-full flex flex-col">
                <h3 className="font-[600] text-strimzPrimary font-sora text-lg">Subscriptions</h3>
                <p className="text-[#58556A] capitalize text-xs font-[400] font-poppins">Pay and automate your subscriptions</p>
            </div>

            <main className="w-full mt-6 flex flex-col gap-4">
                <h3 className="font-[600] flex items-center gap-1 text-strimzPrimary/80 font-sora text-base">
                    <AiOutlineLoading3Quarters className="animate-spin w-4 h-4" />
                    Coming Soon...
                </h3>

                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-x-4 md:gap-y-6 gap-y-4">
                    {
                        subscriptionProviders.map((item, i) => (
                            <Link key={i} className="bg-white border border-[#E5E7EB] shadow-[0px_1px_2px_0px_#00000014] opacity-50 cursor-not-allowed p-[12px] rounded-[12px] flex flex-col gap-3" href={item.href}>
                                <span className="w-[60px] h-[60px] overflow-hidden rounded-[8px]">
                                    <Image src={item.image} className="w-full h-full" alt={item.name} width={100} height={100} quality={100} priority />
                                </span>
                                <span className="text-sm text-strimzPrimary font-poppins font-[400] ml-1 uppercase">{item.name}</span>
                            </Link>
                        ))
                    }
                </div>
            </main>
        </section>
    )
}

export default StrimzSubscriptions