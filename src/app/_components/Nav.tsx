'use client'
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import Logo from '../../../public/assets/logo_light.svg';
import UploadIco from '../../../public/assets/ico_upload.svg';
import HomeIcon from '../../../public/assets/ico_home.svg'


export default function Nav() {
    const [showMyPage, setShowMyPage] = useState(false);
    const [showNews, setShowNews] = useState(false);
    const pathName = usePathname();

    const getLinkStyle = (path: string) => {
        return pathName === path
            ? 'w-full flex gap-[5px] items-center mb-2 py-2 pl-[10px] rounded-md bg-[#FFE6B8] text-[#FFA801] font-semibold'
            : 'w-full mb-2 py-2 pl-[10px] rounded-md bg-white text-[#333] font-semibold';
    };

    const getMenuLinkStyle = (path: string) => {
        return pathName === path
            ? 'py-3 font-bold text-[#FFA801]'
            : 'py-3 font-medium text-[#333]';
    };

    const toggleMyPage = () => setShowMyPage(!showMyPage);
    const toggleNews = () => setShowNews(!showNews);

    return (
        <header>
            <section className='flex w-full py-7 mr-11 border-b border-gray-200 items-center'>
                <div className='w-[260px] pl-4'>
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
                <div className='flex items-center w-[calc(100%-260px)] pr-11 justify-between'>
                    <div>
                        <input type="text" />
                        <button>검색</button>
                    </div>
                    <div className='flex items-center gap-7'>
                        <Link
                            className='flex items-center gap-2 border border-gray-200 rounded-md px-[15px] py-[6px] text-[16px] leading-[1]'
                            href="/upload"><UploadIco />업로드</Link>
                        <Link href="/login">로그인</Link>
                    </div>
                </div>
            </section>

            {/* 좌측 메뉴 */}
            <div className='w-[260px] h-[calc(100vh-80px)] flex flex-col pt-[25px] border-r border-gray-200'>
                <Link className={getLinkStyle('/')} href="/">
                    <HomeIcon fill={pathName === '/' ? '#FFA801' : '#333'} />
                    홈</Link>
                <Link className={getLinkStyle('/trend')} href="/trend">트렌드</Link>
                <div className={`w-full mb-2 py-2 pl-[10px] rounded-md  text-[#333] font-semibold cursor-pointer`} onClick={toggleMyPage}>
                    마이페이지
                </div>
                {showMyPage && (
                    <div className='flex flex-col pl-[38px] bg-[#f9f9f9]'>
                        <Link className={getMenuLinkStyle('/profile')} href="/profile">프로필</Link>
                        <Link className={getMenuLinkStyle('/history')} href="/history">시청기록</Link>
                    </div>
                )}
                <div className={`w-full mb-2 py-2 pl-[10px] rounded-md $ text-[#333] font-semibold cursor-pointer`} onClick={toggleNews}>
                    새소식
                </div>
                {showNews && (
                    <div className='transition-all duration-500'>
                        <Link href="/notice">공지사항</Link>
                        <Link href="/event">이벤트</Link>
                    </div>
                )}
                <Link className={getLinkStyle('/support')} href="/support">고객지원</Link>
            </div>
        </header>
    );
}
