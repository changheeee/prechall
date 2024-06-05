'use client'

import KeywordContents from "../_components/KeywordContents";
import { usePathname } from 'next/navigation';

export default function Page() {
    const pathName = usePathname();
    const parts = pathName.split('/keyword/');
    const keyword = parts.length > 1 ? decodeURIComponent(parts[1].split('/')[0]) : '';

    return (
        <>
            <KeywordContents keyword={keyword} index={3} />
        </>
    );
}
