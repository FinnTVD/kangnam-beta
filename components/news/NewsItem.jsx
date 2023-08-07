import Image from "next/image"

export default function NewsItem({newsOtherItem}){
    return(
    <div className="group cursor-pointer w-full h-full bg-white rounded-2xl backdrop-blur-2xl p-[1.5vw]" style={{boxShadow: '6px 0px 39.76811599731445px 0px rgba(0, 0, 0, 0.05)'}}>
            {/* <div className="flex h-[11vw] items-center"> */}
                <div className="w-full h-[16.25vw] relative rounded-lg overflow-hidden">
                    <Image src={newsOtherItem.picture} fill alt={`news${newsOtherItem.id}`} className="group-hover:scale-110 transition duration-300 absolute top-0 left-0 w-full h-full object-cover overflow-hidden"/>
                </div>
                <span className="bg-nau-nhat title12-400-150 mt-[1vw] py-[0.3125vw] px-[1.125vw] bg-opacity-20 rounded-[100px] text-nau-nhat">{newsOtherItem.category}</span>
                <div className="w-full mt-[0.2625vw]] flex flex-col">
                    <h2 className="text-den-2 title20-700-150 group-hover:text-nau-nhat transition duration-300">{newsOtherItem.title}</h2>
                    <span className="text-den-2 title14-400-160 mt-[0.5vw] line-clamp-3">{newsOtherItem.content}</span>
                </div>
            {/* </div> */}
            <div className="flex mt-[0.5vw]">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" className="w-[1.3125vw] h-auto">
                    <g opacity="0.7">
                        <path d="M7.00098 1.75V4.375" stroke="#656263" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.999 1.75V4.375" stroke="#656263" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.06348 7.95508H17.9385" stroke="#656263" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.375 7.4375V14.875C18.375 17.5 17.0625 19.25 14 19.25H7C3.9375 19.25 2.625 17.5 2.625 14.875V7.4375C2.625 4.8125 3.9375 3.0625 7 3.0625H14C17.0625 3.0625 18.375 4.8125 18.375 7.4375Z" stroke="#656263" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.7315 11.9863H13.7394" stroke="#656263" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.7315 14.6113H13.7394" stroke="#656263" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.4952 11.9863H10.5031" stroke="#656263" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.4952 14.6113H10.5031" stroke="#656263" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.25691 11.9863H7.26477" stroke="#656263" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7.25691 14.6113H7.26477" stroke="#656263" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>
                <span className="text-[#656263] title14-400-150 ml-[0.375vw] opacity-70">{newsOtherItem.date}</span>
            </div>
        </div>
    )
}