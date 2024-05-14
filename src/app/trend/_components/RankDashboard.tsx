'use client'
import { rankData } from "@/app/MOCKDATA"
import { formatCounts } from "@/app/_components/ContentItem";
import UserProfileTag from "@/app/_components/UserProfileTag";
import ViewsIcon from '@public/assets/ico_views.svg'
import PrechallIcon from '@public/assets/ico_prechall.svg'
import Transition from "@/app/_components/Transition";


export default function RankDashboard() {

    const spanStyle = 'flex items-center gap-[5px] text-[18px] text-[#333] text-opacity-95 font-bold'
    const defaultStrongStyle = 'font-montserrat italic text-[24px] [text-shadow:0px_1px_1px_var(--tw-shadow-color)] shadow-black/20 '

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
                return `${defaultStrongStyle} text-[#777]`;
        }
    }

    const rankListStyle = 'h-[70px] px-[25px] flex items-center justify-between bg-gray-50 rounded-[12px]'


    return (
        <>
            {/* 랭킹 대시보드 */}
            < article className="flex gap-5 w-full p-6 border border-gray-200 rounded-lg bg-white drop-shadow-dashboard" >
                <div className="w-1/2">
                    <h3 className="font-montserrat font-extrabold italic text-[28px]">
                        #KEWORD
                    </h3>
                    <ul className="flex flex-col gap-[10px] w-full mt-[10px]">
                        {rankData.keywords.map((item, index) => (
                            <Transition key={index}>
                                <li
                                    className={rankListStyle}>
                                    <div className="flex items-center gap-[25px]">
                                        <strong className={rankStyle(index)}>
                                            {index + 1}
                                        </strong>
                                        <span className={spanStyle}>
                                            #{rankData.keywords[index]}
                                        </span>
                                    </div>
                                    <span className="flex items-center gap-[5px] font-montserrat font-semibold italic text-[18px]" >
                                        <ViewsIcon fill={'#333'} />
                                        {formatCounts(100000000)}
                                    </span>
                                </li>
                            </Transition>
                        ))}
                    </ul>
                </div>
                <div className="w-1/2">
                    <h3 className="font-montserrat font-extrabold italic text-[28px]">
                        #CREATOR
                    </h3>
                    <ul className="flex flex-col gap-[10px] w-full mt-[10px]">
                        {rankData.creators.map((item, index) => (
                            <Transition key={index}>
                                <li
                                    className={rankListStyle}>
                                    <div className="flex items-center gap-[25px]">
                                        <strong className={rankStyle(index)}>
                                            {index + 1}
                                        </strong>
                                        <UserProfileTag username={item} trend={true} />
                                    </div>
                                    <span className="flex items-center gap-[5px] font-montserrat font-semibold italic text-[18px]" >
                                        <PrechallIcon fill={'#FFA801'} />
                                        {formatCounts(999)}
                                    </span>
                                </li>
                            </Transition>
                        ))}
                    </ul>
                </div>
            </article >

        </>
    )
}

