import { getSP } from './../webparts/landingPageRow1/components/pnpConfig';
import { ICamlQuery } from "@pnp/sp/lists";
import { SPFI } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp";
import { WebPartContext } from '@microsoft/sp-webpart-base'
import { SharePointService } from '../webparts/landingPageRow1/components/Birthdays/Utils/SharepointService';
import { BirthdaysMonth } from '../webparts/landingPageRow1/components/Birthdays/models/BirthdayMonths';

// import { WebPartContext } from '@microsoft/sp-webpart-base';
//import * as React from "react";

const caml: ICamlQuery = {
    ViewXml:
      "<View><ViewFields><FieldRef Name='Title' /></ViewFields><RowLimit>5</RowLimit></View>",
  }
  const caml3: ICamlQuery = {
    ViewXml:
      "<View><ViewFields><FieldRef Name='Title'/><FieldRef Name='image'/></ViewFields></View>",
  };
  interface getAnnouncementsData{
    context:WebPartContext
  }
export const getAnnouncementsData = async (props:any) => {

    let _sp: SPFI = getSP(props);
    console.log(_sp);
    try{
      console.log("hellotry");
    const list = await _sp.web.lists.getByTitle("Announcements");
    console.log("hello2");
    var r = await list.getItemsByCAMLQuery(caml);
    console.log(r);
   return r;
    }
    catch(error){
        console.log(error);
    }
  };

  export const getNewsData = async (props:any) => {
    let _sp: SPFI = getSP(props);
    try{
      console.log('hai this is getnewsdata spservice')
    const list1 = await _sp.web.lists.getByTitle("News");
    var r2 = await list1.getItemsByCAMLQuery(caml);
    return(r2);
    }
    catch(error){
      console.log(error);
    }
  };

  export const getBirthdayData = async (props:any) => {
    let _sp: SPFI = getSP(props);
    try{
    const sharePointService = new SharePointService(_sp);
    const birthdays: Array<BirthdaysMonth> =
      await sharePointService.GetBirthdays();
     return birthdays;
    }
    catch(error){
      console.log(error);
    }
  };

 
  let arrobj: any[] = [];

export const getQuickLinkData = async (props:any) => {
  let _sp: SPFI = getSP(props);
  try{
  const qllist = await _sp.web.lists.getByTitle("Quick Links");
  var qlistitems = await qllist.items();
  qlistitems.map((x) => {
    let imgobj = x.Icon;
    let jobj = JSON.parse(imgobj);
    arrobj.push({ Title: x.Title, Icon: window.location.protocol + "//" + window.location.host + jobj.serverRelativeUrl, Url: x.URL.Url })
  })
  console.log("hai I am SP this is working");
  return(arrobj);
}
catch(error){
  console.log(error);
}
}

let arr: any[] = [];
export const getImageData = async (props:any) => {
    let _sp: SPFI = getSP(props);
    try {
    const list = await _sp.web.lists.getByTitle("ImageSlider");
    var r = await list.getItemsByCAMLQuery(caml3);
    r.map((x: any) => {
      let y = JSON.parse(x.image)
      console.log(y.serverUrl + y.serverRelativeUrl)
      arr.push(y.serverUrl + y.serverRelativeUrl)
      console.log(arr);
    })
    console.log("hai I am imagelsider working in spservices")
    return(arr);
  }
  catch (error) {
    console.log(error);
  }
};


export const getUserData = async (props:any) => {
  let _sp: SPFI = getSP(props);
  let DepID:any;
  let RepMan:any;
  try{
  const list = await _sp.web.lists.getByTitle("EmployeeDetails");
  let user = await _sp.web.currentUser();
  console.log(user);
  let userobj = user.Email
  var r = await list.items.filter("Name/EMail eq '" + userobj + "'")()
  var y = await list.items.select('ReportingManager/EMail').expand('ReportingManager').filter("Name/EMail eq '" + userobj + "'")()
  y.map((x) => {
    console.log(x.ReportingManager.EMail)
    RepMan=x.ReportingManager.EMail
  })
  r.map((x) => {
    console.log(x.DepartmentId)
    DepID=x.DepartmentId
  })
  return{RepMan,DepID}
}
catch(error){
  console.log(error);
}
}
