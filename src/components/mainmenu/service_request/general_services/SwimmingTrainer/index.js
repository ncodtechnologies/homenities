import { createStackNavigator } from 'react-navigation';
import selSwimmingGender from './selGender';
import selSwimmingPlan from './selPlan';
import selSwimmingTime from './time';

export default createStackNavigator({
  selSwimmingGender: selSwimmingGender,
  selSwimmingPlan: selSwimmingPlan,
  selSwimmingTime: selSwimmingTime
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }); 