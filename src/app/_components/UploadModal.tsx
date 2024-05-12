"use client";

import { useRouter } from 'next/navigation';
import CloseIcon from '../../../public/assets/ico_close.svg'

export default function UploadModal() {
    const router = useRouter();
    const onClickClose = () => {
        router.back();
    };

    return (
        <div className='w-[73%] h-fit p-[25px] bg-white rounded-[15px] flex flex-col'>
            <header className='flex justify-between items-center border-b border-[#d9d9d9] pb-[15px]'>
                <h3 className='text-[22px] font-semibold ' >동영상 업로드</h3>
                <CloseIcon onClick={onClickClose} className='cursor-pointer' />
            </header>
        </div >
    )
}

