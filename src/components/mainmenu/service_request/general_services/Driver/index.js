import { createStackNavigator } from 'react-navigation';
import DriverMain from './main';
import DriverDate from './date';

export default createStackNavigator({
  DriverMain: DriverMain,
  DriverDate: DriverDate
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }); 
 