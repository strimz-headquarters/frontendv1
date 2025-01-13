import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const StrimzSubscriptions = () => {
    return (
        <section className="w-full flex flex-col">
            <div className="w-full flex flex-col">
                <h3 className="font-[600] font-sora text-lg">Subscriptions</h3>
                <p className="text-[#58556A] capitalize text-xs font-[400] font-poppins">Pay and automate your subscriptions</p>
            </div>

            <main className="w-full mt-4">
                <Tabs defaultValue="all" className="w-full">
                    <TabsList className="w-auto bg-[#F9FAFB] justify-start ">
                        <TabsTrigger className="px-3" value="all">All</TabsTrigger>
                        <TabsTrigger className="px-3 py-2" value="Airtime">Airtime</TabsTrigger>
                        <TabsTrigger className="px-3 py-2" value="Data">Data</TabsTrigger>
                        <TabsTrigger className="px-3 py-2" value="CableTV">Cable TV</TabsTrigger>
                        <TabsTrigger className="px-3 py-2" value="Electricity">Electricity</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" className="mt-8 w-full">

                    </TabsContent>
                    <TabsContent value="Airtime" className="mt-8 w-full">

                    </TabsContent>
                    <TabsContent value="Data" className="mt-8 w-full">

                    </TabsContent>
                    <TabsContent value="CableTV" className="mt-8 w-full">

                    </TabsContent>
                    <TabsContent value="Electricity" className="mt-8 w-full">

                    </TabsContent>
                </Tabs>
            </main>
        </section>
    )
}

export default StrimzSubscriptions