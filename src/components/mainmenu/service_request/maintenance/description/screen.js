import React, { Component }  from 'react';
import {View, Alert} from 'react-native';
import { Container, Header, Content, Textarea, ListItem, Button, Text, H3, Left, Right, Icon, Body, Title } from 'native-base';
import { withFormik } from "formik";
import * as Yup from "yup";

const selAccess = ({
  handleSubmit,
  navigation,
  state,
  setFieldValue,
  values,
  maintenaceReq
}) => {

  return (
    <Container>
      <Header  style={{ backgroundColor: '#0574CA' }}>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Maintenance</Title>
          </Body>
          <Right />
      </Header>
      <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
        <View style={{ padding: 25 }} > 
          <View>
            <H3>Please give a breif description about the service needed </H3>
          </View>
          <View style={{ marginTop:15 }} >
                <Textarea rowSpan={5} bordered placeholder="Description" 
                    onChangeText={(text) => setFieldValue("description", text)}
                />
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
  mapPropsToValues: ({  token, navigation, reqMaintenance }) => ({
    id_tenant : "1",
    type: navigation.state.params.maintenance_request.service_type,
    date : navigation.state.params.maintenance_request.date,
    time : navigation.state.params.maintenance_request.time,
    description: "",
    reqMaintenance
  }),
  validateOnChange: false,
  handleSubmit: (values, { setSubmitting }) => {
    var formBody = [];
    formBody = JSON.stringify(values);
    return values.reqMaintenance(formBody);
  }
})(selAccess);
