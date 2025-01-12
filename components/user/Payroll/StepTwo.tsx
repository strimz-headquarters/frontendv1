'use client'
import { useState } from "react";
import { formatFileSize, useCSVReader } from "react-papaparse";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { LuArrowDownToLine } from "react-icons/lu"
import Link from "next/link";

type CVSDataType = {
    name: string;
    address: `0x${string}`;
    amount: number;
}

const StepTwoForm = ({ handleClick }: { handleClick: () => void }) => {
    const [csvData, setCsvData] = useState<CVSDataType[]>([]);
    const [error, setError] = useState<string | null>(null);

    const { CSVReader } = useCSVReader();
    const [zoneHover, setZoneHover] = useState(false);

    const validateCSVData = (data: any[]): boolean => {
        if (!data || data.length === 0) {
            setError("The uploaded file is empty. Please check the file.");
            return false;
        }

        for (const row of data) {
            // Check if name exists and is a string
            if (typeof row.name !== "string" || row.name.trim() === "") {
                setError("Invalid data: 'name' field must be a non-empty string.");
                return false;
            }

            // Check if amount exists and is a valid number
            const amount = Number(row.amount);
            if (isNaN(amount) || amount <= 0) {
                setError("Invalid data: 'amount' must be a positive number.");
                return false;
            }

            // Optional: Add address validation if required
            if (row.address && !row.address.startsWith("0x")) {
                setError("Invalid data: 'address' must start with '0x'.");
                return false;
            }
        }

        setError(null);
        return true;
    };

    const handleSubmit = () => {
        console.log(csvData);
    }

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
                <div className="w-full flex justify-end">
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
                            <div className="w-full">
                                {/* Download Sample CSV */}
                                <Link href="/sample.csv" download className="text-xs font-poppins font-[400] text-[#58556A] underline">
                                    Download Sample CSV
                                </Link>
                                <CSVReader
                                    config={{ header: true, skipEmptyLines: true }}
                                    onUploadAccepted={(results: any) => {
                                        const data = results.data;
                                        if (validateCSVData(data)) {
                                            setCsvData(data);
                                            setError(null);
                                        } else {
                                            setCsvData([]);
                                        }
                                        setZoneHover(false);
                                    }}
                                    onDragOver={(event: DragEvent) => {
                                        event.preventDefault();
                                        setZoneHover(true);
                                    }}
                                    onDragLeave={(event: DragEvent) => {
                                        event.preventDefault();
                                        setZoneHover(false);
                                    }}
                                >
                                    {({
                                        getRootProps,
                                        acceptedFile,
                                        ProgressBar,
                                        getRemoveFileProps,
                                    }: any) => (
                                        <div
                                            {...getRootProps()}
                                            className={`flex h-[200px] mt-2 flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 transition-all duration-300 ${zoneHover ? "border-strimzBrandAccent bg-[#F9FAFB]" : "border-[#E5E7EB] bg-[#F9FAFB]"
                                                }`}
                                        >
                                            {acceptedFile ? (
                                                <>
                                                    <div className="flex flex-col items-center w-full">
                                                        <div className="flex flex-col items-center">
                                                            <span className="text-strimzPrimary font-poppins font-[400] text-sm">
                                                                {formatFileSize(acceptedFile.size)}
                                                            </span>
                                                            <span className="text-strimzPrimary text-sm font-poppins font-medium">
                                                                {acceptedFile.name}
                                                            </span>
                                                        </div>
                                                        <div className="w-full mt-2">
                                                            <ProgressBar />
                                                        </div>
                                                        <button
                                                            {...getRemoveFileProps()}
                                                            className="mt-2 px-3 py-1 text-xs font-medium text-white bg-rose-500 rounded hover:bg-rose-600"
                                                        >
                                                            Remove File
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="flex flex-col gap-1.5 items-center cursor-pointer ">
                                                    <LuArrowDownToLine className="w-6 h-6 text-[#58556A]" />
                                                    <h3 className="capitalize text-base font-sora cursor-pointer font-[500] text-[#58556A]">
                                                        Import CSV File
                                                    </h3>

                                                </div>
                                            )}
                                        </div>
                                    )}
                                </CSVReader>
                                {error && (
                                    <p className="text-red-600 text-sm mt-3">{error}</p>
                                )}
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Table */}
                <div className="w-full"></div>


                {/* buttons */}
                <div className="w-full justify-end flex gap-4 mt-3">
                    {/* button */}
                    <button onClick={handleClick} type="button" className="w-[97px] h-[40px] flex justify-center items-center bg-[#F9FAFB] rounded-[8px] border border-[#E5E7EB] shadow-[0px_-2px_4px_0px_#00000014_inset] cursor-pointer text-[14px] font-[500] font-poppins text-strimzPrimary">Back</button>

                    <button onClick={handleSubmit} type="button" className="w-[97px] h-[40px] flex justify-center items-center rounded-[8px] bg-strimzBrandAccent text-[#FFFFFF] font-poppins font-[500] shadow-joinWaitlistBtnShadow text-shadow text-[14px] capitalize">Submit</button>
                </div>
            </div>
        </main>
    )
}

export default StepTwoForm