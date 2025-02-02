'use client'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { LuWallet } from "react-icons/lu";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import usdcIcon from "@/public/brands/USDC.svg"
import usdtIcon from "@/public/brands/USDT.svg"
import Image from "next/image";

const Withdraw = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    type="button"
                    className={`w-[97px] h-[32px] flex justify-center items-center bg-[#F9FAFB] rounded-[8px] border border-[#E5E7EB] shadow-[0px_-2px_4px_0px_#00000014_inset] cursor-pointer text-[12px] font-[500] font-poppins text-strimzPrimary`}
                >
                    Withdraw
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <span className="w-[40px] h-[40px] flex justify-center items-center bg-white border-[0.5px] border-[#E5E7EB] shadow-[0px_1px_2px_0px_#00000014] rounded-full">
                            <LuWallet className="w-4 h-4 text-strimzPrimary" />
                        </span>
                        <span className="text-black font-[500] font-sora capitalize text-sm ">withdraw from wallet</span>
                    </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {/* token */}
                    <div className='w-full flex flex-col'>
                        <label htmlFor="token" className="font-poppins text-[14px] text-[#58556A] leading-[24px]">Select token</label>
                        <Select>
                            <SelectTrigger className="focus:ring-0 focus:outline-none w-full rounded-[8px] border bg-[#F9FAFB] border-[#E5E7EB] shadow-navbarShadow h-[44px] font-poppins text-[14px] placeholder:text-[14px] placeholder:text-[#8E8C9C] text-[#8E8C9C] px-4 outline-none transition duration-300 focus:border-strimzBrandAccent">
                                <SelectValue placeholder="Select token" />
                            </SelectTrigger>
                            <SelectContent className="focus:ring-0 focus:outline-none z-[99999]">
                                <SelectItem value="usdc" >
                                    <span className="w-full uppercase flex flex-row items-center gap-1">
                                        <Image src={usdcIcon} className="mt-1" alt="USDC" width={22} height={22} />
                                        USDC
                                    </span>
                                </SelectItem>
                                <SelectItem value="usdt" className="flex-row items-center gap-2">
                                    <span className="w-full uppercase flex flex-row items-center gap-1">
                                        <Image src={usdtIcon} className="mt-1" alt="USDT" width={22} height={22} />
                                        USDT
                                    </span>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* amount */}
                    <div className='w-full flex flex-col'>
                        <label htmlFor="amount" className="font-poppins text-[14px] text-[#58556A] leading-[24px]">Amount</label>
                        <input type="number" name="amount" id="amount" placeholder='$ 0.00' className={`w-full rounded-[8px] border bg-[#F9FAFB] border-[#E5E7EB] shadow-navbarShadow h-[44px] font-poppins text-[14px] placeholder:text-[14px] placeholder:text-[#8E8C9C] text-[#8E8C9C] px-4 outline-none transition duration-300 focus:border-strimzBrandAccent`} />

                    </div>
                </div>
                <DialogFooter>
                    <button type="button" className='w-full h-[40px] flex justify-center items-center rounded-[8px] bg-strimzBrandAccent text-[#FFFFFF] font-poppins font-[500] shadow-joinWaitlistBtnShadow text-shadow text-[12px] capitalize'>
                        withdraw from wallet
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default Withdraw