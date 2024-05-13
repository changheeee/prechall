'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Keyword() {
    const pathName = usePathname();
    const [keyword, setKeyword] = useState('');
    const titleStyle = "mb-[15px] flex items-center gap-1 text-[24px] font-bold ";

    useEffect(() => {
        // URL에서 '/keyword/' 이후의 부분을 추출
        const parts = pathName.split('/keyword/');
        if (parts.length > 1) {
            setKeyword(decodeURIComponent(parts[1]));
        }
    }, [pathName]); // pathName이 변경될 때마다 useEffect 실행

    return (
        <div>
            <h3 className={titleStyle}> #{keyword}</h3>
        </div>
    );
}