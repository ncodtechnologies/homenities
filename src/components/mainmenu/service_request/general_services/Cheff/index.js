import { createStackNavigator } from 'react-navigation';
import ChefMain from './main';
import ChefDate from './date';

export default createStackNavigator({
  ChefMain: ChefMain,
  ChefDate: ChefDate
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }); 