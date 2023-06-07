import * as React from "react";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp";
import { ILandingPageRow1Props } from "./ILandingPageRow1Props";
import News from "../News/News";
import Announcements from "../Announcements/Announcements";
import { Birthday } from "../Birthdays";
const LandingPageRow1 = (props: ILandingPageRow1Props) => {
  return (
    <div className="mainContainer">
      <div className="Containers" >
        <div className="announcments">
          <Announcements context={props.context} />
        </div>
         <div>
          <Birthday context={props.context} />
        </div> 
          <div className="news"> 
          <News context={props.context} />
          
        </div>
      </div>
    </div>
  );
};
export default LandingPageRow1;
