import CloseButton from "@/app/_components/CloseButton";

export default function ExchangeModal() {
    return (
        <div className='w-[500px] h-fit p-[25px] bg-white rounded-[15px] flex flex-col'>
            <div className='flex justify-between'>
                <h3 className='text-[22px] font-semibold ' >{'포인트 -> 리워드 교환'}</h3>
                <CloseButton />
            </div>
        </div>
    )
}

