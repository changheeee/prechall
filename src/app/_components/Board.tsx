'use clent'
import Table from "./Table"
import Pagination from "./Pagenation"
type Props = {
    title: string
    boardType: 'notice' | 'event' | 'support'
    isAdmin: boolean
}

export default function Board({ title, boardType, isAdmin }: Props) {
    return (
        <div className="">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="my-4 mb-16">
                <Table boardType={boardType} />
                {boardType === 'notice' && (
                    <button className="float-right rounded-lg mt-4 px-3 py-1.5 bg-[#ccc] hover:bg-[#FFA801] text-white text-sm font-medium">
                        글쓰기
                    </button>
                )}
            </div>

            <Pagination maxPageCount={10} />


        </div>
    )
}

