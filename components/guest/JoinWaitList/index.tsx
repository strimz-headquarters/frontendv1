import JoinWaitlistForm from "@/components/shared/JoinWaitlistForm"
import pattern from "@/public/vec/Patterns.png"
import Image from "next/image"


const JoinWaitList = () => {
    return (
        <section className="w-full flex flex-col items-center gap-10 overflow-x-hidden bg-[#F5FFFA] lg:pb-28 pb-20">
            <Image src={pattern} className="w-[1527px] h-[191px] object-cover" alt="LogoPattern" width={5760} height={764} quality={100} priority />
            <h2 className='text-center text-strimzPrimary font-sora font-[700] lg:text-[52px] lg:leading-[52px] text-[48px] leading-[48px]'>Streamline ⚡ <br />payments anytime</h2>
            <div className="w-[90%] md:w-[60%] lg:w-[40%] z-10">
                <JoinWaitlistForm />
            </div>
        </section>
    )
}

export default JoinWaitList