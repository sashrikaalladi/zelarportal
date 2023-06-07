import * as React from "react";
import "../LandingPage/LandingPageRow1.module.scss";
import MonthSection from "./MonthSection";
import { BirthdaysMonth } from "./models/BirthdayMonths";
import { getBirthdayData } from "../../../../Common/SPServices";
import { IAnnouncements } from "../Announcements/Announcements";
interface IBirthdaysPerMonthProps {
  data: Array<BirthdaysMonth>;
}
const Birthday = (props:IAnnouncements) => {
  const [birthdaydata, setBirthdayData] = React.useState<any>();
  console.log(props)
  console.log("hai this is birthday function");   
  const getDataBirthday = async () =>{
    console.log(props.context);
    console.log(await getBirthdayData(props.context))
    let b = await getBirthdayData(props)
    console.log("this is get birthday");
    console.log("working");
    console.log(b);
    setBirthdayData(b);
}
React.useEffect(()=>{
getDataBirthday();
},[])
  console.log("after comments");
  return (

    <section>
      {birthdaydata?.map((month: any, index: number) => (
        <MonthSection key={month.title} data={month} index={index} />
        
      ))}
       
    </section>
  )
}
export { IBirthdaysPerMonthProps, Birthday };
