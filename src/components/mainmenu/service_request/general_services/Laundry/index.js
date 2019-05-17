import { createStackNavigator } from 'react-navigation';
import LaundryPickup from './pickUp';
import LaundryDelivery from './delivery';

export default createStackNavigator({
  LaundryPickup: LaundryPickup,
  LaundryDelivery: LaundryDelivery
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }); 