import * as React from "react";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp";
import News from "../News/News";
import Announcements from "../Announcements/Announcements";
import { Birthday } from "../Birthdays";
var LandingPageRow1 = function (props) {
    return (React.createElement("div", { className: "mainContainer" },
        React.createElement("div", { className: "Containers" },
            React.createElement("div", { className: "announcments" },
                React.createElement(Announcements, { context: props.context })),
            React.createElement("div", null,
                React.createElement(Birthday, { context: props.context })),
            React.createElement("div", { className: "news" },
                React.createElement(News, { context: props.context })))));
};
export default LandingPageRow1;
//# sourceMappingURL=LandingPageRow1.js.map