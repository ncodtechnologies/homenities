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
  H3,
  StyleProvider,
  Icon
} from "native-base";
import { withFormik } from "formik";
import * as Yup from "yup";
import { Color } from "../../../constants";

const OTPForm = ({
  handleSubmit,
  setFieldValue,
  handleBlur,
  values,
  errors,
  touched,
  navigation,
  checkOTP,
  token,
  otp
}) => (
  
  <Container>
  <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1, backgroundColor:"#0574CA" }}>
    <View style={{ padding: 25 }} > 
      <View>
        <H3 style={{color:'white'}} >Please Enter the OTP you have received </H3>
      </View>
      <Item style={{ marginTop:15 }} >
        <Input  style={{color:'white'}}
          onChangeText={value => setFieldValue("otp", value)}
          value={values.otp}
          error={touched.otp && errors.otp}
        />
      </Item>
      <Item style={{ borderBottomWidth: 0 }} >
          {errors.otp && (
            <Text style={{ color:'red' }}  visible={errors.otp}>
              {errors.otp}
            </Text>
          )}
          {otp.error && (
            <Text style={{ color:'red' }}  visible={otp.error}>
              {otp.error}
            </Text>
          )}
      </Item>
      <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
        <Button rounded light
          onPress={() => this.resendOTP()}
           ><Text> Resend OTP </Text></Button><Button  rounded light
          onPress={handleSubmit}
           ><Text> Login </Text></Button>
      </View>
    </View>
  </Content>
</Container>
);

export default withFormik({
  mapPropsToValues: ({ checkOTP, token }) => ({
    phone_no: "123456",
    otp: "",
    grant_type: "password",
    checkOTP,
    token
  }),
  validateOnChange: false,
  

  validationSchema: Yup.object().shape({
    otp: Yup.string()
      .required("Required")
  }),

  handleSubmit: (values, { setSubmitting }) => {
    var formBody = [];
    console.log("/////////////////////values"+JSON.stringify(values));
    formBody = JSON.stringify(values);
    return values.checkOTP(formBody);
  }
})(OTPForm);
