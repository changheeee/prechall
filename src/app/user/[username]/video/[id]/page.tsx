import SingleContent from "@/app/_components/SingleContent";
import { contentData } from "@/app/MOCKDATA";

export default function page() {
    return (
        <SingleContent data={contentData[0]} />
    )
}