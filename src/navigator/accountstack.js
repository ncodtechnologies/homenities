import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../components/auth/login";
import OTP from "../components/auth/otp";
import Mainmenu from "../components/mainmenu/home";

const accountStack = createStackNavigator(
  {
    Auth: Login,
    OTP: OTP,
    Mainmenu: Mainmenu
  },
  {
    initialRouteName: "Auth",
    swipeEnabled: false,
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default accountStack;
