import Logo from "@/components/shared/Logo";
import StrimzLogo from "@/public/logo/logo.png"

export default function OnboardingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="w-full min-h-screen flex flex-col bg-white md:pt-10 pb-20 pt-[24px]">
            <header className="w-full flex justify-between items-center lg:px-16 md:px-8 px-5">
                <Logo href='/' classname='md:w-[114.28px] w-[101px]' image={StrimzLogo} />

                <button type="button" className="bg-[#F3F4F6] w-[87px] h-[40px] border border-[#E5E7EB] flex justify-center items-center shadow-[0px_-2px_4px_0px_#00000014_inset] rounded-[8px]">Sign out</button>
            </header>
            {children}
        </section>
    );
}