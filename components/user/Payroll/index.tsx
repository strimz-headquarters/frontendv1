'use client'
import { useRouter } from "next/navigation"
import { GoPlus } from "react-icons/go"


const UserPayrolls = () => {
    const router = useRouter()
    return (
        <section className="w-full flex flex-col">
            <div className="w-full flex flex-col">
                <h3 className="font-[600] font-sora text-lg">Payroll</h3>
                <p className="text-[#58556A] capitalize text-xs font-[400] font-poppins">Automate token streaming instantly </p>
            </div>

            {/* no payrolls */}
            <div className="w-full h-[350px] flex justify-center items-center">
                <div className="w-full flex flex-col justify-center gap-1 items-center">
                    <h4 className="text-strimzPrimary font-[500] font-poppins text-base">
                        No Payrolls yet</h4>
                    <p className="text-[#58556A] md:w-[50%] w-[80%] text-center text-xs font-[400] font-poppins">Set up your first payroll and start automating payments effortlessly.</p>

                    <button type="button" onClick={() => router.push("/user/payroll/create")} className='w-[151px] mt-4 h-[38px] flex justify-center gap-1 items-center rounded-[8px] bg-strimzBrandAccent text-[#FFFFFF] font-poppins font-[600] shadow-joinWaitlistBtnShadow z-10 text-shadow text-[12px]'>
                        <GoPlus className="w-4 h-4 font-bold" />
                        Create payroll
                    </button>
                </div>
            </div>
        </section>
    )
}

export default UserPayrolls