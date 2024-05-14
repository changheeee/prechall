"use client";

import CloseButton from "./CloseButton";

export default function UploadModal() {

    return (
        <div className='w-[73%] h-fit p-[25px] bg-white rounded-[15px] flex flex-col'>
            <header className='flex justify-between items-center border-b border-[#d9d9d9] pb-[15px]'>
                <h3 className='text-[22px] font-semibold ' >동영상 업로드</h3>
                <CloseButton />
            </header>
        </div >
    )
}

