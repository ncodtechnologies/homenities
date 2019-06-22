import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const boxWidth = width/5; 

export default class App extends React.Component {
  render() {
    return (  
                  <View style={styles.box}>
                      <Text> <Ionicons name="md-checkmark-circle" size={52} color="red" /></Text>
                      <Text  style={{fontSize:14}}>{this.props.name}</Text>
                  </View>
    );
  }
}

const styles = StyleSheet.create({
   box:{  
      width:boxWidth,
      flexDirection:'column',
      alignItems:'center', 
      justifyContent:'center',
  }
});

