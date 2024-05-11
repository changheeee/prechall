'use client'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/assets/logo_light.svg'
import UploadIco from '../../../public/assets/ico_upload.svg'
export default function Nav() {
    return (
        <header>
            <section className='flex w-full py-7 mr-11 border-b border-gray-200 items-center'>
                <div className='w-[260px] pl-4 border-r border-red-100'>
                    <Link href="/">
                        <Image src={Logo} alt='PreChall로고' />
                    </Link>
                </div>
                <div className='flex items-center w-[calc(100%-260px)] pr-11 flex justify-between'>
                    <div>
                        <input type="text" />
                        <button>검색</button>
                    </div>
                    <div className='flex items-center gap-7'>
                        <Link
                            className='flex gap-2 border border-gray-200 rounded-md px-[15px] py-[6px] text-[16px] leading-[1]'
                            href="upload"><Image src={UploadIco} alt='업로드 아이콘' />업로드</Link>
                        <Link href="login">로그인</Link>
                    </div>
                </div>
            </section>
            <ul className='w-[260px] h-[calc(100vh-80px)] flex flex-col px-[5px] border-r border-gray-200'>
                <li><Link href="/">홈</Link></li>
                <li><Link href="/trend">트렌드</Link></li>
                <li>
                    <div>마이페이지</div>
                    <Link href="/profile">프로필</Link>
                    <Link href="/history">시청기록</Link></li>
                <li>
                    <div>새소식</div>
                    <Link href="/profile">프로필</Link>
                    <Link href="/history">시청기록</Link>
                </li>
                <li><Link href="/support">고객지원</Link></li>
                {/* <h1 className='font-montserrat italic font-bold'>Trends</h1> */}
            </ul>


        </header>
    )
}
