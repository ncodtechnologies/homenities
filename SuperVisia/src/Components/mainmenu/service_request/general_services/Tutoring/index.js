import { createStackNavigator } from 'react-navigation';
import TutoringMain from './main';
import TutoringDate from './date';

export default createStackNavigator({
  TutoringMain: TutoringMain,
  TutoringDate: TutoringDate
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }); 