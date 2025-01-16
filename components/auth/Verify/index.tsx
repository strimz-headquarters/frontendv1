"use client"
import { BsEnvelope } from "react-icons/bs"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useEffect, useState } from "react"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import { useRouter } from "next/navigation"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { RxCaretLeft } from "react-icons/rx";
import { defaultAxiosInstance } from "@/config/AxiosInstance"
import { toast } from "sonner"

const VerificationForm = () => {
    const router = useRouter()
    const [user, setUser] = useState<{ email?: string }>({});

    useEffect(() => {
        const data = window.localStorage.getItem("strimzUser");
        const parsedUser = data ? JSON.parse(data) : {};
        setUser(parsedUser);
    }, []);

    return (
        <div className="shadow-authCardShadow md:w-[380px] w-full rounded-[16px] bg-white border border-[#E5E7EB] flex flex-col gap-4 items-center py-8 px-6 relative">
            <div className="w-[56px] h-[56px] flex justify-center items-center bg-white border-[0.7px] border-[#E5E7EB] rounded-full shadow-verifyMShadow text-strimzBrandAccent">
                <BsEnvelope className="w-5 h-5" />
            </div>

            <div className="w-full flex flex-col gap-3">
                <h4 className="font-poppins font-[600] text-base text-strimzPrimary text-center">Verify email address</h4>
                <p className="font-poppins font-[400] text-[14px] leading-[24px] text-[#58556A] text-center px-3">Please check <span className="font-[500]">{user?.email}</span> for an email and enter your code below. </p>
            </div>

            <FormInputs />

            <p className="text-[#58556A] font-[400] font-poppins text-[14px] leading-[24px]">
                Didn&apos;t get an email?
                <button className="underline ml-2 text-strimzBrandAccent font-[500]">Resend code</button>
            </p>

            {/* go back btn */}
            <button type="button" onClick={() => router.back()} className="absolute top-5 left-5 text-strimzPrimary font-bold">
                <RxCaretLeft className="w-8 h-8" />
            </button>
        </div>
    )
}

export default VerificationForm

const FormInputs = () => {
    const [value, setValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const validateOTP = async (otp: string) => {
        setIsLoading(true)
        try {
            const response = await defaultAxiosInstance.get(`auth/verify/${otp}`);

            if (response.data.success) {
                toast.success(response.data.message, {
                    position: "top-right",
                });

                localStorage.setItem("strimzUser", JSON.stringify(response.data.data));

                setValue("")

                router.push("/onboarding/plans");
            }

        } catch (error: any) {
            console.error(error.response.data);
            toast.error(error.response.data.message, {
                position: "top-right",
            })
            setValue("")
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (value: string) => {
        setValue(value)
        if (value.length === 4) {
            validateOTP(value)
        }
    }

    return (
        <>
            <InputOTP
                maxLength={4}
                pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                value={value}
                onChange={handleChange}
                disabled={isLoading}
            >
                <InputOTPGroup className="gap-1">
                    {[...Array(4)].map((_, index) => (
                        <InputOTPSlot key={index} index={index} />
                    ))}
                </InputOTPGroup>
            </InputOTP>
            {isLoading &&
                <p className="flex justify-center text-sm items-center text-strimzBrandAccent gap-1">
                    <AiOutlineLoading3Quarters className="animate-spin text-strimzBrandAccent" />
                    Verifying...
                </p>
            }
        </>
    )
}