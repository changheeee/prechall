"use client";

import CloseButton from "./CloseButton";

export default function LoginModal() {

    return (
        <div className='w-[500px] h-fit p-[25px] bg-white rounded-[15px] flex flex-col'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <h3 className='text-[22px] font-semibold ' >로그인</h3>
                    <h3 className='text-[22px] font-semibold ' >회원가입</h3>
                </div>
                <CloseButton />
            </div>
            <span>ddd</span>
        </div>
    )
}

