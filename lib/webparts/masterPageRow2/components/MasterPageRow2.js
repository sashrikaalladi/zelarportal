import * as React from "react";
// import { ICamlQuery } from "@pnp/sp/lists";
//import { SPFI } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp";
import "@pnp/sp/site-users/web";
import ImageSliders from "./ImageSlider/ImageSliders";
import Feedback from "./Feedback/Feedback";
import QuickLinks from "./QuickLinks/QuickLinks";
var MasterPageRow2 = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "mainContainer" },
            React.createElement("div", { className: "Containers1" },
                React.createElement("div", { className: "row2container__part1" },
                    React.createElement(ImageSliders, { data: props.context })),
                React.createElement("div", { className: "row2container__part2" },
                    React.createElement("div", { className: "row2container__part2_quicklinks" },
                        React.createElement(QuickLinks, { data: props.context })),
                    React.createElement(Feedback, { context: props.context }))))));
};
export default MasterPageRow2;
//# sourceMappingURL=MasterPageRow2.js.map