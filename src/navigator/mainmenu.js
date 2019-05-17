import React, { Component } from "react";
import { createBottomTabNavigator, createStackNavigator } from "react-navigation";
import Menu from "../components/mainmenu/home";
import Announcement from "../components/mainmenu/announcement";
import Promotion from "./promotion_stack";
import SRequestScreen from "./service_request_stack";
import Contract from "./contract_stack";
import Pass from "./pass_stack";
import Info from "./info_stack";
import Adv from "./adv_stack";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Shopping from './shopping_stack';

const HomeStack = createStackNavigator({
    Menu,
    Contract,
    Announcement,
    Promotion,
    Shopping
  },
  {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
}); 

const BottomTabs = createBottomTabNavigator({
    MainMenuHome: {
        screen: HomeStack,
        navigationOptions: {
            tabBarVisible: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="home"
                    size={17}
                    color={tintColor} />
            )
        }
    },
    Pass: {
        screen: Pass,
        navigationOptions: {
            tabBarLabel: "Pass",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="fingerprint"
                    size={17}
                    color={tintColor} />
            )
        }
    },
    SRequest: {
        screen: SRequestScreen,
        navigationOptions: {
            tabBarLabel: "Services",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="build"
                    size={17}
                    color={tintColor} />
            )
        }
    },
    Info: {
        screen: Info,
        navigationOptions: {
            tabBarLabel: "Info",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="error"
                    size={17}
                    color={tintColor} />
            )
        }
    },
    Advertisement: {
        screen: Adv,
        navigationOptions: {
            tabBarLabel: "Ads",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="done"
                    size={17}
                    color={tintColor} />
            )
        }
    },
},
    {
      initialRouteName: 'MainMenuHome',
      tabBarOptions: { 
        activeTintColor: '#83ABCA',
        inactiveTintColor: 'white',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: '#0574CA',
        }
      }
  }
  );


export default createStackNavigator({ BottomTabs }, { headerMode: "none" });
