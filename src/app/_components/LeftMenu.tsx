'use client'

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import HomeIcon from '../../../public/assets/ico_home.svg'
import TrendIcon from '../../../public/assets/ico_trend.svg'
import MyPageIcon from '../../../public/assets/ico_mypage.svg'
import NoticeIcon from '../../../public/assets/ico_notice.svg'
import SupportIcon from '../../../public/assets/ico_support.svg'
import ArrowUpIcon from '../../../public/assets/ico_arrow_up.svg'
import ArrowDownIcon from '../../../public/assets/ico_arrow_down.svg'

export default function LeftMenu() {
    const [showMyPage, setShowMyPage] = useState(false);
    const [showNews, setShowNews] = useState(false);
    const pathName = usePathname();

    const getLinkStyle = (path: string) => {
        return pathName === path
            ? 'w-[calc(100%-10px)] flex gap-[5px] items-center mb-2 py-2 pl-[10px] rounded-md bg-[#FFF1D6] text-[#FFA801] font-semibold'
            : 'w-[calc(100%-10px)] flex gap-[5px] items-center mb-2 py-2 pl-[10px] rounded-md bg-white text-[#333] font-semibold';
    };
    const defaultMenuStyle = 'w-[calc(100%-10px)] flex items-center justify-between mb-2 py-2 pl-[10px] rounded-md bg-white text-[#333] font-semibold cursor-pointer'
    const defaultSubMenuStyle = 'w-full flex flex-col mb-[9px] pl-[38px] bg-[#f9f9f9] text-[15px]'

    const getMenuLinkStyle = (path: string) => {
        return pathName === path
            ? 'py-3 font-bold text-[#FFA801]'
            : 'py-3 font-medium text-[#333]';
    };

    const toggleMyPage = () => setShowMyPage(!showMyPage);
    const toggleNews = () => setShowNews(!showNews);

    return (
        <>
            {/* 좌측 메뉴 */}
            < div className='w-[260px] h-[calc(100vh-80px)] flex flex-col items-center pt-[25px] border-r border-gray-200' >
                <Link className={getLinkStyle('/')} href="/">
                    <HomeIcon fill={pathName === '/' ? '#FFA801' : '#333333'} />
                    홈</Link>
                <Link className={getLinkStyle('/trend')} href="/trend">
                    <TrendIcon fill={pathName === '/trend' ? '#FFA801' : '#333333'} />
                    트렌드</Link>

                <div className={defaultMenuStyle} onClick={toggleMyPage}>
                    <span className='flex items-center gap-[5px]'><MyPageIcon />마이페이지</span>
                    {showMyPage ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </div>
                {
                    showMyPage && (
                        <div className={defaultSubMenuStyle}>
                            {/* 유저 @userId는 로컬스토리지나 로그인 정보에서 따오자 */}
                            <Link className={getMenuLinkStyle(`/user/@changheeee`)} href={`/user/@changheeee`}>프로필</Link>
                            <Link className={getMenuLinkStyle('/history')} href="/history">시청기록</Link>
                        </div>
                    )
                }

                <div className={defaultMenuStyle} onClick={toggleNews}>
                    <span className='flex items-center gap-[5px]'><NoticeIcon />새소식</span>
                    {showNews ? <ArrowUpIcon /> : <ArrowDownIcon />}
                </div>
                {
                    showNews && (
                        <div className={defaultSubMenuStyle}>
                            <Link className={getMenuLinkStyle('/notice')} href="/notice">공지사항</Link>
                            <Link className={getMenuLinkStyle('/event')} href="/event">이벤트</Link>
                        </div>
                    )
                }
                <Link className={getLinkStyle('/support')} href="/support">
                    <SupportIcon fill={pathName === '/support' ? '#FFA801' : '#333333'} />
                    고객지원</Link>
            </div >
        </>
    )
}

