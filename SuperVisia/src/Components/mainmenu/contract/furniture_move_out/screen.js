import React, { Component }  from 'react';
import { FlatList, ActivityIndicator, View, TouchableOpacity, TimePickerAndroid, DatePickerAndroid   } from 'react-native';
import { Container, Header, Content, Left, Right, Icon, Body, Title, Item, Input, Button, Text, H3 } from 'native-base';
import { withFormik } from "formik";
import * as Yup from "yup";

const selTime = ({
  handleSubmit,
  navigation,
  state,
  setFieldValue,
  values
}) => {

  showPicker = async (stateKey, options) => {
    console.log("picker selected");
    try {
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
    //    this.setState({_date: 'Failed selection'});
        setFieldValue("selectedDate", "Failed selection");
      } else {
        // <<<< Newly selected date >>>>
        var date = new Date(year, month, day);
        selectedDate = year + "-" + month + "-" + day;
        setFieldValue("selectedDate", selectedDate);
       }
      
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  showTimePicker = async (stateKey, options) => {
    console.log("Time picker selected");
    try {
      const {action, hour, minute} = await TimePickerAndroid.open(options);
      if (action === TimePickerAndroid.dismissedAction) {
        
        selectedTime = "Failed selection"
        setFieldValue("selectedTime", selectedTime);
      } else {
        var date = new Date(hour, minute);
        var TimeType = 'AM'
        var _hour = hour
        if(hour <= 11)
          TimeType = 'AM';
        else
          TimeType = 'PM';
          
        if( hour > 12 )
        _hour = hour - 12;
        if( hour == 0 )
        _hour = 12;

        selectedTime =  _hour + " : " + minute + " " + TimeType;
        
        setFieldValue("selectedTime", selectedTime);
  
      }
      
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };
  return (
    <Container>
      <Header  style={{ backgroundColor: '#0574CA' }}>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
            
          <Body>
              <Title>Furniture Move Out</Title>
          </Body>
          <Right />
      </Header>
      <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
        <View style={{ padding: 25 }} > 
          <View>
              <H3>Please provide a suitable date for furniture move </H3>
          </View>
          <View style={{ marginTop:15 }} >
          <Item>          
            <Button transparent  onPress={this.showPicker.bind(this, 'spinner', { date: new Date() })} >
              <Text>{values.selectedDate}</Text>
            </Button>
          </Item>
          <Item>          
            <Button transparent  onPress={this.showTimePicker.bind(this, 'spinner', { date: new Date(), is24Hour: false })} >
              <Text>{values.selectedTime}</Text>
            </Button>
          </Item>
          </View>
          <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
            <Button
              onPress={handleSubmit}
              style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
          </View>
        </View>
      </Content>
    </Container>
);
};



export default withFormik({
  mapPropsToValues: ({  token, navigation, reqFurnitureMove }) => ({
    id_tenant: 1,
    selectedDate : "Select Date",
    selectedTime : "Select Time",
    type: "Move Out",
    reqFurnitureMove
  }),
  validateOnChange: false,

  handleSubmit: (values, { setSubmitting }) => {
    var formBody = [];
    formBody = JSON.stringify(values);
    return values.reqFurnitureMove(formBody);
  }
})(selTime);
