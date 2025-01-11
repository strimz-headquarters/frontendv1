import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { LuArrowDownToLine } from "react-icons/lu"

const StepTwoForm = ({ handleClick }: { handleClick: () => void }) => {
    return (
        <main className="w-full flex flex-col gap-5">
            <div className="w-full flex flex-col">
                <h5 className="uppercase font-[400] font-poppins text-[#58556A] text-xs">Step 2 of 2</h5>
                <h2 className="font-[600] font-sora capitalize text-xl text-strimzPrimary">Add Recipients</h2>
                <p className="font-[400] font-poppins text-sm text-[#58556A]">Enter recipient details to complete</p>
            </div>

            {/* table section */}
            <div className="w-full flex flex-col gap-4">
                {/* csv import modal */}
                <div className="w-full justify-end">
                    <Dialog>
                        <DialogTrigger asChild>
                            <button type="button" className='w-[120px] h-[32px] flex justify-center items-center gap-2 bg-[#F9FAFB] rounded-[8px] border border-[#E5E7EB] shadow-[0px_-2px_4px_0px_#00000014_inset] cursor-pointer text-[12px] font-[500] font-poppins text-strimzPrimary capitalize'>
                                <LuArrowDownToLine className="w-4 h-4" />
                                Import CSV
                            </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle className="flex items-center gap-2">
                                    <span className="w-[40px] h-[40px] flex justify-center items-center bg-white border-[0.5px] border-[#E5E7EB] shadow-[0px_1px_2px_0px_#00000014] rounded-full">
                                        <LuArrowDownToLine className="w-4 h-4 text-strimzPrimary" />
                                    </span>
                                    <span className="text-black font-[500] font-sora capitalize text-sm ">Import .CSV file</span>
                                </DialogTitle>
                            </DialogHeader>
                            <div className=""></div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </main>
    )
}

export default StepTwoForm