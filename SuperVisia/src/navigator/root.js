import { createStackNavigator } from "react-navigation";

import AuthStack from "./accountstack";
import MainMenu from "./mainmenu";

const root = createStackNavigator({
 /* Auth: {
    screen: AuthStack,
    navigationOptions: {
      header: null
    }
  },
 */ MainMenu: {
    screen: MainMenu,
    navigationOptions: {
      header: null
    }
  }
});
export default root;
