'use client'
import { useState, useRef, useEffect, useCallback } from 'react';
import Image from "next/image";
import Link from "next/link";
import UserProfileTag from '@/app/_components/UserProfileTag';

import MoreIcon from "@public/assets/ico_more.svg"
import LikeIcon from "@public/assets/ico_prechall.svg"
import CommentIcon from "@public/assets/ico_comment.svg"
import ReportIcon from "@public/assets/ico_report.svg"
import MuteIcon from "@public/assets/ico_mute.svg"
import UnMuteIcon from "@public/assets/ico_unmute.svg"
import ViewsIcon from "@public/assets/ico_views.svg"

import { formatCounts } from '@/app/_components/ContentItem';
import { ContentItemProps } from "@/app/_types/contentType";
import { useInView } from 'react-intersection-observer';

type SingleContentProps = {
    keyword?: string,
    data: ContentItemProps,
}

export default function SingleContent({ keyword, data }: SingleContentProps) {
    const content = data;
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const requestRef = useRef<number | null>(null);
    const [isOwner, setIsOnwer] = useState(false); // 컨텐츠 소유자 구분 임시 로그인 계정 아이디와 소유자가 같으면 true

    const { ref, inView } = useInView({
        threshold: 0.5
    });

    useEffect(() => {
        if (videoRef.current) {
            if (inView) {
                videoRef.current.play().catch(error => {
                    console.error('Failed to play the video:', error);
                });
                setIsPaused(false);
            } else {
                videoRef.current.pause();
                setIsPaused(true);
            }
        }
    }, [inView]);

    // 설명 텍스트의 표시 상태를 토글
    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    // 좋아요 버튼 테스트 토글
    const toggleLike = () => {
        setIsLiked(!isLiked);
    }

    // 영상 재생/멈춤 토글
    const toggleVideoPlay = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play().catch(error => {
                    console.error('Failed to play the video:', error);
                });
                setIsPaused(false);
            } else {
                videoRef.current.pause();
                setIsPaused(true);
            }
        }
    }

    // 음소거 토글
    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    }

    const updateProgress = useCallback(() => {
        if (videoRef.current) {
            const currentTime = videoRef.current.currentTime;
            const duration = videoRef.current.duration;
            if (duration > 0) {
                setProgress((currentTime / duration) * 100);
            }
            requestRef.current = requestAnimationFrame(updateProgress);
        }
    }, [videoRef]);

    useEffect(() => {
        if (videoRef.current) {
            setIsPaused(videoRef.current.paused);
            requestRef.current = requestAnimationFrame(updateProgress);
        }

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [updateProgress]);

    return (
        <article className="flex justify-between gap-[30px] h-full " ref={ref}>
            <div className="w-1/3 h-full pb-[20px] flex flex-col justify-between">
                <header className="w-full">
                    <h4 className="mb-[5px] text-[28px] font-bold">#{content.keyword}</h4>
                    <h5 className="mb-[10px] text-[24px] font-semibold">{content.title}</h5>
                    <p className={`w-[95%] text-[14px] font-medium cursor-pointer leading-tight
                        ${!isExpanded ? 'line-clamp-1 overflow-hidden' : ''}`}
                        onClick={toggleDescription}
                        dangerouslySetInnerHTML={{ __html: content.description as string }} />
                </header>

                <footer className="w-full flex items-center justify-between">
                    <UserProfileTag username={content.author} />
                    {isOwner && <MoreIcon className="cursor-pointer" />}
                </footer>
            </div>

            {/* 영상 들어가는 부분 */}
            <div className="flex-[1] h-full flex gap-[20px] ">
                <div className="relative rounded-[20px] overflow-hidden flex items-center justify-center aspect-[9/16] w-auto h-full group">
                    {/* 조회수,음소거 버튼 */}
                    <div className='absolute left-0 top-[20px] px-[20px] w-full flex justify-between z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <span className='flex items-center gap-[5px] text-white opacity-90 font-semibold'>
                            <ViewsIcon fill={'white'} /> {formatCounts(content.views)}
                        </span>
                        <button onClickCapture={toggleMute}>
                            {isMuted ? <UnMuteIcon /> : <MuteIcon />}
                        </button>
                    </div>

                    <video
                        src={content.video_src} // 비디오 파일 경로
                        className="w-auto h-full object-cover"
                        autoPlay
                        muted={isMuted}
                        loop
                        playsInline
                        controls={false}
                        ref={videoRef}
                        onClick={toggleVideoPlay}
                    ></video>

                    <div className='lengthBar absolute w-full flex h-[10px] left-0 bottom-0 z-10 '>
                        <span className='w-full h-full bg-[#eee]'></span>
                        <span className='absolute left-0 h-full bg-[#FFB321]' style={{ width: `${progress}%` }}></span>
                    </div>
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
                        <span className='font-montserrat text-[12px] text-[#777] font-semibold'>{formatCounts(content.likes)}</span>
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
