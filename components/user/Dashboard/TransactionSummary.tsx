import Link from "next/link"


const TransactionSummary = () => {
    return (
        <section className="w-full flex flex-col gap-3 mt-4">
            <div className="w-full flex justify-between items-center px-1.5">
                <h4 className="text-strimzPrimary font-[500] font-poppins text-sm capitalize">Transaction History</h4>
                <Link href="/user/transaction-history" className="underline text-[#58556A] text-sm font-[400] font-poppins">See all</Link>
            </div>

            {/* no data */}
            <div className="w-full h-[245px] bg-[#F9FAFB] rounded-[12px] flex justify-center items-center">
                <div className="w-full flex flex-col justify-center gap-1 items-center">
                    <h4 className="text-strimzPrimary font-[500] font-poppins text-sm">Not transactions yet</h4>
                    <p className="text-[#58556A] md:w-[50%] w-[80%] text-center text-xs font-[400] font-poppins">Your transaction history will appear here once you start streaming payments.</p>
                </div>
            </div>
        </section>
    )
}

export default TransactionSummary