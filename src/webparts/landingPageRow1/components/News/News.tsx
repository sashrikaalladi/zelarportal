import * as React from 'react'
import "../LandingPage/Landing.scss"
import Marquee from "react-fast-marquee";
import { getNewsData } from '../../../../Common/SPServices';
import { IAnnouncements } from '../Announcements/Announcements';
const News = (props:IAnnouncements) => {
  const [newsdata, setNewsData] = React.useState<any>();
  const getDataNews = async () =>{
    let b = await getNewsData(props.context)
    setNewsData(b);
}
React.useEffect(()=>{
getDataNews();
},[])
  return (
    <div className='rowMain'>
      <div className='row2'>
        <h2>News</h2>
      </div>
      <Marquee speed={10} direction='up' className='marqueetag'>
      <div className='row1'>
        {newsdata?.map((x: any) => {
          return (
            <div className='row5'>
            <ul className='bullets'>
            <li>{x.Title}</li>
            </ul>
            </div>
          )
        })}
      </div>
      </Marquee>
    </div>
  )
}
export default News;







