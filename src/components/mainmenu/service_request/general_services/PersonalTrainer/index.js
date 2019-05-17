import { createStackNavigator } from 'react-navigation';
import selTrainerGender from './selGender';
import selTrainingPlan from './selPlan';
import selTrainingTime from './time';

export default createStackNavigator({
  selTrainerGender: selTrainerGender,
  selTrainingPlan: selTrainingPlan,
  selTrainingTime: selTrainingTime
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }); 