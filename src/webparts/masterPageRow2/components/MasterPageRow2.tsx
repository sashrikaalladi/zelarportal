import * as React from "react";
// import { ICamlQuery } from "@pnp/sp/lists";
//import { SPFI } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp";
import "@pnp/sp/site-users/web";
import { IMasterPageRow2Props } from "./IMasterPageRow2Props";
import ImageSliders from "./ImageSlider/ImageSliders";
import Feedback from "./Feedback/Feedback";
import QuickLinks from "./QuickLinks/QuickLinks";

export interface IListitems {
  Title: string;
  Icon: string;
  url: string;

}
const MasterPageRow2 = (props: IMasterPageRow2Props) => {
  return (
    <>
      <div className="mainContainer" >
        <div className="Containers1">
          <div className="row2container__part1">
            <ImageSliders data={props.context} />
          </div>
          <div className="row2container__part2">
            <div className="row2container__part2_quicklinks">
            <QuickLinks data={props.context} />
            </div>
            <Feedback context={props.context}  />
          </div>
        </div>
        
      </div>
    </>

  );
};
export default MasterPageRow2;