import storage from "redux-persist/es/storage";
import { persistCombineReducers } from "redux-persist";
import {
  login,
  otp,
  token
} from "../components/auth/reducer";

import {
  tenant
} from '../components/mainmenu/pass/tenant_pass/reducer';

import {visitorList} from '../components/mainmenu/pass/visitors/visitor_list/reducer';
import {visitorPass} from '../components/mainmenu/pass/visitors/visitor_pass/reducer';
import {visitorAdd} from '../components/mainmenu/pass/visitors/visitor_add/reducer';
import {maintenance} from '../components/mainmenu/service_request/maintenance/reducer';
import {chequeReminder, flatInspection, furnitureMove} from '../components/mainmenu/contract/reducer';
import {announcements} from '../components/mainmenu/announcement/reducer';
import {genServiceRequest,serviceReqList,srCompanyList} from '../components/mainmenu/service_request/general_services/reducer';
import {promoShops, promoOffers, promoOfferDt} from '../components/mainmenu/promotion/reducer';
import { shoppingCart, shoppingItems, shoppingOrder, shoppingShopList } from '../components/mainmenu/shopping/reducer';


const config = {
  key: "primary",

  storage,
  blacklist: [
    "login",
    "otp",
    "tenant",
    "visitorList",
    "visitorPass",
    "visitorAdd",
    "maintenance",
    "chequeReminder",
    "flatInspection",
    "furnitureMove",
    "announcements",
    "genServiceRequest",
    "serviceReqList",
    "promoShops",
    "promoOffers",
    "promoOfferDt",
    "srCompanyList",
    "shoppingCart",
    "shoppingItems",
    "shoppingOrder",
    "shoppingShopList"
  ]
};

const combinedReducers = {
  login,
  otp,
  token,
  tenant,
  visitorList,
  visitorPass,
  visitorAdd,
  maintenance,
  chequeReminder,
  flatInspection,
  furnitureMove,
  announcements,
  genServiceRequest,
  serviceReqList,
  srCompanyList,
  promoShops,
  promoOffers,
  promoOfferDt,
  shoppingCart,
  shoppingItems,
  shoppingOrder,
  shoppingShopList
};

export default persistCombineReducers(config, combinedReducers);
