import React, { Component } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  Container,
  Content,
  Item,
  Input,
  Text,
  Button,
  H2,
  StyleProvider,
  Icon
} from "native-base";
import { withFormik } from "formik";
import * as Yup from "yup";
import { Color } from "../../../constants";

let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    height: 270,
    resizeMode: "cover" // or 'stretch'
  },
  formContent: {
    flex: 1,
    padding: 20
  },
  marginTop: {
    marginTop: 15
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    position: "absolute"
  }
});

const LoginForm = ({
  handleSubmit,
  setFieldValue,
  handleBlur,
  values,
  errors,
  touched,
  navigation,
  loginUser,
  token,
  login
}) => (
  
  <Container>
  <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1, backgroundColor:"#0574CA" }}>
    <View style={{ padding: 25, alignItems: 'center' }} > 
      <View>
        <H2 style={{color:'white', fontWeight: 'bold'}}>Community App</H2>
      </View>
      <Item style={{ marginTop:15 }} >
        <Input placeholder="" style={{color:'white'}}
          onChangeText={value => setFieldValue("phone_no", value)}
          value={values.phone_no}
          error={touched.phone_no && errors.phone_no}
        />
      </Item>
      <Item style={{ borderBottomWidth: 0 }} >
          {errors.phone_no && (
            <Text style={{ color:'red' }}  visible={errors.phone_no}>
              {errors.phone_no}
            </Text>
          )}
          {login.error && (
            <Text style={{ color:'red' }}  visible={login.error}>
              {login.error}
            </Text>
          )}
      </Item>
      <View style={{ height:120 }}>
      <View style={{ justifyContent:"center", flexDirection: "row", flex:1,marginTop:8 }} >
        <Button rounded light
          onPress={handleSubmit}
           ><Text> Log in </Text></Button>
      </View>
      <View style={{ justifyContent:"center", flexDirection: "row", flex:1,marginTop:8 }} >
        <TouchableOpacity onPress={()=> this.goToRegister()} >
          <Text style={{color:'white'}} >Not Registered yet? Register</Text>
        </TouchableOpacity> 
      </View>
      </View>
    </View>
  </Content>
</Container>
);

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export default withFormik({
  mapPropsToValues: ({ loginUser, token }) => ({
    phone_no: "",
    grant_type: "password",
    loginUser,
    token
  }),
  validateOnChange: false,
  

  validationSchema: Yup.object().shape({
    phone_no: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required("Required")
  }),

  handleSubmit: (values, { setSubmitting }) => {
    var formBody = [];
    formBody = JSON.stringify(values);
    return values.loginUser(formBody);
  }
})(LoginForm);
