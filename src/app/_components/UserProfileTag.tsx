import Link from "next/link"
import Image from "next/image"

// 임시로 ?
type Props = {
    avatar?: string,
    username?: string,
    trend?: boolean
}

export default function UserProfileTag({ avatar, username, trend }: Props) {
    return (
        <Link href={`/@${username}`}
            className="flex items-center gap-[5px]">
            <div className={`relative rounded-full overflow-hidden ${trend ? 'w-[30px] h-[30px]' : 'w-[50px] h-[50px]'}`}>
                <Image
                    src="/assets/sample_profile_img.png" //개별 이미지 경로로 변경
                    alt="썸네일"
                    layout="fill"
                    objectFit="cover"  // 이미지가 div를 꽉 채우도록 설정
                />
            </div>
            <span className={`font-semibold ${trend ? 'text-[18px]' : 'text-[16px]'}`}>@{username}</span>
        </Link>
    )
}

