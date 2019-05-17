import React, { Component } from 'react';
import {View, Alert, TimePickerAndroid, DatePickerAndroid} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, H3, Left, Right, Icon, Body, Title  } from 'native-base';
import { withFormik } from "formik";
import * as Yup from "yup";

const frmDate = ({
  handleSubmit,
  navigation,
  state,
  setFieldValue,
  values,
  reqGeneralService
}) => {
  showPicker = async (stateKey, options) => {
    console.log("picker selected");
    try {
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        setFieldValue("selectedDate", "Failed selection");
      } else {
        // <<<< Newly selected date >>>>
        var date = new Date(year, month, day);
        selectedDate = year + "-" + month + "-" + day;
        setFieldValue("selectedDate", selectedDate);

        setFieldValue("detail",JSON.stringify({
            Time: values.selectedTime,
            Date: selectedDate
        }))
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
        selectedTime = "Failed selection";
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
        
        setFieldValue("detail",JSON.stringify({
            Time: selectedTime,
            Date: values.selectedDate
        }))
      }
      
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };
  const _service_type = navigation.state.params.service_type;
  return (
    <Container>
      <Header  style={{ backgroundColor: '#0574CA' }}>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
            
          <Body>
              <Title>{service_type}</Title>
          </Body>
          <Right />
      </Header>
      <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
        <View style={{ padding: 25 }} > 
          <View>
            <H3>Please provide a date and time </H3>
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
  mapPropsToValues: ({  token, navigation, reqGeneralService, values }) => ({
    id_tenant: 1,
    type : navigation.state.params.service_type,
    selectedDate : "Select date",
    selectedTime : "Select time",
    id_company: navigation.state.params.id_company,
    reqGeneralService
  }),
  validateOnChange: false,

  handleSubmit: (values, { setSubmitting }) => {
    var formBody = [];
    formBody = JSON.stringify(values);
    return values.reqGeneralService(formBody);
  }
})(frmDate);
