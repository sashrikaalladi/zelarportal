import * as React from 'react'
import "../LandingPage/Landing.scss"
import Marquee from 'react-fast-marquee'
import { getAnnouncementsData } from '../../../../Common/SPServices'
import { WebPartContext } from '@microsoft/sp-webpart-base'
export interface IAnnouncements{
    context:WebPartContext;
}
const Announcements = (props:IAnnouncements) => {
      const [announcementData,setAnnouncementData]=React.useState([]);
      const getData = async () =>{
        let d = await getAnnouncementsData(props.context)
        setAnnouncementData(d)
    }
    React.useEffect(()=>{
    getData();
},[])
    return (
        <div className='rowMain'>
            <div className='row2'>
                <h2>Announcements</h2>
            </div>
            <Marquee speed={10} direction='up' className='marqueetag'>
            <div className='row1'>   
                {announcementData?.map((x: any) => {
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
export default Announcements;

















