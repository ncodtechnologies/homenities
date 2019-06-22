import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const imgWidth = width>380 ? 125 : width*0.35; 
const imgHeight =  imgWidth * .9;
const boxWidth = (width * .93) - imgWidth; 


export default class App extends React.Component {
  render() {
    return (
            <View>
            <View style={styles.heading}>
                      <Text style={{fontSize:22,color:'#0D80A4'}}>{this.props.name} </Text>
            </View>
            <View style={styles.container}>
               <View style={styles.box1}>
                <Image  style={styles.img} source={require('//img2.jpg')}/>
               </View>
               <View style={{flexDirection:'column',paddingLeft:5, width:boxWidth,}}>
                      <View style={styles.box2}>
                          <Text style={{fontWeight:'bold',fontSize:20}}>{this.props.price}</Text>
                          <Text style={{fontSize:16,paddingTop:7}}> {this.props.description}</Text>
                      </View>
                      <View style={styles.box3}>
                                <Text style={{fontSize:14}}>{this.props.place}</Text>
                                <Text style={{textAlign:'right',fontSize:14,paddingBottom:5}}>{this.props.date}</Text>
                      </View>
               </View>
            </View>
        </View>
     )
  }
}


const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
  },
  box1:{
    alignItems:'flex-start',
  },
  box2:{  
    alignItems:'flex-start',
    justifyContent:'space-between',
    height:70,
  },
  box3:{
    flexDirection:'row',
    color:'#c4c2c2',
    alignItems:'flex-end',
    justifyContent:'space-between',
    height:40,
    width:boxWidth,
  },
  img:{
    width:imgWidth,
    height:imgHeight,
  },

  heading:{
    color:'#307F9B',
    fontSize:25,
  },

});

