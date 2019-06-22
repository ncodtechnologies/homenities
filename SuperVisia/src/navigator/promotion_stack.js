import { createStackNavigator } from "react-navigation";
import PromoShopList from "../components/mainmenu/promotion/shop";
import PromoOfferList from "../components/mainmenu/promotion/offer";
import PromoOfferDt from "../components/mainmenu/promotion/offer_dt";

export default createStackNavigator({
  PromoShopList: PromoShopList,
  PromoOfferList: PromoOfferList,
  PromoOfferDt: PromoOfferDt
},
{
headerMode: 'none',
navigationOptions: {
  headerVisible: false,
}
}); 