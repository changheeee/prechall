import Link from "next/link"
import Image from "next/image"

// 임시로 ?
type Props = {
    avatar?: string,
    username?: string
}

export default function UserProfileTag({ avatar, username }: Props) {
    return (
        <Link href={`/@${username}`}
            className="flex items-center gap-[5px]">
            <div className="relative rounded-full overflow-hidden w-[50px] h-[50px]">
                <Image
                    src="/assets/sample_profile_img.png" //개별 이미지 경로로 변경
                    alt="썸네일"
                    layout="fill"
                    objectFit="cover"  // 이미지가 div를 꽉 채우도록 설정
                    className="absolute -z-20"
                />
            </div>
            <span className="font-semibold">@{username}</span>
        </Link>
    )
}

