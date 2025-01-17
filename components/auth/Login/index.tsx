/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import ErrorDisplay from "@/components/shared/ErrorMsg";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import * as Yup from "yup";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Link from "next/link";
// import GoogleIcon from "@/public/brands/Google.svg"
// import Image from "next/image";
import { useRouter } from "next/navigation";
import { defaultAxiosInstance } from "@/config/AxiosInstance";
import { toast } from "sonner";
import Logo from "@/components/shared/Logo";
import StrimzLogo from "@/public/logo/logo.png"
import { setUserWithExpiration } from "@/config/ManageData";


const LoginForm = () => {
    return (
        <>
            <header className="w-full fixed top-0 inset-x-0 md:hidden flex justify-center items-center pt-4">
                <Logo href='/' classname='md:w-[114.28px] w-[101px]' image={StrimzLogo} />
            </header>

            <div className="shadow-authCardShadow md:w-[380px] w-full rounded-[16px] bg-white border border-[#E5E7EB] flex flex-col items-center py-8 px-6">
                <h4 className="font-[600] font-sora text-strimzPrimary text-center text-lg">Login to Strimz</h4>

                <FormInputs />
            </div>
        </>
    )
}

export default LoginForm


interface FormInputValues {
    email: string;
    password: string;
}

const FormInputs = () => {
    const [isSending, setIsSending] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const router = useRouter()

    //initial form values
    const initialValues: FormInputValues = {
        email: "",
        password: ""
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid Email Format").required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
            .matches(/\d/, "Password must contain at least one number"),
    });

    // OnSubmit handler
    const onSubmit = async (
        values: FormInputValues,
        { resetForm }: FormikHelpers<FormInputValues>
    ) => {
        try {
            setIsSending(true);

            const data = JSON.stringify(values);

            const response = await defaultAxiosInstance.post("auth/sign-in", data);

            if (response.data.success) {
                resetForm();
                toast.success(response.data.message, {
                    position: "top-right",
                });

                setUserWithExpiration(response.data.data, 24);
                console.log("user: ", response.data.data);

                router.push("/user");
            }
        } catch (error: any) {
            console.error("Failed to login:", error.response.data);
            if (error.response.data.message === "Email verification sent") {
                router.push("/verify-email");
                toast.error(error.response.data.message, {
                    position: "top-right",
                })
            } else {
                toast.error(error.response.data.message, {
                    position: "top-right",
                })
            }

        } finally {
            setIsSending(false);
            resetForm();
        }
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnChange={true}
        >
            {(formik) => {
                const { dirty, isValid, errors } = formik;
                return (
                    <Form className="w-full flex flex-col gap-3 mt-6">
                        {/* email */}
                        <div className='w-full flex flex-col'>
                            <label htmlFor="email" className="font-poppins text-[14px] text-[#58556A] leading-[24px]">Email</label>
                            <Field type="email" name="email" id="email" placeholder='Adams@example.com' className={`w-full rounded-[8px] border bg-[#F9FAFB] shadow-navbarShadow h-[44px] font-poppins text-[14px] placeholder:text-[14px] placeholder:text-[#8E8C9C] text-[#8E8C9C] px-4 outline-none transition duration-300 focus:border-strimzBrandAccent ${errors.email ? "border-red-500" : "border-[#E5E7EB]"}`} />
                            {/* error */}
                            <ErrorMessage name="email"
                                component={({ children }: any) => <ErrorDisplay message={children} />} />
                        </div>
                        {/* Password */}
                        <div className="w-full flex flex-col">
                            <label
                                htmlFor="password"
                                className="font-poppins text-[14px] text-[#58556A] leading-[24px]"
                            >
                                Password
                            </label>
                            <div className="relative w-full h-[44px]">
                                <Field
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className={`w-full rounded-[8px] border bg-[#F9FAFB] shadow-navbarShadow h-full font-poppins text-[14px] placeholder:text-[14px] placeholder:text-[#8E8C9C] text-[#8E8C9C] pl-4 pr-14 outline-none transition duration-300 focus:border-strimzBrandAccent ${errors.password ? "border-red-500" : "border-[#E5E7EB]"
                                        }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#58556A]"
                                >
                                    {showPassword ? (
                                        <FaRegEyeSlash className="w-5 h-5" />
                                    ) : (
                                        <FaRegEye className="w-5 h-5" />
                                    )}
                                </button>
                            </div>
                            <ErrorMessage
                                name="password"
                                component={({ children }: any) => <ErrorDisplay message={children} />}
                            />
                        </div>
                        {/* forgot password */}
                        <div className="w-full flex justify-end">
                            <Link href="/reset-password" className="font-poppins text-[14px] text-[#58556A] hover:underline leading-[24px]">Forgot Password?</Link>
                        </div>
                        {/* btn */}
                        <button type="submit" disabled={!(dirty && isValid)} className='w-full h-[40px] flex justify-center items-center rounded-[8px] bg-strimzBrandAccent text-[#FFFFFF] font-poppins font-[600] shadow-joinWaitlistBtnShadow text-shadow text-[14px] disabled:opacity-80 disabled:cursor-not-allowed'>
                            {
                                isSending ?
                                    (<span className="flex items-center text-[#FFFFFF] gap-1">
                                        <AiOutlineLoading3Quarters className="animate-spin text-[#FFFFFF]" />
                                        Submitting...
                                    </span>)
                                    : (<span>Login</span>)
                            }
                        </button>
                        {/* divide */}
                        {/* <div className="w-full h-[1px] bg-[#E5E7EB]" /> */}
                        {/* google auth */}
                        {/* <button type="button" className='w-full h-[40px] flex justify-center gap-1.5 items-center rounded-[8px] bg-[#F9FAFB] text-[#58556A] font-poppins font-[500] shadow-[0px_-2px_4px_0px_#00000014_inset] border border-[#E5E7EB] text-[12px]'>
                            <Image src={GoogleIcon} width={12} height={12} alt="Google Icon" className='w-[18px] h-[18px]' priority quality={100} />
                            <span>Continue with Google</span>
                        </button> */}

                        {/* end */}
                        <div className="w-full flex flex-col items-center gap-4 mt-8">
                            <p className="font-poppins text-center font-[400] text-[14px] text-[#58556A] leading-[24px]">Don&apos;t have an account? <Link href="/signup" className="font-poppins font-[600] text-[14px] text-strimzBrandAccent hover:underline leading-[24px]">Sign Up</Link></p>

                            <p className="md:w-[80%] w-[90%] text-center font-poppins font-[400] text-[12px] text-[#58556A] ">
                                By continuing you agree to{" "}
                                <Link className="underline" href="/">Strimz Terms of Service</Link> and
                                {" "}<Link href="/" className="underline">Privacy Policy</Link>
                            </p>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}