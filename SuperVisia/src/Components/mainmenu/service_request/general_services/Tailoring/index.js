import { createStackNavigator } from 'react-navigation';
import TailoringMain from './main';
import TailoringDate from './date';

export default createStackNavigator({
  TailoringMain: TailoringMain,
  TailoringDate: TailoringDate
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }); 