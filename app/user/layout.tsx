"use client";
import Footer from "@/components/sharedDashBComponents/Footer";
import Header from "@/components/sharedDashBComponents/Header";
import SideBar from "@/components/sharedDashBComponents/SideBar";
import { StarknetProvider } from "@/config/Starknet-Provider";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function UserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const router = useRouter();

    const checkAuth = useCallback(async () => {
        if (typeof window !== "undefined") {
            const user = localStorage.getItem("strimzUser");
            if (user) {
                try {
                    const parsedUser = JSON.parse(user);
                    if (!parsedUser.verified) {
                        router.push("/verify-email");
                    }
                    return;
                } catch (error) {
                    console.error("Failed to parse user data:", error);
                    router.push("/login");
                }
            } else {
                router.push("/login");
            }
        }
    }, [router])

    useEffect(() => {
        checkAuth();
    }, [checkAuth])

    return (
        <StarknetProvider>
            <div className=" bg-[#F9FAFB] lg:p-1.5">
                {/* Page Wrapper Start  */}
                <div className="flex h-screen gap-1 overflow-hidden">
                    {/* Sidebar Start */}
                    <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    {/* Sidebar End  */}

                    {/* Content Area Start  */}
                    <div className="relative flex min-h-[100svh] rounded-t-[8px] bg-white flex-1 border border-[#E5E7EB] flex-col justify-between overflow-y-auto overflow-x-hidden no-scrollbar">
                        <section>
                            {/*  Header Start */}
                            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                            {/*  Header End */}

                            {/*  Main Content Start */}
                            <main>
                                <div className="mx-auto 2xl:max-w-screen-2xl max-w-[800px] mt-4 pb-6 md:pt-4 md:pb-10 2xl:p-10">
                                    <section className="w-full lg:px-1.5 px-3">{children}</section>
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
        </StarknetProvider>
    );
}