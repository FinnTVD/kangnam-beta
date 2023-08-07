import NewsItem from "./NewsItem";
import LatestNewsItem from "../general/LatestNewsItem";
import OtherNewsItem from "../general/OtherNewsItem";

export default function ListNewsCategorized({list}) {
    const listArrSlice1 = list.slice(1,3);
    const listArrSlice2 = list.slice(3,9);
    console.log(listArrSlice2)
    return(
        <div>
            <div className='mt-[3.5vw] grid grid-cols-3 grid-rows-[16.875vw_16.875vw] gap-[1.5vw]'>
                <div className='col-span-2 row-span-2'>
                    <LatestNewsItem newsItem={list[0]} id={list[0].id} key={list[0].id}></LatestNewsItem>
                </div>
                {listArrSlice1?.map((news) => 
                    <div key={news.id}>
                        <OtherNewsItem newsOtherItem={news} id={news.id} key={news.id}></OtherNewsItem>
                    </div>
                )}
            </div>
            <div className="mt-[5.25vw] grid grid-cols-3 gap-[1.5vw]">
                {listArrSlice2?.map((item) => 
                    <NewsItem newsOtherItem={item}></NewsItem>
                )}
            </div>
        </div>
    )
}