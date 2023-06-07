import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp";
import { BirthdaysMonth } from '../webparts/landingPageRow1/components/Birthdays/models/BirthdayMonths';
export declare const getAnnouncementsData: (props: any) => Promise<any>;
export declare const getNewsData: (props: any) => Promise<any>;
export declare const getBirthdayData: (props: any) => Promise<BirthdaysMonth[]>;
export declare const getQuickLinkData: (props: any) => Promise<any[]>;
export declare const getImageData: (props: any) => Promise<any[]>;
export declare const getUserData: (props: any) => Promise<{
    RepMan: any;
    DepID: any;
}>;
//# sourceMappingURL=SPServices.d.ts.map