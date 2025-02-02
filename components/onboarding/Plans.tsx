'use client'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { plans } from "@/utils/StrimzPlans";
import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa6";
import Logo from "@/components/shared/Logo";
import StrimzLogo from "@/public/logo/logo.png"
import { useState, useCallback, useEffect } from "react";
import axiosInstanceWithToken from "@/config/AxiosInstance";

const Plans = () => {
    const [strimzPlans, setStrimzPlans] = useState([])

    const handlePlansFetch = useCallback(async () => {
        try {
            const response = await axiosInstanceWithToken.get("plan");
            if (response.data.success) {
                setStrimzPlans(response.data.data.rows.sort((a: any, b: any) => Number(a.limit) - Number(b.limit)));
            }
        } catch (error: any) {
            console.error("Error fetching plans:", error);
        }
    }, [])

    useEffect(() => {
        handlePlansFetch()
    }, [handlePlansFetch])

    const router = useRouter()
    const handleClick = (id: string) => {
        console.log(id);
        localStorage.setItem("strimzPlan", id);
        router.push("/user")
    }

    // logout
    const handleLogout = () => {
        localStorage.removeItem("strimzUser");
        router.push("/login")
    }

    return (
        <>
            <header className="w-full flex justify-between items-center lg:px-16 md:px-8 px-5">
                <Logo href='/' classname='md:w-[114.28px] w-[101px]' image={StrimzLogo} />

                <button type="button" onClick={handleLogout} className="bg-[#F3F4F6] w-[87px] h-[40px] border border-[#E5E7EB] flex justify-center items-center shadow-[0px_-2px_4px_0px_#00000014_inset] rounded-[8px]">Sign out</button>
            </header>

            <section className="w-full flex flex-col items-center mt-12">
                <h3 className="font-[700] font-sora text-strimzPrimary md:text-[32px] md:leading-[36px] text-[28px] leading-[28px]">Choose your plan</h3>
                <p className="lg:w-[40%] md:w-[55%] w-full px-3 md:px-0 mt-2 font-[400] font-poppins text-[#58556A] text-[14px] leading-[24px] text-center">Unlock the tools you need to simplify payments and scale your operations. Start free or upgrade for advanced features</p>

                <main className="w-full flex flex-col items-center mt-8">
                    <Tabs defaultValue="monthly" className="w-full flex flex-col items-center">
                        <TabsList className="md:w-[400px] w-[85%] grid grid-cols-2 mb-3">
                            <TabsTrigger value="monthly">Monthly</TabsTrigger>
                            <TabsTrigger value="yearly">Yearly</TabsTrigger>
                        </TabsList>
                        <p className="text-center text-sm font-[400] font-poppins"><span className="text-strimzBrandAccent">Save 15%</span> on a yearly subscription</p>

                        {/* monthly subscription */}
                        <TabsContent className="w-full lg:mt-16 md:mt-10 mt-8" value="monthly">
                            <section className="w-full grid lg:grid-cols-4 md:grid-cols-2 lg:gap-8 md:gap-12 gap-8 lg:px-10 md:px-8 px-4">
                                {
                                    strimzPlans.map((plan: any, index) => (
                                        <div
                                            key={plan.planId}
                                            className="h-[420px] rounded-[16px] border border-[#E5E7EB] bg-[#F9FAFB] cursor-pointer transition-all duration-200 group hover:bg-strimzPrimary shadow-subCardShadow flex flex-col justify-between p-6"
                                        >
                                            <div className="w-full flex flex-col">
                                                <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white border-[0.5px] border-[#E5E7EB] shadow-verifyMShadow text-strimzPrimary">
                                                    {/* Replace with dynamic icon */}
                                                    {plans[index].icon}
                                                </span>
                                                <h4 className="font-poppins font-[500] text-base text-strimzPrimary my-2 transition-all duration-200 group-hover:text-[#F9FAFB]">
                                                    {plan.plan}
                                                </h4>
                                                <div className="flex items-end gap-1">
                                                    <h2 className="font-[700] font-sora text-3xl text-strimzPrimary transition-all duration-200 group-hover:text-[#F9FAFB]">
                                                        {plan.amount === 0 ? "Free" : `$${plan.amount}`}
                                                    </h2>
                                                    <span className="uppercase text-[#58556A] font-[400] font-poppins text-sm transition-all duration-200 group-hover:text-[#F9FAFB]">
                                                        / month
                                                    </span>
                                                </div>
                                                {/* features */}
                                                <ul className="w-full mt-6 list-none flex flex-col gap-3 transition-all duration-200 group-hover:text-[#F9FAFB] text-[#58556A]">
                                                    {plans[index].features.map((feature, idx) => (
                                                        <li key={idx} className="w-full flex items-start gap-2 text-xs font-[400] font-poppins">
                                                            <FaCheck className="w-3 h-3 mt-[1.5px]" />
                                                            <span className="flex-1">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => handleClick(plan.planId)}
                                                className="w-full h-[40px] flex justify-center items-center bg-[#F3F4F6] border border-[#E5E7EB] shadow-[0px_-2px_4px_0px_#00000014_inset] rounded-[8px] text-sm font-[500] font-poppins text-strimzPrimary transition-all duration-200 group-hover:text-white group-hover:bg-strimzBrandAccent group-hover:shadow-joinWaitlistBtnShadow group-hover:border-none"
                                            >
                                                {plan.name === "Basic" ? "Start for free" : "Choose plan"}
                                            </button>
                                        </div>
                                    ))}
                            </section>
                        </TabsContent>
                        <TabsContent className="w-full lg:mt-16 md:mt-10 mt-8" value="yearly">
                            <section className="w-full grid lg:grid-cols-4 md:grid-cols-2 lg:gap-8 md:gap-12 gap-8 lg:px-10 md:px-8 px-4">
                                {
                                    strimzPlans.map((plan: any, index) => (
                                        <div
                                            key={plan.planId}
                                            className="h-[420px] rounded-[16px] border border-[#E5E7EB] bg-[#F9FAFB] cursor-pointer transition-all duration-200 group hover:bg-strimzPrimary shadow-subCardShadow flex flex-col justify-between p-6"
                                        >
                                            <div className="w-full flex flex-col">
                                                <span className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-white border-[0.5px] border-[#E5E7EB] shadow-verifyMShadow text-strimzPrimary">
                                                    {/* Replace with dynamic icon */}
                                                    {plans[index].icon}
                                                </span>
                                                <h4 className="font-poppins font-[500] text-base text-strimzPrimary my-2 transition-all duration-200 group-hover:text-[#F9FAFB]">
                                                    {plan.plan}
                                                </h4>
                                                <div className="flex items-end gap-1">
                                                    <h2 className="font-[700] font-sora text-3xl text-strimzPrimary transition-all duration-200 group-hover:text-[#F9FAFB]">
                                                        {plan.amount === 0 ? "Free" : `$${plan.amount * 12}`}
                                                    </h2>
                                                    <span className="uppercase text-[#58556A] font-[400] font-poppins text-sm transition-all duration-200 group-hover:text-[#F9FAFB]">
                                                        / month
                                                    </span>
                                                </div>
                                                {/* features */}
                                                <ul className="w-full mt-6 list-none flex flex-col gap-3 transition-all duration-200 group-hover:text-[#F9FAFB] text-[#58556A]">
                                                    {plans[index].features.map((feature, idx) => (
                                                        <li key={idx} className="w-full flex items-start gap-2 text-xs font-[400] font-poppins">
                                                            <FaCheck className="w-3 h-3 mt-[1.5px]" />
                                                            <span className="flex-1">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => handleClick(plan.planId)}
                                                className="w-full h-[40px] flex justify-center items-center bg-[#F3F4F6] border border-[#E5E7EB] shadow-[0px_-2px_4px_0px_#00000014_inset] rounded-[8px] text-sm font-[500] font-poppins text-strimzPrimary transition-all duration-200 group-hover:text-white group-hover:bg-strimzBrandAccent group-hover:shadow-joinWaitlistBtnShadow group-hover:border-none"
                                            >
                                                {plan.name === "Basic" ? "Start for free" : "Choose plan"}
                                            </button>
                                        </div>
                                    ))}
                            </section>
                        </TabsContent>
                    </Tabs>
                </main>
            </section>
        </>
    )
}

export default Plans