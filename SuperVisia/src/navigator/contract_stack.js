import { createStackNavigator } from "react-navigation";
import ContractHome from "../components/mainmenu/contract";
import ChequeReminder from "../components/mainmenu/contract/cheque_reminder";
import FlatInspection from "../components/mainmenu/contract/flat_instpection";
import FurnitureMoveIn from "../components/mainmenu/contract/furniture_move_in";
import FurnitureMoveOut from "../components/mainmenu/contract/furniture_move_out";

const root = createStackNavigator({
  ContractHome: {
    screen: ContractHome,
    navigationOptions: {
      header: null
    }
  },
  ChequeReminder: {
    screen: ChequeReminder,
    navigationOptions: {
      header: null
    }
  },
  FlatInspection: {
    screen: FlatInspection,
    navigationOptions: {
      header: null
    }
  },
  FurnitureMoveIn: {
    screen: FurnitureMoveIn,
    navigationOptions: {
      header: null
    }
  },
  FurnitureMoveOut: {
    screen: FurnitureMoveOut,
    navigationOptions: {
      header: null
    }
  }
});
export default root;
