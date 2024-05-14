'use client'
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import UserProfileTag from '@/app/_components/UserProfileTag';

import MoreIcon from "@public/assets/ico_more.svg"
import LikeIcon from "@public/assets/ico_prechall.svg"
import CommentIcon from "@public/assets/ico_comment.svg"
import ReportIcon from "@public/assets/ico_report.svg"

import { contentData } from "@/app/MOCKDATA";
import { formatCounts } from '@/app/_components/ContentItem';

export default function SingleContent() {
    const data = contentData[0];
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    // 컨텐츠 소유자 구분 임시 로그인 계정 아이디와 소유자가 같으면 true
    const [isOwner, setIsOnwer] = useState(false);

    // 설명 텍스트의 표시 상태를 토글
    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    //좋아요 버튼 테스트 토글
    const toggleLike = () => {
        setIsLiked(!isLiked);
    }

    return (
        <article className="flex justify-between gap-[30px] h-full">
            <div className="w-1/3 h-full pb-[20px] flex flex-col justify-between">
                <header className="w-full">
                    <h4 className="mb-[5px] text-[28px] font-bold">#{data.keyword}</h4>
                    <h5 className="mb-[10px] text-[24px] font-semibold">{data.title}</h5>
                    <p className={`w-[95%] text-[14px] font-medium cursor-pointer leading-tight
                        ${!isExpanded ? 'line-clamp-1 overflow-hidden' : ''}`}
                        onClick={toggleDescription}
                        dangerouslySetInnerHTML={{ __html: data.description as string }} />
                </header>

                <footer className="w-full flex items-center justify-between">
                    <UserProfileTag username={data.author} />
                    {isOwner && <MoreIcon className="cursor-pointer" />}
                </footer>
            </div>

            {/* 영상 들어가는 부분 */}
            <div className="flex-[1] h-full flex gap-[20px]">
                <div className="rounded-[20px] overflow-hidden">
                    {/* 영상으로 교체 */}
                    <img
                        className="w-auto h-full"
                        src="/assets/sample_thumbnail.png" alt="dd" />
                </div>

                {/* 버튼박스 */}
                <div className='h-full flex flex-col gap-[10px] justify-end'>
                    <div className='flex flex-col items-center gap-[5px]'>
                        <Link className='flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#F1F1F2]'
                            href={''}
                            onClick={toggleLike}
                        >
                            <LikeIcon fill={isLiked ? '#FFA801' : '#333'} />
                        </Link>
                        <span className='font-montserrat text-[12px] text-[#777] font-semibold'>{formatCounts(data.likes)}</span>
                    </div>
                    <div className='flex flex-col items-center gap-[5px]'>
                        <Link className='flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#F1F1F2]' href={'/'}>
                            <CommentIcon />
                        </Link>
                        <span className='font-montserrat text-[12px] text-[#777] font-semibold'>{formatCounts(30)}</span>
                    </div>
                    <div className='flex flex-col items-center gap-[5px]'>
                        <Link className='flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#F1F1F2]' href={'/'}>
                            <ReportIcon />
                        </Link>
                    </div>
                </div>

            </div>
        </article>
    )
}

