export default function OnboardingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="w-full">
            {children}
        </section>
    );
}