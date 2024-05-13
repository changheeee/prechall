import Link from 'next/link';
import Logo from '../../../public/assets/logo_light.svg';
import UploadIcon from '../../../public/assets/ico_upload.svg';
import SearchIcon from '../../../public/assets/ico_search.svg';


export default function Nav() {
    return (
        <div className='flex w-full py-[20px] mr-11 border-b border-gray-200 items-center'>
            {/* 좌측 로고영역 */}
            <div className='w-[260px] pl-4'>
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            {/* 우측영역 */}
            <div className='flex items-center w-[calc(100%-260px)] pl-[50px] pr-11 justify-between'>
                {/* 검색인풋 */}
                <div className='flex items-center w-1/2 max-w-[500px] pl-[20px] pr-[15px] py-[10px] bg-[#f5f5f5] rounded-full'>
                    <input type="text" placeholder='검색'
                        className='flex-1 bg-transparent outline-none	'
                    />
                    <span className=' h-5 border-l border-[#bbbbbb] pl-1'></span>
                    <button type='submit'><SearchIcon /></button>
                </div>

                {/* 업로드,로그인 */}
                <div className='flex items-center gap-7 font-semibold'>
                    <Link
                        className='flex items-center gap-2 border border-gray-200 rounded-md px-[15px] py-[6px] text-[16px] leading-[1] 
                        hover:bg-gray-100 '
                        href="/i/flow/upload"><UploadIcon />업로드</Link>
                    <Link href="/i/flow/login">로그인</Link>
                </div>
            </div>
        </div>
    );
}
