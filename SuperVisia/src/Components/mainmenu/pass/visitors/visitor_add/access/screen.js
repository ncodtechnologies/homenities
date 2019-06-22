import React, { Component }  from 'react';
import {View, Alert} from 'react-native';
import { Container, Header, Content, CheckBox, ListItem, Button, Text, H3, Left, Right, Icon, Body, Title } from 'native-base';
import { withFormik } from "formik";
import * as Yup from "yup";

const selAccess = ({
  handleSubmit,
  navigation,
  state,
  setFieldValue,
  values,
  addVisitor
}) => {

  onCheckBoxPress = async (isValley) => {
    if(isValley)
    {
      setFieldValue("valley_access", !values.valley_access);
    }
    else
    {
      setFieldValue("gate_access", !values.gate_access);
    }
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
          <Title>New Visitor</Title>
        </Body>
        <Right>
      </Right>
    </Header>
      <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
        <View style={{ padding: 25 }} > 
          <View>
            <H3>Where would you like to give access to the visitor? </H3>
          </View>
          <ListItem>
            <CheckBox checked={values.gate_access} color="green" 
            onPress={()=>this.onCheckBoxPress(false)}
            />
            <Body>
              <Text>Gate</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={values.valley_access} color="green"
            onPress={()=>this.onCheckBoxPress(true)}
            />
            <Body>
              <Text>Valley</Text>
            </Body>
          </ListItem>
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
  mapPropsToValues: ({  token, navigation, addVisitor }) => ({
    id_tenant: 1,
    name: navigation.state.params.newVisitor.name,
    gate_access : false,
    valley_access : false,
    date : navigation.state.params.newVisitor.date,
    time_from : navigation.state.params.newVisitor.time_from,
    addVisitor
  }),
  validateOnChange: false,

  handleSubmit: (values, { setSubmitting }) => {
    var formBody = [];
    formBody = JSON.stringify(values);
    return values.addVisitor(formBody);
  }
})(selAccess);
