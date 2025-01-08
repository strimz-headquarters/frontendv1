export default function OnboardingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="w-full min-h-screen flex flex-col">
            <header className="w-full flex justify-between items-center lg:px-10 md:px-8 px-5">

            </header>
            {children}
        </section>
    );
}