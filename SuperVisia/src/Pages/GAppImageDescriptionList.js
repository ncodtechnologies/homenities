import * as React from 'react';
import { Text, View, StyleSheet,Image,FlatList, ScrollView } from 'react-native';
import GBorder from './Givtly/GBorder';
import GImageDescription from './Givtly/GImageDescription';

export default class App extends React.Component {
  render() {
    return (

      <ScrollView >       
            <View>                   
                    <FlatList 
                            data={[
                              {key: 'Devin',name:'BMW 7 Series 750Li*Luxuary(Ref No:56)',date:' Yesterday',price:'43,600 AED',place:'Al Qouida International',description:'BMW 7 Series,2018,724,4 th Floor, Black'},
                              {key: 'Devin',name:'BMW 7 Series 750Li*Luxuary(Ref No:56)',date:' Yesterday',price:'43,600 AED',place:'Al Qouida International',description:'BMW 7 Series,2018,724,4 th Floor, Black'},
                              {key: 'Devin',name:'BMW 7 Series 750Li*Luxuary(Ref No:56)',date:' Yesterday',price:'43,600 AED',place:'Al Qouida International',description:'BMW 7 Series,2018,724,4 th Floor, Black'},
                              {key: 'Devin',name:'BMW 7 Series 750Li*Luxuary(Ref No:56)',date:' Yesterday',price:'43,600 AED',place:'Al Qouida International',description:'BMW 7 Series,2018,724,4 th Floor, Black'},
                            ]}
                            renderItem={({item}) =><View><View style={styles.box}> 
       <GImageDescription place={item.place} price={item.price} name={item.name} date={item.date}  description={item.description}  /></View><GBorder/></View>}
                        />        
                    
          </View>            
      </ScrollView>
  );
  }
}


const styles = StyleSheet.create({
  box:{
    padding:15,
  },
});


