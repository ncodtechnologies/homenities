import { createStackNavigator } from "react-navigation";

import TenantPass from "../components/mainmenu/pass/tenant_pass";
import VisitorList from "../components/mainmenu/pass/visitors/visitor_list";
import VisitorPass from "../components/mainmenu/pass/visitors/visitor_pass";
import AddVisitorName from "../components/mainmenu/pass/visitors/visitor_add/name";
import AddVisitorTime from "../components/mainmenu/pass/visitors/visitor_add/time";
import AddVisitorAccess from "../components/mainmenu/pass/visitors/visitor_add/access";

const root = createStackNavigator({
  TenantPass: {
    screen: TenantPass,
    navigationOptions: {
      header: null
    }
  },
  VisitorList: {
    screen: VisitorList,
    navigationOptions: {
      header: null
    }
  },
  VisitorPass: {
    screen: VisitorPass,
    navigationOptions: {
      header: null
    }
  },
  AddVisitorName: {
    screen: AddVisitorName,
    navigationOptions: {
      header: null
    }
  },
  AddVisitorTime: {
    screen: AddVisitorTime,
    navigationOptions: {
      header: null
    }
  },
  AddVisitorAccess: {
    screen: AddVisitorAccess,
    navigationOptions: {
      header: null
    }
  }
});
export default root;
