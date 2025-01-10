"use client";
import Footer from "@/components/sharedDashBComponents/Footer";
import Header from "@/components/sharedDashBComponents/Header";
import SideBar from "@/components/sharedDashBComponents/SideBar";
import { useState } from "react";

export default function UserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    return (
        <div className=" bg-[#F9FAFB] lg:p-1.5">
            {/* Page Wrapper Start  */}
            <div className="flex h-screen gap-1 overflow-hidden">
                {/* Sidebar Start */}
                <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                {/* Sidebar End  */}

                {/* Content Area Start  */}
                <div className="relative flex min-h-screen rounded-t-[8px] bg-white flex-1 border border-[#E5E7EB] flex-col justify-between overflow-y-auto overflow-x-hidden no-scrollbar">
                    <section>
                        {/*  Header Start */}
                        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                        {/*  Header End */}

                        {/*  Main Content Start */}
                        <main>
                            <div className="mx-auto max-w-screen-2xl pt-4 pb-6 md:pt-4 md:pb-10 2xl:p-10">
                                <section className="w-full px-1.5">{children}</section>
                            </div>
                        </main>
                    </section>
                    {/*  Main Content End  */}
                    <Footer />
                </div>
                {/*  Content Area End  */}
            </div>
            {/*  Page Wrapper End  */}
        </div>
    );
}