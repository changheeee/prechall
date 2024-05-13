//콘텐츠 기본 리스트 아이템
//키워드, @아이디, 조회수, 랭킹표시, 

import { ContentItemProps } from "../_types/contentType";
import Image from "next/image";
import ViewsIcon from "../../../public/assets/ico_views.svg"

type Props = {
    rank: number,
    item: ContentItemProps
    isKeyword?: boolean
    isRank?: boolean
}

export default function ContentItem({ rank, item, isKeyword, isRank }: Props) {

    // 숫자를 K, M 단위로 변환하는 함수
    function formatViews(views: number) {
        if (views >= 1000000) {
            return (views / 1000000).toFixed(1) + 'M'; // 백만 단위
        } else if (views >= 1000) {
            return (views / 1000).toFixed(1) + 'K'; // 천 단위
        }
        return views.toString(); // 1000 미만은 그대로 출력
    }

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

    return (
        <div className="relative p-[15px] flex flex-col justify-between
        w-[214px] h-[380px] 
        border border-[#eee] 
        rounded-[18px] overflow-hidden">
            {/* 상단 */}
            <header>
                {isKeyword && <span className={spanStyle}>#{item.keyword}</span>}
            </header>
            {/* 하단 */}
            <footer className="flex items-end justify-between">
                <div className="flex flex-col gap-[6px]">
                    <span className={spanStyle}>@{item.author}</span>
                    <span className={spanStyle}>
                        <ViewsIcon />
                        {formatViews(item.views)}</span>
                </div>
                {isRank && <strong className={rankStyle(rank)}>{rank + 1}</strong>}
            </footer>
            {/* 썸네일 */}
            <Image
                src="/assets/sample_thumbnail.png" //개별 아이템 경로로 변경
                alt="썸네일"
                layout="fill"
                objectFit="cover"  // 이미지가 div를 꽉 채우도록 설정
                className="absolute -z-20"
            />
            {/* 그라디언트 커버 */}
            <div className='absolute -z-10 w-full h-full top-0 left-0 bg-gradient-to-b from-black/55 via-transparent to-black/50 opacity-50'></div>
        </div>
    )
}

