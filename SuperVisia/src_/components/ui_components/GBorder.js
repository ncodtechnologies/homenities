import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class GBorder extends React.Component {
  render() {
    return (      
          <View style={styles.container}>      
          </View>
  );
  }
}
const styles = StyleSheet.create({
  container:{   
    flex:.1,
    borderBottomWidth:1,
    borderColor:'#ECECEC',
  },
});

