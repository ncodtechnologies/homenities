import { createStackNavigator } from "react-navigation";

import AdvHome from "../components/mainmenu/adv";
import AdsList from "../components/mainmenu/adv/ads";
import AdvDescription from "../components/mainmenu/adv/my_ads/adv_post/description";
import AdvPicture from "../components/mainmenu/adv/my_ads/adv_post/picture";
import AdvPrice from "../components/mainmenu/adv/my_ads/adv_post/price";
import AdvTitle from "../components/mainmenu/adv/my_ads/adv_post/title";

export default createStackNavigator({
    AdvHome,
    AdsList,
    AdvDescription,
    AdvPicture,
    AdvPrice,
    AdvTitle
  },
  {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
}); 
