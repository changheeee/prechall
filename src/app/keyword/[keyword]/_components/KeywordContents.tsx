'use client'
import { useState, useEffect, useCallback } from "react";
import { contentData } from "@/app/MOCKDATA";
import SingleContent from "@/app/_components/SingleContent";
import { useInView } from 'react-intersection-observer';

type Props = {
    keyword: string
    index?: number
}

export default function KeywordContents({ keyword, index }: Props) {
    const filteredData = contentData.filter(item => item.keyword === keyword);
    const [content, setContent] = useState(filteredData.slice(0, 1));
    const [page, setPage] = useState(1);
    const { ref, inView } = useInView({
        threshold: 1.0
    });

    const loadMore = useCallback(() => {
        const newPage = page + 1;
        const newContent = filteredData.slice(0, newPage * 1);
        setContent(newContent);
        setPage(newPage);
    }, [page, filteredData]);

    useEffect(() => {
        if (inView) {
            loadMore();
        }
    }, [inView, loadMore]);

    return (
        <div className="overflow-scroll snap-y snap-mandatory h-full scrollbar-hide">
            {content.map((item, i) => (
                <div ref={ref} className="snap-start w-full h-full mb-[25px]" key={i}>
                    <SingleContent data={item} />
                </div>
            ))}
        </div>
    );
}
