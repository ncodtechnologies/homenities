import React, { Component } from 'react';
import {View, Alert} from 'react-native';
import { Container, Header, Content, CheckBox, ListItem, Button, Text, H3, Left, Right, Icon, Body, Title } from 'native-base';

import { withFormik } from "formik";

const dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const SelPlan = ({
  navigation,
  state,
  setFieldValue,
  values
}) => {

  goToVehicleNo = () => {
    navigation.navigate("VehicleNo", { 
      sr: {
        days: this.serialiseDays() 
      }
    }
  );
  }
  
  serialiseDays = () => 
  {
    var selectedDays = [];
    for(i=0;i<dayList.length; i++)
    {
      if(values[dayList[i]])
        selectedDays.push(dayList[i])
    }
    return selectedDays.join(",");
  }
  
  onCheckBoxPress = i => {
    setFieldValue(dayList[i], !values[dayList[i]]);
  };

  checkPlanSel = (i) => {
    return values[dayList[i]];
  }

  renderList = () => {
    return dayList.map((day, index) => {
        return (
            <ListItem>
              <CheckBox checked={checkPlanSel(index)} color="green"
              onPress={()=>onCheckBoxPress(index)}
              />
              <Body>
                <Text>{day}</Text>
              </Body>
            </ListItem>
        );
    });
  }

    return (
      <Container>
      <Header  style={{ backgroundColor: '#0574CA' }}>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
            
          <Body>
            <Title>Car Cleaning</Title>
          </Body>
          <Right>
        </Right>
      </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3>Please select the days (DHS.50 per day)</H3>
            </View>
            <View>
            {
              this.renderList()
            }
            </View>
            <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button
                onPress={() => navigation.navigate("CarCleaningVehicleNo",{ selectedDays: serialiseDays(), id_company: navigation.state.params.id_company}) }
                style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
);
};


export default withFormik({
  mapPropsToValues: ({  token }) => ({
    selectedDate : "Select date",
    selectedTime : "Select time"
  }),
  validateOnChange: false,
})(SelPlan);