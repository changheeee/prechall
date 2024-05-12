"use client";

import { useRouter } from 'next/navigation';

export default function LoginModal() {
    const router = useRouter();
    const onClickClose = () => {
        router.back();
    };

    return (
        <div className='w-[500px] h-fit p-[25px] bg-white rounded-[15px] flex flex-col'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <h4>로그인</h4>
                    <h4>회원가입</h4>
                </div>
                <span onClick={onClickClose}>X</span>
            </div>
            <span>ddd</span>
        </div>
    )
}

