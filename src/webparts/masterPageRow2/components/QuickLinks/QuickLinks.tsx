import * as React from 'react'
import "@pnp/sp/webs";
import "@pnp/sp/folders";
import './QuickLinks.scss'
import { getQuickLinkData } from '../../../../Common/SPServices';
import { WebPartContext } from '@microsoft/sp-webpart-base';

export interface IQuickLink{
  data:WebPartContext;
}
const QuickLinks = (props:IQuickLink) => {
  const [quicklinkdata, SetQuickLinkData] = React.useState<any>();
  const getQuick = async () =>{
    let arr:any[] = await getQuickLinkData(props.data);
    SetQuickLinkData(arr);
    console.log(arr);
    console.log("hai am quick link working");

}
React.useEffect(()=>{
getQuick();
},[])
  return (
    <>
      {quicklinkdata?.map((x:any) => {
        return (<div className="row2container__part2__item">
          <div className="linkBody" onClick={()=>window.open(x.Url,"_blank")}>
            <div className="linkIcon"><img src={x.Icon} /></div>
            <div className="linkTitle">{x.Title}</div>
          </div>
        </div>)
      })}
    </>
  )
}

export default QuickLinks