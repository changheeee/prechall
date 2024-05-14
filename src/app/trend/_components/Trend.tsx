
import { titleStyle } from "@/app/(home)/_components/Home";
import ContentList from "@/app/_components/ContentList";
import RankDashboard from "./RankDashboard";


export default function Trend() {
    return (
        <>
            <RankDashboard />
            <h4 className={titleStyle}>#키워드</h4>
            <ContentList isKeword={false} isRank={true} />
        </>
    )
}

