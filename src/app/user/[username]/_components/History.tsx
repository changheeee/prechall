import Link from "next/link"
import FullContentList from "@/app/_components/FullContentList"

export default function History() {
    return (
        <div>
            <div className="flex justify-between items-end pb-[12px] border-b border-[#d9d9d9]">
                <h3 className="text-[28px] font-bold">시청기록</h3>
                <Link href={`/i/flow/clear_history`}
                    className="text-[14px] text-[#9BB7FF] font-medium hover:font-semibold hover:text-[#6f98ff] ">
                    기록 삭제
                </Link>
            </div>
            <FullContentList />
        </div>
    )
}

