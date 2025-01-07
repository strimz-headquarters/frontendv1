import AnimatedRevolver from "./AnimatedRevolver"


const HeroSection = () => {
    return (
        <section className="w-full lg:pt-[64px] pt-[56px] overflow-x-hidden">
            <main className="flex flex-col items-center gap-6 z-10 bg-gradient-to-b from-[#ffffff] to-[#ffffff]/90">
                <div className="w-full flex flex-col items-center gap-5">
                    <h1 className="w-[90%] md:w-[65%] lg:w-[47%] font-sora font-[700] lg:text-[64px] md:text-[56px] text-[48px] lg:leading-[64px] md:leading-[56px] leading-[48px] text-strimzPrimary text-center z-10">Crypto payroll and subscriptions made easy⚡</h1>
                    <p className="w-[90%] md:w-[65%] lg:w-1/2 font-[400] font-poppins md:text-[16px] text-[14px] md:leading-[28px] leading-[24px] text-center text-[#58556A] z-10">Stop stressing over payments. Strimz lets you automate payroll and subscriptions securely and on time—no manual transfers, no hassle. Focus on what truly matters.</p>
                </div>
                <div className="w-full flex justify-center items-center z-10 ">
                    <button type="button" className='w-[151px] h-[40px] flex justify-center items-center rounded-[8px] bg-strimzBrandAccent text-[#FFFFFF] font-poppins font-[600] shadow-joinWaitlistBtnShadow z-10 text-shadow text-[14px]'>
                        Launch App
                    </button>
                </div>
            </main>
            {/* circular */}
            <AnimatedRevolver />
        </section>
    )
}

export default HeroSection