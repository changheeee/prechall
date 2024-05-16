'use client'

import { useRouter } from 'next/navigation'
import { noticeTableData, communityTableData } from './_mockData/mockData'

type Props = {
    boardType: 'notice' | 'event' | 'support'
}

export default function Table({ boardType }: Props) {
    const router = useRouter();
    const tableHeader = ['번호', '제목', '작성자', '날짜', '조회']
    const TableData = boardType === 'notice' ? noticeTableData : communityTableData
    console.log('테이블데이터: ', TableData)

    return (
        <table className="w-full border-t border-gray-800  text-center break-keep">
            <thead className="bg-gray-100">
                <tr>
                    {tableHeader.map((columnName, index) => (
                        <th key={index} className="py-3.5 text-sm font-bold text-gray-800">{columnName}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {TableData.map(({ id, title, author, date, views, isNotice }, index) => (
                    <tr key={index} className='border-b border-b-[#d9d9d9]'>
                        <td>
                            <span className={`inline-block rounded-[4px] px-[8px] py-[4px] bg-[#FFA801] text-white text-xs font-semibold`}>
                                {isNotice ? '알림' : id}
                            </span>
                        </td>
                        <td
                            className="text-left text-black text-base font-semibold cursor-pointer"
                            onClick={() => router.push(`/notice/detail/${id}`)}
                        >
                            {title}
                        </td>
                        <td className="text-gray-700 font-semibold">{author}</td>
                        <td className="py-5 text-sm font-medium text-gray-600">{date}</td>
                        <td className="py-5 text-sm font-medium text-gray-600">{views}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
