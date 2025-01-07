export default function UserLayout({
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