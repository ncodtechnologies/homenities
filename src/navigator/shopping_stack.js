import { createStackNavigator } from "react-navigation";

import ShoppingShopList from "../components/mainmenu/shopping/shopList";
import ShoppingItemList from "../components/mainmenu/shopping/itemList";
import ShoppingCart from "../components/mainmenu/shopping/cart";
import ShoppingItemDt from "../components/mainmenu/shopping/itemDt";

const root = createStackNavigator({
  ShoppingShopList: {
    screen: ShoppingShopList,
    navigationOptions: {
      header: null
    }
  },
  ShoppingItemList: {
    screen: ShoppingItemList,
    navigationOptions: {
      header: null
    }
  },
  ShoppingCart: {
    screen: ShoppingCart,
    navigationOptions: {
      header: null
    }
  },
  ShoppingItemDt: {
    screen: ShoppingItemDt,
    navigationOptions: {
      header: null
    }
  }
});
export default root;
