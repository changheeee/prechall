import CloseButton from "@/app/_components/CloseButton"

export default function ClearHistoryModal() {
    return (
        <div className='w-[500px] h-fit p-[25px] bg-white rounded-[15px] flex flex-col'>
            <div className='flex justify-between'>
                <h3 className='text-[22px] font-semibold ' >{`기록 삭제`}</h3>
                <CloseButton />
            </div>
        </div>
    )
}

