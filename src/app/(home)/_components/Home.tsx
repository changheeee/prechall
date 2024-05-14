import MainCarousel from "./MainCarousel";
import HotIcon from "../../../../public/assets/ico_hot.svg";
import ContentList from "@/app/_components/ContentList";

export const titleStyle = "mt-[60px] mb-[15px] flex items-center gap-1 text-[24px] font-bold ";

export default function Home() {
    return (
        <div className='flex flex-col w-full h-auto'>
            <MainCarousel />
            <h4 className={titleStyle}><HotIcon />실시간 급상승</h4>
            <ContentList isKeword={true} isRank={true} />
            <h4 className={titleStyle}># {'키워드'}</h4>
            <ContentList isKeword={true} isRank={true} />
        </div>
    );
}
