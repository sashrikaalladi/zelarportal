import { WebPartContext } from "@microsoft/sp-webpart-base";
// import { BirthdaysMonth } from "../Birthdays/models/BirthdayMonths";

export interface ILandingPageRow1Props {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  context:WebPartContext;
}
