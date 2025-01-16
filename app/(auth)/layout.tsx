'use client'
import { manageUserExpiration } from "@/config/ManageData";
import { useEffect } from "react";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    useEffect(() => {
        manageUserExpiration();
    }, []);

    return (
        <section className="w-full">
            {children}
        </section>
    );
}