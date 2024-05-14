"use client";

import { useRouter } from 'next/navigation';
import CloseIcon from '@public/assets/ico_close.svg'

export default function CloseButton() {
    const router = useRouter();
    const onClickClose = () => {
        router.back();
    };

    return (
        <CloseIcon onClick={onClickClose} className='cursor-pointer' />
    )
}

