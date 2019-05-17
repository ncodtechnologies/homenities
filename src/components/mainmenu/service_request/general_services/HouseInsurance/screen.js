import React, { Component } from 'react';
import {View, Alert, TimePickerAndroid, DatePickerAndroid} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, H3, Left, Right, Icon, Body, Title  } from 'native-base';
import { withFormik } from "formik";
import * as Yup from "yup";

const frm = ({
  handleSubmit,
  navigation,
  state,
  setFieldValue,
  values,
  reqGeneralService
}) => {
  return (
    <Container>
      <Header  style={{ backgroundColor: '#0574CA' }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>House Insurance</Title>
          </Body>
          <Right />
      </Header>
      <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
        <View style={{ padding: 25 }} > 
          <View>
            <H3>We provide a comprehensive home insurance policy that provides coverage against damages or losses that might incur due to unforeseen natural causes.
              </H3>
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
    type : "House Insurance",
    id_company: navigation.state.params.id_company,
    reqGeneralService
  }),
  validateOnChange: false,

  handleSubmit: (values, { setSubmitting }) => {
    var formBody = [];
    formBody = JSON.stringify(values);
    return values.reqGeneralService(formBody);
  }
})(frm);
