import NewsItem from './NewsItem'
import LatestNewsItem from '../general/LatestNewsItem'
import OtherNewsItem from '../general/OtherNewsItem'

export default function ListNewsCategorized({ list, t }) {
    return (
        <div className='max-md:pr-[2.6vw]'>
            <div className='mt-[3.5vw] grid grid-cols-3 grid-rows-[16.875vw_16.875vw] gap-[1.5vw] max-md:grid-cols-1 max-md:grid-rows-[68.5vw_44.2vw_44.2vw] max-md:gap-[4.2vw]'>
                <div className='col-span-2 row-span-2 max-md:col-span-1 max-md:row-span-1'>
                    <LatestNewsItem
                        newsItem={list[0]}
                        id={list[0].id}
                        t={t}
                    ></LatestNewsItem>
                </div>
                {list?.slice(1, 3)?.map((news) => (
                    <div key={news.id}>
                        <OtherNewsItem newsOtherItem={news} />
                    </div>
                ))}
            </div>
            <div className='mt-[5.25vw] grid grid-cols-3 gap-[1.5vw] max-md:grid-cols-1 max-md:gap-[4.2vw]'>
                {list?.slice(3, 12)?.map((item) => (
                    <NewsItem
                        key={item.id}
                        newsOtherItem={item}
                    />
                ))}
            </div>
        </div>
    )
}
