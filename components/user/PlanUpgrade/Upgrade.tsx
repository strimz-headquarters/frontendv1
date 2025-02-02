'use client'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { plans } from "@/utils/StrimzPlans"
import { CiBookmark } from "react-icons/ci"
import { FaCheck } from "react-icons/fa"

const Upgrade = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button type="button" className='w-[112px] h-[32px] flex justify-center items-center rounded-[8px] bg-strimzBrandAccent text-[#FFFFFF] font-poppins font-[500] shadow-joinWaitlistBtnShadow z-10 text-shadow text-[12px] capitalize'>
                    Upgrade plan
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:max-w-[1000px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <span className="w-[40px] h-[40px] flex justify-center items-center bg-white border-[0.5px] border-[#E5E7EB] shadow-[0px_1px_2px_0px_#00000014] rounded-full">
                            <CiBookmark className="w-4 h-4 text-strimzPrimary" />
                        </span>
                        <span className="text-black font-[500] font-sora capitalize text-sm ">Select a plan</span>
                    </DialogTitle>
                </DialogHeader>
                <main className="w-full h-[500px] md:h-auto overflow-y-auto flex flex-col items-center py-3">
                    <Tabs defaultValue="monthly" className="w-full flex flex-col items-center">
                        <TabsList className="md:w-[400px] w-[85%] grid grid-cols-2 mb-3">
                            <TabsTrigger value="monthly">Monthly</TabsTrigger>
                            <TabsTrigger value="yearly">Yearly</TabsTrigger>
                        </TabsList>
                        <p className="text-center text-sm font-[400] font-poppins"><span className="text-strimzBrandAccent">Save 15%</span> on a yearly subscription</p>

                        {/* monthly subscription */}
                        <TabsContent className="w-full mt-8" value="monthly">
                            <section className="w-full grid lg:grid-cols-3 md:grid-cols-3 lg:gap-8 md:gap-12 gap-8 px-4">
                                {
                                    plans.slice(1, 4).map((plan) => (
                                        <div
                                            key={plan.name}
                                            className="h-[420px] rounded-[16px] border border-[#E5E7EB] bg-[#F9FAFB] cursor-pointer transition-all duration-200 group hover:bg-strimzPrimary shadow-subCardShadow flex flex-col justify-between p-6"
                                        >
                                            <div className="w-full flex flex-col">
                                                <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white border-[0.5px] border-[#E5E7EB] shadow-verifyMShadow text-strimzPrimary">
                                                    {/* Replace with dynamic icon */}
                                                    {plan.icon}
                                                </span>
                                                <h4 className="font-poppins font-[500] text-base text-strimzPrimary my-2 transition-all duration-200 group-hover:text-[#F9FAFB]">
                                                    {plan.name}
                                                </h4>
                                                <div className="flex items-end gap-1">
                                                    <h2 className="font-[700] font-sora text-3xl text-strimzPrimary transition-all duration-200 group-hover:text-[#F9FAFB]">
                                                        {plan.monthlyPrice === 0 ? "Free" : `$${plan.monthlyPrice}`}
                                                    </h2>
                                                    <span className="uppercase text-[#58556A] font-[400] font-poppins text-sm transition-all duration-200 group-hover:text-[#F9FAFB]">
                                                        / month
                                                    </span>
                                                </div>
                                                {/* features */}
                                                <ul className="w-full mt-6 list-none flex flex-col gap-3 transition-all duration-200 group-hover:text-[#F9FAFB] text-[#58556A]">
                                                    {plan.features.map((feature, idx) => (
                                                        <li key={idx} className="w-full flex items-start gap-2 text-xs font-[400] font-poppins">
                                                            <FaCheck className="w-3 h-3 mt-[1.5px]" />
                                                            <span className="flex-1">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <button
                                                type="button"
                                                className="w-full h-[40px] flex justify-center items-center bg-[#F3F4F6] border border-[#E5E7EB] shadow-[0px_-2px_4px_0px_#00000014_inset] rounded-[8px] text-sm font-[500] font-poppins text-strimzPrimary transition-all duration-200 group-hover:text-white group-hover:bg-strimzBrandAccent group-hover:shadow-joinWaitlistBtnShadow group-hover:border-none"
                                            >
                                                {"Choose plan"}
                                            </button>
                                        </div>
                                    ))}
                            </section>
                        </TabsContent>
                        <TabsContent className="w-full mt-8" value="yearly">
                            <section className="w-full grid lg:grid-cols-3 md:grid-cols-3 lg:gap-8 md:gap-12 gap-8 px-4">
                                {
                                    plans.slice(1, 4).map((plan) => (
                                        <div
                                            key={plan.name}
                                            className="h-[420px] rounded-[16px] border border-[#E5E7EB] bg-[#F9FAFB] cursor-pointer transition-all duration-200 group hover:bg-strimzPrimary shadow-subCardShadow flex flex-col justify-between p-6"
                                        >
                                            <div className="w-full flex flex-col">
                                                <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white border-[0.5px] border-[#E5E7EB] shadow-verifyMShadow text-strimzPrimary">
                                                    {/* Replace with dynamic icon */}
                                                    {plan.icon}
                                                </span>
                                                <h4 className="font-poppins font-[500] text-base text-strimzPrimary my-2 transition-all duration-200 group-hover:text-[#F9FAFB]">
                                                    {plan.name}
                                                </h4>
                                                <div className="flex items-end gap-1">
                                                    <h2 className="font-[700] font-sora text-3xl text-strimzPrimary transition-all duration-200 group-hover:text-[#F9FAFB]">
                                                        {plan.yearlyPrice === 0 ? "Free" : `$${plan.yearlyPrice}`}
                                                    </h2>
                                                    <span className="uppercase text-[#58556A] font-[400] font-poppins text-sm transition-all duration-200 group-hover:text-[#F9FAFB]">
                                                        / year
                                                    </span>
                                                </div>
                                                {/* features */}
                                                <ul className="w-full mt-6 list-none flex flex-col gap-3 transition-all duration-200 group-hover:text-[#F9FAFB] text-[#58556A]">
                                                    {plan.features.map((feature, idx) => (
                                                        <li key={idx} className="w-full flex items-start gap-2 text-xs font-[400] font-poppins">
                                                            <FaCheck className="w-3 h-3 mt-[1.5px]" />
                                                            <span className="flex-1">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <button
                                                type="button"
                                                className="w-full h-[40px] flex justify-center items-center bg-[#F3F4F6] border border-[#E5E7EB] shadow-[0px_-2px_4px_0px_#00000014_inset] rounded-[8px] text-sm font-[500] font-poppins text-strimzPrimary transition-all duration-200 group-hover:text-white group-hover:bg-strimzBrandAccent group-hover:shadow-joinWaitlistBtnShadow group-hover:border-none"
                                            >
                                                {"Choose plan"}
                                            </button>
                                        </div>
                                    ))}
                            </section>
                        </TabsContent>
                    </Tabs>
                </main>
            </DialogContent>
        </Dialog>
    )
}

export default Upgrade