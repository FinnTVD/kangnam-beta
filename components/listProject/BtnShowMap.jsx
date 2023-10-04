'use client'

import { useState } from 'react'
import MapV4 from '../home/MapV2/MapV4'

export default function BtnShowMap() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${
                    isOpen ? 'py-[3.6vw] px-[4.67vw] gap-x-[1.87vw]' : 'gap-x-[1.07vw] py-[3.47vw] px-[6.27vw]'
                } fixed bottom-[10vw] left-1/2 -translate-x-1/2 w-fit flex items-center z-50 bg-logo rounded-[10vw]`}
            >
                <span className='text-white max-md:title-mb14-400-150 -tracking-[0.28px] max-lg:title-tl14 whitespace-nowrap'>
                    {isOpen ? 'Danh sách' : 'Bản đồ'}
                </span>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='21'
                    height='20'
                    viewBox='0 0 21 20'
                    fill='none'
                    className={`${isOpen ? 'hidden' : ''}`}
                >
                    <path
                        d='M10.5019 9.79199C10.9034 9.79199 11.2465 9.64901 11.5312 9.36305C11.816 9.07711 11.9583 8.73336 11.9583 8.3318C11.9583 7.93026 11.8154 7.58713 11.5294 7.30241C11.2434 7.01769 10.8997 6.87533 10.4981 6.87533C10.0966 6.87533 9.75347 7.0183 9.46875 7.30426C9.18403 7.59021 9.04167 7.93396 9.04167 8.33551C9.04167 8.73705 9.18464 9.08019 9.4706 9.36491C9.75655 9.64963 10.1003 9.79199 10.5019 9.79199ZM10.5 18.3337C8.26389 16.4309 6.59375 14.6635 5.48958 13.0316C4.38542 11.3996 3.83333 9.88921 3.83333 8.50033C3.83333 6.41699 4.50347 4.75727 5.84375 3.52116C7.18403 2.28505 8.73611 1.66699 10.5 1.66699C12.2639 1.66699 13.816 2.28505 15.1562 3.52116C16.4965 4.75727 17.1667 6.41699 17.1667 8.50033C17.1667 9.88921 16.6146 11.3996 15.5104 13.0316C14.4062 14.6635 12.7361 16.4309 10.5 18.3337Z'
                        fill='white'
                    />
                    <circle
                        cx='10.5'
                        cy='8.33301'
                        r='2'
                        fill='#D6A279'
                    />
                </svg>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='20'
                    viewBox='0 0 22 20'
                    fill='none'
                    className={`${isOpen ? '' : 'hidden'}`}
                >
                    <path
                        d='M19.039 16.3999H7.82619C7.71632 16.3999 7.60752 16.3782 7.50601 16.3362C7.40449 16.2941 7.31226 16.2325 7.23456 16.1548C7.15687 16.0771 7.09524 15.9849 7.05319 15.8834C7.01114 15.7819 6.9895 15.6731 6.9895 15.5632C6.9895 15.4533 7.01114 15.3445 7.05319 15.243C7.09524 15.1415 7.15687 15.0492 7.23456 14.9716C7.31226 14.8939 7.40449 14.8322 7.50601 14.7902C7.60752 14.7481 7.71632 14.7265 7.82619 14.7265H19.0387C19.2606 14.7265 19.4734 14.8146 19.6304 14.9715C19.7873 15.1283 19.8755 15.3411 19.8755 15.563C19.8756 15.785 19.7875 15.9978 19.6306 16.1547C19.4737 16.3117 19.2609 16.3998 19.039 16.3999ZM19.039 11.148H7.82619C7.60429 11.148 7.39147 11.0598 7.23456 10.9029C7.07765 10.746 6.9895 10.5332 6.9895 10.3113C6.9895 10.0894 7.07765 9.87655 7.23456 9.71964C7.39147 9.56273 7.60429 9.47458 7.82619 9.47458H19.0387C19.2606 9.47454 19.4734 9.56265 19.6304 9.71954C19.7873 9.87642 19.8755 10.0892 19.8755 10.3111C19.8756 10.533 19.7875 10.7459 19.6306 10.9028C19.4737 11.0597 19.2609 11.1479 19.039 11.148ZM19.039 5.89604H7.82619C7.71632 5.89604 7.60752 5.8744 7.50601 5.83235C7.40449 5.7903 7.31226 5.72867 7.23456 5.65098C7.15687 5.57329 7.09524 5.48105 7.05319 5.37954C7.01114 5.27802 6.9895 5.16922 6.9895 5.05935C6.9895 4.94947 7.01114 4.84067 7.05319 4.73916C7.09524 4.63765 7.15687 4.54541 7.23456 4.46772C7.31226 4.39002 7.40449 4.32839 7.50601 4.28635C7.60752 4.2443 7.71632 4.22266 7.82619 4.22266H19.0387C19.2606 4.22262 19.4734 4.31074 19.6304 4.46762C19.7873 4.6245 19.8755 4.8373 19.8755 5.05921C19.8756 5.28111 19.7875 5.49394 19.6306 5.65088C19.4737 5.80782 19.2609 5.896 19.039 5.89604Z'
                        fill='white'
                    />
                    <path
                        d='M4.10073 6.24736C4.72132 6.24736 5.22441 5.74427 5.22441 5.12368C5.22441 4.50309 4.72132 4 4.10073 4C3.48014 4 2.97705 4.50309 2.97705 5.12368C2.97705 5.74427 3.48014 6.24736 4.10073 6.24736Z'
                        fill='white'
                    />
                    <path
                        d='M4.10073 11.1429C4.72132 11.1429 5.22441 10.6398 5.22441 10.0192C5.22441 9.3986 4.72132 8.89551 4.10073 8.89551C3.48014 8.89551 2.97705 9.3986 2.97705 10.0192C2.97705 10.6398 3.48014 11.1429 4.10073 11.1429Z'
                        fill='white'
                    />
                    <path
                        d='M4.10073 16.0384C4.72132 16.0384 5.22441 15.5353 5.22441 14.9147C5.22441 14.2941 4.72132 13.791 4.10073 13.791C3.48014 13.791 2.97705 14.2941 2.97705 14.9147C2.97705 15.5353 3.48014 16.0384 4.10073 16.0384Z'
                        fill='white'
                    />
                </svg>
            </button>
            <div
                id='box-list-project'
                className={`${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-[110%] opacity-0'
                } fixed bottom-0 left-0 z-40 w-full h-[72vh] transition-all duration-500 max-md:w-full bg-white rounded-lg p-[2vw]`}
            >
                <MapV4 />
            </div>
            <div
                onClick={() => setIsOpen(false)}
                className={`${
                    isOpen ? 'block opacity-100' : 'hidden opacity-0'
                } fixed top-0 left-0 z-30 w-full h-screen transition-all duration-500 max-md:w-full bg-black/20 rounded-lg p-[0.5vw]`}
            ></div>
        </>
    )
}
