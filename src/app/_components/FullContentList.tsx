'use client'

import ContentItem from "./ContentItem"
import { contentData } from "../MOCKDATA"
// 키워드를 props로 받아서 컨텐츠 조회하여 데이터 렌더링?

type Props = {
    keyword: string,
}

export default function FullContentList({ keyword }: Props) {
    //키워드 api에 넣어서 데이터 뽑고 해당항목 렌더링하기

    return (
        <ul className="mt-[20px] flex flex-wrap gap-x-[10px] gap-y-[10px] 
        xl:justify-between 2xl:justify-start">
            {contentData.map((item, i) => (
                <li key={i} className="w-auto">
                    <ContentItem item={item} rank={i} isKeyword={false} isRank={i < 10} />
                </li>
            ))}
        </ul>
    )
}

