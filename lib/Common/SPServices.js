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
import { getSP } from './../webparts/landingPageRow1/components/pnpConfig';
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp";
import { SharePointService } from '../webparts/landingPageRow1/components/Birthdays/Utils/SharepointService';
// import { WebPartContext } from '@microsoft/sp-webpart-base';
//import * as React from "react";
var caml = {
    ViewXml: "<View><ViewFields><FieldRef Name='Title' /></ViewFields><RowLimit>5</RowLimit></View>",
};
var caml3 = {
    ViewXml: "<View><ViewFields><FieldRef Name='Title'/><FieldRef Name='image'/></ViewFields></View>",
};
export var getAnnouncementsData = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var _sp, list, r, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _sp = getSP(props);
                console.log(_sp);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                console.log("hellotry");
                return [4 /*yield*/, _sp.web.lists.getByTitle("Announcements")];
            case 2:
                list = _a.sent();
                console.log("hello2");
                return [4 /*yield*/, list.getItemsByCAMLQuery(caml)];
            case 3:
                r = _a.sent();
                console.log(r);
                return [2 /*return*/, r];
            case 4:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
export var getNewsData = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var _sp, list1, r2, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _sp = getSP(props);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                console.log('hai this is getnewsdata spservice');
                return [4 /*yield*/, _sp.web.lists.getByTitle("News")];
            case 2:
                list1 = _a.sent();
                return [4 /*yield*/, list1.getItemsByCAMLQuery(caml)];
            case 3:
                r2 = _a.sent();
                return [2 /*return*/, (r2)];
            case 4:
                error_2 = _a.sent();
                console.log(error_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
export var getBirthdayData = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var _sp, sharePointService, birthdays, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _sp = getSP(props);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                sharePointService = new SharePointService(_sp);
                return [4 /*yield*/, sharePointService.GetBirthdays()];
            case 2:
                birthdays = _a.sent();
                return [2 /*return*/, birthdays];
            case 3:
                error_3 = _a.sent();
                console.log(error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var arrobj = [];
export var getQuickLinkData = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var _sp, qllist, qlistitems, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _sp = getSP(props);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, _sp.web.lists.getByTitle("Quick Links")];
            case 2:
                qllist = _a.sent();
                return [4 /*yield*/, qllist.items()];
            case 3:
                qlistitems = _a.sent();
                qlistitems.map(function (x) {
                    var imgobj = x.Icon;
                    var jobj = JSON.parse(imgobj);
                    arrobj.push({ Title: x.Title, Icon: window.location.protocol + "//" + window.location.host + jobj.serverRelativeUrl, Url: x.URL.Url });
                });
                console.log("hai I am SP this is working");
                return [2 /*return*/, (arrobj)];
            case 4:
                error_4 = _a.sent();
                console.log(error_4);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var arr = [];
export var getImageData = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var _sp, list, r, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _sp = getSP(props);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, _sp.web.lists.getByTitle("ImageSlider")];
            case 2:
                list = _a.sent();
                return [4 /*yield*/, list.getItemsByCAMLQuery(caml3)];
            case 3:
                r = _a.sent();
                r.map(function (x) {
                    var y = JSON.parse(x.image);
                    console.log(y.serverUrl + y.serverRelativeUrl);
                    arr.push(y.serverUrl + y.serverRelativeUrl);
                    console.log(arr);
                });
                console.log("hai I am imagelsider working in spservices");
                return [2 /*return*/, (arr)];
            case 4:
                error_5 = _a.sent();
                console.log(error_5);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
export var getUserData = function (props) { return __awaiter(void 0, void 0, void 0, function () {
    var _sp, DepID, RepMan, list, user, userobj, r, y, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _sp = getSP(props);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                return [4 /*yield*/, _sp.web.lists.getByTitle("EmployeeDetails")];
            case 2:
                list = _a.sent();
                return [4 /*yield*/, _sp.web.currentUser()];
            case 3:
                user = _a.sent();
                console.log(user);
                userobj = user.Email;
                return [4 /*yield*/, list.items.filter("Name/EMail eq '" + userobj + "'")()];
            case 4:
                r = _a.sent();
                return [4 /*yield*/, list.items.select('ReportingManager/EMail').expand('ReportingManager').filter("Name/EMail eq '" + userobj + "'")()];
            case 5:
                y = _a.sent();
                y.map(function (x) {
                    console.log(x.ReportingManager.EMail);
                    RepMan = x.ReportingManager.EMail;
                });
                r.map(function (x) {
                    console.log(x.DepartmentId);
                    DepID = x.DepartmentId;
                });
                return [2 /*return*/, { RepMan: RepMan, DepID: DepID }];
            case 6:
                error_6 = _a.sent();
                console.log(error_6);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=SPServices.js.map