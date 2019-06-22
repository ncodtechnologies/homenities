import React, { Component } from 'react';
import { View,Text, StyleSheet, FlatList,Image } from 'react-native';
import GImage from './Givtly/GImage';
import GCategoryIcon from './Givtly/GCategoryIcon';
import GBorder from './Givtly/GBorder';

export default class App extends Component { 
    render () {
    return (
       <View>
                  <FlatList horizontal={true}
                      data={[
                          {key: 'Devin',name:'Motors'},
                          {key: 'Devin',name:'Community'},
                          {key: 'Devin',name:'Job'},
                          {key: 'Devin',name:'Community'},
                          {key: 'Devin',name:'Community'},
                      ]}
                      renderItem={({item}) =><View style={{height:90}}> 
              <GCategoryIcon topic={item.topic} views={item.views} name={item.name} date={item.date}  subject={item.subject}  /></View>}
                    /> 

               <View><GBorder/></View>
              
              <View><Text style={styles.heading}>Top Picks in Classifieds</Text>
              </View>             
    
    

                    <FlatList
                  contentContainerStyle={styles.list}
                  data={[
                    {key: 'a',price:'AED 250',description:'Top Picks in Classifieds'},
                    {key: 'a',price:'AED 250',description:'Top Picks in Classifieds'},
                    {key: 'a',price:'AED 250',description:'Top Picks in Classifieds'},
                    {key: 'a',price:'AED 250',description:'Top Picks in Classifieds'},
                  ]}
                  renderItem={({item, index}) => <View><GImage price={item.price} description={item.description}/></View>}
                  />
            </View>
    );

  }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  heading: {
    fontSize:19,
    fontWeight:'bold',
    textAlign:'center',
    padding:20,
  },
});

