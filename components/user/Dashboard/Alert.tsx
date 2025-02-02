import Image from "next/image"
import { FaCheck } from "react-icons/fa"
import authPattern2 from "@/public/vec/authPattern2.png"

const Alert = () => {
    return (
        <div className={`w-full flex flex-col relative bg-strimzPrimary alertGradient rounded-[12px] p-4 overflow-hidden`}>
            <div className=" flex flex-col justify-between relative">
                <h3 className="text-[#F3F4F6] text-base font-sora font-[600]">Get started with Strimz</h3>

                <ul className="w-full mt-6 list-none flex flex-col gap-1.5 text-[#D1D5DB]">
                    <li className="w-full flex items-start gap-2 text-sm font-[400] font-poppins">
                        <span className="w-4 h-4 mt-[1.5px] flex justify-center items-center bg-[#F3F4F6] rounded-full">
                            <FaCheck className="w-2 h-2 text-strimzPrimary" />
                        </span>
                        <span className="flex-1">Add funds to your Strimz wallet to begin streaming.</span>
                    </li>
                    <li className="w-full flex items-start gap-2 text-sm font-[400] font-poppins">
                        <span className="w-4 h-4 mt-[1.5px] flex justify-center items-center bg-[#F3F4F6] rounded-full">
                            <FaCheck className="w-2 h-2 text-strimzPrimary" />
                        </span>
                        <span className="flex-1">Create your first payroll or pay for a subscription.</span>
                    </li>
                </ul>
            </div>

            <Image src={authPattern2} alt="pattern" className="absolute opacity-50 right-0 bottom-0 w-[156.93px] h-[128.83px]" width={1107} height={740} quality={100} priority />
        </div>
    )
}

export default Alert