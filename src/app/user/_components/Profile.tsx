'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { formatCounts } from '@/app/_components/ContentItem';

import ViewsIcon from '@public/assets/ico_views.svg'
import PrechallIcon from '@public/assets/ico_prechall.svg'
import GoldMedal from '@public/assets/medal_gold.svg'
import SilverMedal from '@public/assets/medal_silver.svg'
import BronzeMedal from '@public/assets/medal_bronze.svg'
import FullContentList from '@/app/_components/FullContentList';

// URL에서 키워드 추출해서 해당 유저 정보 가져와서 뿌려주기

export default function Profile() {
    const pathName = usePathname();

    const [isOwner, setIsOwner] = useState(true);
    const [userName, setUserName] = useState('')
    const [isExpanded, setIsExpanded] = useState(false);

    // 설명 텍스트의 표시 상태를 토글
    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        // URL에서 '/keyword/' 이후의 부분을 추출
        const parts = pathName.split('/user/');
        if (parts.length > 1) {
            setUserName(decodeURIComponent(parts[1]));
        }
    }, [pathName]); // pathName이 변경될 때마다 useEffect 실행

    const titleStyle = "mt-[50px] mb-[15px] flex items-center gap-1 text-[24px] font-bold ";
    const medalListStyle = "flex items-center gap-[7px]"
    return (
        < >
            {/* 유저 프로필 */}
            <div className='py-[75px] px-[50px] border-b border-[#d9d9d9] flex gap-[35px] justify-between items-center'>
                <div className='relative w-[150px] h-[150px] overflow-hidden rounded-full border border-[#eee]'>
                    <Image src={'/assets/sample_profile_img.png'} fill alt='프로필이미지' />
                </div>
                {/* 유저정보 */}
                <div className='flex flex-1 items-end  justify-between'>
                    <div>
                        <h5 className='text-[18px] font-semibold'>{userName}</h5>
                        {/* <p className={`w-[95%] text-[14px] font-medium cursor-pointer
                        ${!isExpanded ? 'line-clamp-1 overflow-hidden' : ''}`}
                            onClick={toggleDescription}
                            dangerouslySetInnerHTML={{ __html: data.description as string }} /> */}
                        <p className={`font-medium mt-[15px] mb-[25px] cursor-pointer max-w-[200px]
                        ${!isExpanded ? 'line-clamp-1 overflow-hidden' : ''}`}>자기소개 자기소개 자기소개 자기소개 자기소개 </p>
                        <ul className='flex gap-[15px]'>
                            <li className={medalListStyle}>
                                <GoldMedal />
                                <span className='font-semibold text-[14px]'>15</span>
                            </li>
                            <li className={medalListStyle}>
                                <SilverMedal />
                                <span className='font-semibold text-[14px]'>15</span>
                            </li>
                            <li className={medalListStyle}>
                                <BronzeMedal />
                                <span className='font-semibold text-[14px]'>15</span>
                            </li>
                        </ul>
                    </div>
                    {/* 조회수, 포인트 정보 */}
                    <div className='flex flex-col w-fit justify-center gap-[10px]'>
                        <div className='flex items-center gap-[5px]'>
                            <span className=" w-[25px] flex justify-center ">
                                <ViewsIcon fill="#777" className="scale-[1.4]" />
                            </span>
                            <span className='font-montserrat italic font-semibold'>{formatCounts(9999)}</span>
                        </div>
                        <div className='flex items-center gap-[5px]'>
                            <span className=" w-[25px] flex justify-center">
                                <PrechallIcon fill="#777" />
                            </span>
                            <span className='font-montserrat italic font-semibold min-w-[50px]'>{formatCounts(9999)}</span>
                            {isOwner && <Link href={'/i/flow/exchange'} className='ml-[20px] px-[8px] py-[4px] text-[14px] border border-[#d9d9d9] rounded-[5px] font-medium text-[#777]'>교환</Link>}
                        </div>
                    </div>
                </div>
            </div>
            <h3 className={titleStyle}>게시물</h3>
            <FullContentList />

        </>
    )
}

