var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import PollElement from './PollElement';
import { getSP } from '../../pnpConfig';
import "@pnp/sp/site-users/web";
//import { AiFillPlusCircle } from "react-icons/ai";
import PollForm from './PollForm';
import './Poll.scss';
import { PermissionKind } from "@pnp/sp/security";
var OpinionPoll = function (props) {
    var _a = React.useState([]), pollData = _a[0], setPolldata = _a[1];
    var _b = React.useState(true), formmode = _b[0], setFormmode = _b[1];
    // const[createformmode,setCreateformmode] = React.useState<boolean>(false);
    // const[canCreate, setcanCreate] = React.useState<boolean>(false)
    var createformmode = React.useState(false)[0];
    var _c = React.useState(false), setcanCreate = _c[1];
    var arr;
    var caml = {
        ViewXml: "<View><Query><FieldRef Name='ID' /><FieldRef Name='QuestionId' /><FieldRef Name='QuestionName' /><FieldRef Name='Choices' /><Where><Eq><FieldRef Name='Active'/><Value Type='Boolean'>1</Value></Eq></Where></Query></View>",
    };
    var checkPrem = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _sp, prems;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _sp = getSP(props.context);
                    return [4 /*yield*/, _sp.web.lists.getByTitle("OpinionPole").getCurrentUserEffectivePermissions()];
                case 1:
                    prems = _a.sent();
                    if (_sp.web.hasPermissions(prems, PermissionKind.AddListItems) && _sp.web.hasPermissions(prems, PermissionKind.EditListItems)) {
                        console.log("can create new form");
                        setcanCreate(true);
                    }
                    else {
                        console.log("cannot create new form");
                        setcanCreate(false);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var getData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _sp, list, r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _sp = getSP(props.context);
                    return [4 /*yield*/, _sp.web.lists.getByTitle("OpinionPole")];
                case 1:
                    list = _a.sent();
                    return [4 /*yield*/, list.getItemsByCAMLQuery(caml)];
                case 2:
                    r = _a.sent();
                    return [4 /*yield*/, r];
                case 3:
                    arr = _a.sent();
                    console.log(r);
                    setPolldata(arr);
                    if (arr.length > 0) {
                        setFormmode(false);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        getData();
        checkPrem();
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'rowMain3' },
            React.createElement("div", { className: 'row31' },
                React.createElement("h2", null, "Opinion Poll")),
            React.createElement("div", { className: 'row32' },
                createformmode && React.createElement(PollForm, { context: props.context }),
                console.log(formmode),
                pollData && (pollData === null || pollData === void 0 ? void 0 : pollData.map(function (x) {
                    return (React.createElement(PollElement, { data: x, context: props.context }));
                })),
                console.log(pollData)))));
};
export default OpinionPoll;
//# sourceMappingURL=index.js.map