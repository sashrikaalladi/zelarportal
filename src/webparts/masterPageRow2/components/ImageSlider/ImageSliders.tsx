import * as React from 'react'
import "../MasterPageRow2.scss";
import "./ImageSlider.scss"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "@pnp/sp/profiles";
import "@pnp/sp/lists";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
import { getImageData } from '../../../../Common/SPServices';
import { IQuickLink } from '../QuickLinks/QuickLinks';

// export interface ISliderProps {
//   data: any
// }
const ImageSliders = (props: IQuickLink) => {
  const [loading, setLoading] = React.useState(false);
  const [imagedata, setImageData] = React.useState<any>();
  const getImage = async () =>{
    let arr:any[] = await getImageData(props.data);
    setImageData(arr);
    console.log(props.data);
    console.log(arr);
    console.log("hai i am imageslider in tsx working");
}
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    getImage();
  }, [])
  if (loading) {
    return (
      <div className='whiteScreen'>
      </div>)
  }
  else {
    return (
      <>
        <Slide>
          {imagedata && imagedata?.map((x: any) => {
            return (<div className='each-slide'>
              <img src={x} /></div>)
          })}
        </Slide>
      </>
    )
  }
}
export default ImageSliders;