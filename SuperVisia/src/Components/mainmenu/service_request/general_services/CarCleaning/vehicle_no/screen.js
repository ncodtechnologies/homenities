import React, { Component } from 'react';
import {View, Alert} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, H3, Left, Right, Icon, Body, Title } from 'native-base';
import { withFormik } from "formik";
import * as Yup from "yup";

let _detail = {
  days : "",
  vehicle_no : ""
};
const frmVehicleNo = ({
  handleSubmit,
  navigation,
  state,
  setFieldValue,
  values,
  reqGeneralService
}) => {
  const _days = navigation.state.params.selectedDays;
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
            <Right />
        </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3>Please enter your Vehicle number </H3>
            </View>
            <Item style={{ marginTop:15 }} >
              <Input placeholder="Vehicle No." 
                onChangeText={(text) => 
                    setFieldValue("detail",JSON.stringify({
                        days: _days,
                        vehicle_no: text
                    }))
                }
                    />
            </Item>
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
    type : "Car Cleaning",
    id_company: navigation.state.params.id_company,
    reqGeneralService
  }),
  validateOnChange: false,

  handleSubmit: (values, { setSubmitting }) => {
    var formBody = [];
    formBody = JSON.stringify(values);
    return values.reqGeneralService(formBody);
  }
})(frmVehicleNo);
