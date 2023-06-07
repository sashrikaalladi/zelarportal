import "@pnp/sp/webs";
import "@pnp/sp/folders";
import './QuickLinks.scss';
import { WebPartContext } from '@microsoft/sp-webpart-base';
export interface IQuickLink {
    data: WebPartContext;
}
declare const QuickLinks: (props: IQuickLink) => JSX.Element;
export default QuickLinks;
//# sourceMappingURL=QuickLinks.d.ts.map