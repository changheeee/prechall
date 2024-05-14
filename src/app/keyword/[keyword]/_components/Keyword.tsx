'use client';

import FullContentList from '@/app/_components/FullContentList';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Keyword() {
    const pathName = usePathname();
    const [keyword, setKeyword] = useState('');
    const [activeSort, setActiveSort] = useState('최신순'); // 활성화된 정렬 버튼을 추적하는 상태

    const titleStyle = "mb-[15px] flex items-center gap-1 text-[24px] font-bold ";

    useEffect(() => {
        // URL에서 '/keyword/' 이후의 부분을 추출
        const parts = pathName.split('/keyword/');
        if (parts.length > 1) {
            setKeyword(decodeURIComponent(parts[1]));
        }
    }, [pathName]); // pathName이 변경될 때마다 useEffect 실행

    // 정렬 버튼 스타일
    const sortButtonStyle = "py-[5px] px-[12px] text-[14px] flex justify-center items-center border rounded-full cursor-pointer";
    const activeStyle = "border-[#FFA801] text-[#FFA800] bg-[#FFE6B8]/50 font-semibold";
    const inactiveStyle = "border-[#CCC] text-[#333] bg-[#FFF] font-medium";

    return (
        <>
            <h3 className={titleStyle}> #{keyword}</h3>

            {/* 정렬 버튼박스 */}
            <div className='flex gap-[7px]'>
                <button
                    className={`${sortButtonStyle} ${activeSort === '최신순' ? activeStyle : inactiveStyle}`}
                    onClick={() => setActiveSort('최신순')}
                >
                    최신순
                </button>
                <button
                    className={`${sortButtonStyle} ${activeSort === '인기순' ? activeStyle : inactiveStyle}`}
                    onClick={() => setActiveSort('인기순')}
                >
                    인기순
                </button>

            </div>
            <FullContentList keyword={keyword} />
        </>
    );
}
