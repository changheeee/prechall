'use client'

import { useState, useEffect } from 'react';
import ContentItem from "./ContentItem";
import { contentData as allContentData } from "../MOCKDATA";
import { useInView } from 'react-intersection-observer';
import Transition from './Transition';

type Props = {
    keyword?: string,
}

export default function FullContentList({ keyword }: Props) {
    const [contentData, setContentData] = useState(allContentData.slice(0, 20));
    const [page, setPage] = useState(1);
    const { ref, inView } = useInView({
        threshold: 1.0
    });

    useEffect(() => {
        if (inView) {
            loadMore();
        }
    }, [inView]);

    const loadMore = () => {
        const newPage = page + 1;
        const newContent = allContentData.slice(0, newPage * 20);
        setContentData(newContent);
        setPage(newPage);
    }

    return (
        <Transition>
            <ul className="mt-[20px] flex flex-wrap gap-x-[10px] gap-y-[10px] xl:justify-between 2xl:justify-start">
                {contentData.map((item, i) => (
                    <li key={i} className="w-auto">
                        <ContentItem item={item} rank={i} isKeyword={false} isRank={i < 10} />
                    </li>
                ))}
                <li ref={ref} className="w-full h-10"></li>
            </ul>
        </Transition>
    );
}
