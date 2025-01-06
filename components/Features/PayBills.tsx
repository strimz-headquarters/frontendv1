import { brandImages } from '@/utils/subscriptionBrands'
import Image from 'next/image'


const PayBills = () => {
    return (
        <section className="w-full md:h-[615px] h-[738px] bg-white flex lg:flex-row flex-col justify-center items-center lg:gap-20 md:gap-12 gap-20 px-4 md:px-0">
            <div className='lg:order-1 order-2 lg:w-[640px] lg:h-[416px] md:w-[490px] md:h-[266px] h-[240px] grid grid-cols-6 grid-rows-4 lg:gap-[32px] md:gap-[14px] gap-[12px]'>
                {brandImages.map((item, index) => (
                    <div
                        key={index}
                        className="border border-[#E5E7EB] bg-[#F9FAFB] overflow-hidden rounded-[12px]"
                    >
                        {item.src && (
                            <Image
                                src={item.src}
                                alt={item.alt || ""}
                                width={item.size || 80}
                                height={item.size || 80}
                                quality={100}
                                priority
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className='lg:order-2 md:self-start lg:self-center order-1 w-[356px] flex flex-col gap-4 md:pl-12 lg:pl-0'>
                <h3 className="md:text-[40px] text-3xl font-sora font-[700] text-strimzPrimary md:leading-[48px]">Bill payment &<br />
                    subscriptions</h3>
                <p className="text-[#58556A] font-[400] font-poppins text-base">Take the hassle out of bill payments and recurring subscriptions. Strimz enables seamless transactions with real-time tracking and secure automation for all your payment needs.</p>
            </div>
        </section>
    )
}

export default PayBills