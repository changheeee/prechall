'use client'

import { useState } from 'react'
import LeftArrow from '@public/assets/leftArrow.svg'
import LeftArrow2 from '@public/assets/leftArrow2.svg'
import RightArrow from '@public/assets/rightArrow.svg'
import RightArrow2 from '@public/assets/rightArrow2.svg'

type Props = {
    maxPageCount: number
}

export default function Pagination({ maxPageCount = 10 }: Props) {
    const [currentPage, setCurrentPage] = useState(1)

    const handlePrev = () => {
        if (currentPage === 1) return
        setCurrentPage(currentPage - 1)
    }
    const handleMorePrev = () => {
        const _currentPage = currentPage - 10
        if (_currentPage < 1) {
            return setCurrentPage(1)
        }
        setCurrentPage(_currentPage)
    }
    const handleNext = () => {
        if (currentPage === maxPageCount) return
        setCurrentPage(currentPage + 1)
    }
    const handleMoreNext = () => {
        const _currentPage = currentPage + 10
        if (_currentPage > maxPageCount) {
            return setCurrentPage(maxPageCount)
        }
        setCurrentPage(_currentPage)
    }

    const pageArray = Array.from({ length: maxPageCount }, (_, i) => i + 1)
    const commonButtonClasses = "cursor-pointer inline-flex justify-center items-center w-6 h-6 border border-gray-300 rounded"

    return (
        <div className="flex justify-center items-center">
            <div className="flex gap-2">
                <span
                    className={`${commonButtonClasses} ${currentPage === 1 ? 'bg-gray-200' : ''}`}
                    onClick={handleMorePrev}
                >
                    <LeftArrow2 />
                </span>
                <span
                    className={`${commonButtonClasses} ${currentPage === 1 ? 'bg-gray-200' : ''}`}
                    onClick={handlePrev}
                >
                    <LeftArrow fill='#d9d9d9' />
                </span>
            </div>
            <ul className="flex mx-1">
                {pageArray.map((page, index) => (
                    <li
                        key={index}
                        className={`cursor-pointer px-3 ${currentPage === page ? 'text-[#FFA801]' : ''}`}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </li>
                ))}
            </ul>
            <div className="flex gap-2">
                <span
                    className={`${commonButtonClasses} ${currentPage === maxPageCount ? 'bg-gray-200' : ''}`}
                    onClick={handleNext}
                >
                    <RightArrow fill='#d9d9d9' />
                </span>
                <span
                    className={`${commonButtonClasses} ${currentPage === maxPageCount ? 'bg-gray-200' : ''}`}
                    onClick={handleMoreNext}
                >
                    <RightArrow2 />
                </span>
            </div>
        </div>
    )
}
