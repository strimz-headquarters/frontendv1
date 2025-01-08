"use client"
import { BsEnvelope } from "react-icons/bs"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useState } from "react"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import { useRouter } from "next/navigation"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

const VerificationForm = () => {

    return (
        <div className="shadow-authCardShadow md:w-[380px] w-full rounded-[16px] bg-white border border-[#E5E7EB] flex flex-col gap-4 items-center py-8 px-6">
            <div className="w-[56px] h-[56px] flex justify-center items-center bg-white border-[0.7px] border-[#E5E7EB] rounded-full shadow-verifyMShadow text-strimzBrandAccent">
                <BsEnvelope className="w-5 h-5" />
            </div>

            <div className="w-full flex flex-col gap-3">
                <h4 className="font-poppins font-[600] text-base text-strimzPrimary text-center">Verify email address</h4>
                <p className="font-poppins font-[400] text-[14px] leading-[24px] text-[#58556A] text-center px-3">Please check <span className="font-[500]">gregory@gmail.com</span> for an email and enter your code below. </p>
            </div>

            <FormInputs />

            <p className="text-[#58556A] font-[400] font-poppins text-[14px] leading-[24px]">
                Didn&apos;t get an email?
                <button className="underline ml-2 text-strimzBrandAccent font-[500]">Resend code</button>
            </p>
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
            // Simulate an API call to validate OTP
            const response = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (otp === "123456") {
                        resolve({ success: true })
                    } else {
                        reject(new Error("Invalid OTP"))
                    }
                }, 2000)
            })

            console.log(response)

            router.push("/onboarding/plans");
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (value: string) => {
        setValue(value)
        if (value.length === 6) {
            validateOTP(value)
        }
    }

    return (
        <>
            <InputOTP
                maxLength={6}
                pattern={REGEXP_ONLY_DIGITS}
                value={value}
                onChange={handleChange}
                disabled={isLoading}
            >
                <InputOTPGroup className="gap-1">
                    {[...Array(6)].map((_, index) => (
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