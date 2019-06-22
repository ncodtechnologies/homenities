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
  Icon,
  Card,
  CardItem
} from "native-base";
import { withFormik } from "formik";
import * as Yup from "yup";
import { Color } from "../../../constants";
import { Col, Row, Grid } from 'react-native-easy-grid';

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
  },
  stretch: {
    flex:1,
    height: 90,
    resizeMode: 'contain',
  },
  cardBody: {
    justifyContent: 'space-around',
    height: 90
  },
  cardFooter: {
    flexDirection: "row",  
    alignItems: "center", 
    justifyContent: "space-around" 
  },
  card: {
    
  },
  footer_text: {
    fontSize: 14
  }
});

const MainMenu = ({
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
  
  <Container >
  <View  style={{ flex:1, alignContent:'center', justifyContent: 'center' }} >
    <View style={{ alignItems: "center" ,height: 550 }}>
        <Grid style={{ width: 320 }} > 
        <Row  >
        <Col >
          <TouchableOpacity 
            onPress={() => navigation.navigate("Pass")}   >
            <Card transparent style={styles.card} >
              <CardItem cardBody  style={styles.cardBody} >
                <Image style={styles.stretch} source={require('../../../Assets/Images/Home/qr.png')} />
              </CardItem>
              <CardItem footer style={styles.cardFooter}>
                <Text style={styles.footer_text} >Entry Pass</Text>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </Col>
        <Col > 
          <TouchableOpacity
            onPress={() => navigation.navigate("SRequest")}   >
          <Card transparent style={styles.card} >
            <CardItem cardBody  style={styles.cardBody} >
              <Image style={styles.stretch} source={require('../../../Assets/Images/Home/maintenance.png')} />
            </CardItem>
            <CardItem footer style={styles.cardFooter}>
              <Text style={styles.footer_text} >Service Requests</Text>
            </CardItem>
          </Card>
          </TouchableOpacity>
        </Col>
        </Row>
        <Row  >
        <Col >
          <TouchableOpacity
            onPress={() => navigation.navigate("Advertisement")}    >
          <Card transparent style={styles.card} >
            <CardItem cardBody  style={styles.cardBody} >
              <Image style={styles.stretch} source={require('../../../Assets/Images/Home/ad.png')} />
            </CardItem>
            <CardItem footer style={styles.cardFooter}>
              <Text style={styles.footer_text}>Advertisement</Text>
            </CardItem>
          </Card>
          </TouchableOpacity>
        </Col>
        <Col >
            <TouchableOpacity 
              onPress={() => navigation.navigate("Announcement")}    >
            <Card transparent style={styles.card} >
              <CardItem cardBody  style={styles.cardBody} >
                <Image style={styles.stretch} source={require('../../../Assets/Images/Home/announcement.png')} />
              </CardItem>
              <CardItem footer style={styles.cardFooter}>
                <Text style={styles.footer_text}>Announcements </Text>
              </CardItem>
            </Card>
            </TouchableOpacity>
        </Col>
        </Row>
        <Row >
        <Col >
          <TouchableOpacity 
            onPress={() => navigation.navigate("Promotion")}    >
          <Card transparent style={styles.card} >
            <CardItem cardBody  style={styles.cardBody} >
              <Image style={styles.stretch} source={require('../../../Assets/Images/Home/promotions.png')} />
            </CardItem>
            <CardItem footer style={styles.cardFooter}>
              <Text style={styles.footer_text}>Promotions </Text>
            </CardItem>
          </Card>
          </TouchableOpacity>
        </Col>
        <Col >
          <TouchableOpacity 
            onPress={() => navigation.navigate("Contract")}    >
          <Card transparent style={styles.card} >
            <CardItem cardBody  style={styles.cardBody} >
              <Image style={styles.stretch} source={require('../../../Assets/Images/Home/contract.png')} />
            </CardItem>
            <CardItem footer style={styles.cardFooter}>
              <Text style={styles.footer_text}>Contract </Text>
            </CardItem>
          </Card>
          </TouchableOpacity>
        </Col>
        </Row>
        <Row>
          <Col >
          <TouchableOpacity 
            onPress={() => navigation.navigate("Info")}    >
          <Card transparent style={styles.card} >
            <CardItem cardBody  style={styles.cardBody} >
              <Image style={styles.stretch} source={require('../../../Assets/Images/Home/info.png')} />
            </CardItem>
            <CardItem footer style={styles.cardFooter}>
              <Text style={styles.footer_text}>Info </Text>
            </CardItem>
          </Card>
          </TouchableOpacity>
          </Col>
          <Col >
          <TouchableOpacity 
            onPress={() => navigation.navigate("Shopping")}    >
          <Card transparent style={styles.card} >
            <CardItem cardBody  style={styles.cardBody} >
              <Image style={styles.stretch} source={require('../../../Assets/Images/Home/info.png')} />
            </CardItem>
            <CardItem footer style={styles.cardFooter}>
              <Text style={styles.footer_text}>Info </Text>
            </CardItem>
          </Card>
          </TouchableOpacity>
          </Col>
        </Row>
      </Grid>
      </View>
    </View>
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
})(MainMenu);
