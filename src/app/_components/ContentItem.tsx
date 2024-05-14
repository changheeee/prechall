'use client'

import { ContentItemProps } from "../_types/contentType";
import Image from "next/image";
import ViewsIcon from "../../../public/assets/ico_views.svg"
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
    rank: number,
    item: ContentItemProps
    isKeyword?: boolean
    isRank?: boolean
}

// 숫자를 K, M 단위로 변환하는 함수
export function formatCounts(count: number) {
    if (count >= 1000000) {
        return (count / 1000000).toFixed(0) + 'M'; // 백만 단위
    } else if (count >= 1000) {
        return (count / 1000).toFixed(0) + 'K'; // 천 단위
    }
    return count.toString(); // 1000 미만은 그대로 출력
}

export default function ContentItem({ rank, item, isKeyword, isRank }: Props) {
    const keywordStyle = 'text-[16px] text-white text-opacity-95 font-semibold hover:text-[17px]'
    const spanStyle = 'flex items-center gap-[5px] text-[16px] text-white text-opacity-95 font-semibold'
    const defaultStrongStyle = 'font-montserrat italic text-[35px] [text-shadow:0px_2px_4px_var(--tw-shadow-color)] shadow-black/20'

    // rank에 따른 스타일 결정
    const rankStyle = (rank: number) => {
        switch (rank) {
            case 0:
                return `${defaultStrongStyle} text-[#FFA801]`;
            case 1:
                return `${defaultStrongStyle} text-[#D5D5D5]`;
            case 2:
                return `${defaultStrongStyle} text-[#CC8600]`;
            default:
                return `${defaultStrongStyle} text-white`;
        }
    }

    const router = useRouter();
    const clickContent = () => {
        router.push('/user/' + item.author + '/video/' + item.id)
    }
    // href = {`/user/${item.author}/video/${item.id}/`


    return (
        <div
            onClickCapture={clickContent}
            className="relative p-[15px] flex flex-col justify-between
            w-[214px] h-[380px] 
            border border-[#eee] 
            rounded-[18px] overflow-hidden cursor-pointer">
            {/* 상단 */}
            <div>
                {isKeyword &&
                    <Link href={`/keyword/${item.keyword}`}>
                        <span className={keywordStyle}>#{item.keyword}</span>
                    </Link>}
            </div>
            {/* 하단 */}
            <div className="flex items-end justify-between">
                <div className="flex flex-col gap-[6px]">
                    <span className={spanStyle}>@{item.author}</span>
                    <span className={spanStyle}>
                        <ViewsIcon fill={'#fff'} />
                        {formatCounts(item.views)}</span>
                </div>
                {isRank && <strong className={rankStyle(rank)}>{rank + 1}</strong>}
            </div>
            {/* 썸네일 */}
            <Image
                src="/assets/sample_thumbnail.png" //개별 아이템 경로로 변경
                alt="썸네일"
                layout="fill"
                objectFit="cover"  // 이미지가 div를 꽉 채우도록 설정
                className="absolute -z-20"
            />
            {/* 그라디언트 커버 */}
            <div
                className='absolute -z-10 w-full h-full top-0 left-0 bg-gradient-to-b from-black/55 via-transparent to-black/50 opacity-50'>
            </div>
        </div>
    )
}

