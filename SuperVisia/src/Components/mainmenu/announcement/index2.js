import { createStackNavigator } from 'react-navigation';
import NotificationList from './notification_list';

export default createStackNavigator({
    NotificationList: NotificationList
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }); 