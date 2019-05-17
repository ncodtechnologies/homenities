import { createStackNavigator } from 'react-navigation';
import SelPlan from './plan';
import VehicleNo from './vehicle_no';

export default createStackNavigator({
  CarCleaningPlan: SelPlan,
  CarCleaningVehicleNo: VehicleNo
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }); 