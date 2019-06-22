import { createStackNavigator } from "react-navigation";

import InfoHome from "../components/mainmenu/info";
import Complaints from "../components/mainmenu/info/complaints";
import Suggestions from "../components/mainmenu/info/suggestions";

const root = createStackNavigator({
  InfoHome: {
    screen: InfoHome,
    navigationOptions: {
      header: null
    }
  },
  Complaint: {
    screen: Complaints,
    navigationOptions: {
      header: null
    }
  },
  Suggestion: {
    screen: Suggestions,
    navigationOptions: {
      header: null
    }
  }
});
export default root;
