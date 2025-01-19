import React from 'react'
import Alert from './Alert'
import Image from 'next/image'
// import usdcIcon from "@/public/brands/USDC.svg"
// import usdtIcon from "@/public/brands/USDT.svg"
import starkToken from "@/public/brands/starknet.svg"
import { AiOutlineDollarCircle } from 'react-icons/ai'
import TransactionSummary from './TransactionSummary'
import FundWallet from './FundWallet'
import Withdraw from './Withdraw'

const UserDashboardHome = () => {
    return (
        <section className="w-full flex flex-col gap-3">
            <Alert />

            <main className="w-full bg-[#F9FAFB] rounded-[16px] lg:h-[219px] p-4 flex flex-col gap-1.5">
                <h2 className="text-strimzPrimary font-[500] font-poppins text-sm">Overview</h2>
                {/* balance */}
                <div className="w-full lg:h-[159px] h-auto p-5 flex flex-col lg:justify-between rounded-[12px] bg-white shadow-[0px_1px_2px_0px_#00000014]">
                    <div className='w-full grid lg:grid-cols-3 grid-cols-2 gap-4 lg:gap-0'>
                        {/* stark token */}
                        <div className="flex flex-col gap-3 ">
                            <span className="flex items-center gap-2 uppercase font-[400] font-poppins text-[#58556A] text-xs">
                                <span className="w-[24px] h-[24px] border-[0.2px] border-[#E5E7EB] shadow-[0px_-1.2px_1.2px_0px_#0000001F_inset] rounded-full bg-white p-[1px]">
                                    <Image src={starkToken} alt='usdt icon' className='w-[24px] h-[24px]' width={68} height={69} quality={100} priority />
                                </span>
                                stark
                            </span>
                            <h3 className="text-black font-[600] font-sora text-xl text-wrap">$ 0</h3>
                        </div>

                        {/* USDC */}
                        {/* <div className="flex flex-col gap-3 ">
                            <span className="flex items-center gap-2 uppercase font-[400] font-poppins text-[#58556A] text-xs">
                                <span className="w-[24px] h-[24px] border-[0.2px] border-[#E5E7EB] shadow-[0px_-1.2px_1.2px_0px_#0000001F_inset] rounded-full bg-white p-[1px]">
                                    <Image src={usdcIcon} alt='usdt icon' className='w-[24px] h-[24px]' width={68} height={69} quality={100} priority />
                                </span>
                                usdc
                            </span>
                            <h3 className="text-black font-[600] font-sora text-xl text-wrap">$ 0</h3>
                        </div> */}

                        {/* USDT */}
                        {/* <div className="flex flex-col gap-3 md:border-l border-[#E5E7EB] md:pl-4">
                            <span className="flex items-center gap-2 uppercase font-[400] font-poppins text-[#58556A] text-xs">
                                <span className="w-[24px] h-[24px] border-[0.2px] border-[#E5E7EB] shadow-[0px_-1.2px_1.2px_0px_#0000001F_inset] rounded-full bg-white p-[1px]">
                                    <Image src={usdtIcon} alt='usdt icon' className='w-[24px] h-[24px]' width={68} height={69} quality={100} priority />
                                </span>
                                usdt
                            </span>
                            <h3 className="text-black font-[600] font-sora text-xl text-wrap">$ 0</h3>
                        </div> */}

                        {/* Total Payout */}
                        <div className="flex flex-col gap-3 md:border-l border-[#E5E7EB] md:pl-4 ">
                            <span className="flex items-center gap-2 uppercase font-[400] font-poppins text-[#58556A] text-xs">
                                <span className="w-[24px] h-[24px] border-[0.2px] border-[#E5E7EB] shadow-[0px_-1.2px_1.2px_0px_#0000001F_inset] rounded-full flex justify-center items-center bg-white p-[1px]">
                                    <AiOutlineDollarCircle className="text-black w-[22px] h-[22px]" />
                                </span>
                                total payout
                            </span>
                            <h3 className="text-black font-[600] font-sora text-xl text-wrap">$ 0</h3>
                        </div>
                    </div>
                    {/* fund & withdraw */}
                    <div className="flex gap-4 mt-4 lg:mt-0">
                        <FundWallet />
                        <Withdraw />
                    </div>
                </div>
            </main>

            <TransactionSummary />
        </section>
    )
}

export default UserDashboardHome