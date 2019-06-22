import React, { Component }  from 'react';
import { ListView, FlatList, ActivityIndicator, View, Image } from 'react-native';
import { Container, Header, Content, Left, Icon, Title, Right, Text, Body, H2, Button, ListItem } from 'native-base';

import { withFormik } from "formik";

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const frmSRList = ({
  navigation,
  serviceReqList,
  setFieldValue,
  values
}) => {

  renderList = () => {

    printDetails = (obj) => {
      var propValue;
      let res = [];
      for(var propName in obj) {
          propValue = obj[propName]
          res.push(<Text style={{ fontSize: 17 }} >{propName} : {propValue}</Text>);
      }
      return res;
    }

    return serviceReqList.data.map((request, index) => {
       let details = JSON.parse(request.detail);
        return (
            <ListItem>
              <Body>
                <Text style={{ fontWeight: "bold", fontSize: 20 }} >RFSRCC{request.id_sr}. {request.type}</Text>
                {this.printDetails(details)}
                {(request.status == 0) ?
                (<View style={{backgroundColor: "#F1C40F", width: 130, alignSelf:'flex-end', borderRadius: 10, alignItems: 'center'}}>
                  <Text style={{alignSelf:'center', fontStyle: 'italic', color:'white', padding:5 }}>Pending</Text>
                </View>)
                :
                (
                  (request.status == -1)?
                  (<View style={{backgroundColor: "#C0392B", width: 130, alignSelf:'flex-end', borderRadius: 10, alignItems: 'center'}}>
                    <Text style={{alignSelf:'center', fontStyle: 'italic', color:'white', padding:5 }}>Rejected</Text>
                  </View>)
                  :
                  (<View style={{backgroundColor: "#27AE60", width: 130, alignSelf:'flex-end', borderRadius: 10, alignItems: 'center'}}>
                    <Text style={{alignSelf:'center', fontStyle: 'italic', color:'white', padding:5 }}>Approved</Text>
                  </View>)
                )
                }
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
            <Title>Service Requests</Title>
          </Body>
          <Right>
        </Right>
      </Header>
      <Content>
        {
          this.renderList()
        }
      </Content>
      </Container>
);
};

export default withFormik({
  mapPropsToValues: ({  token }) => ({
    
  }),
  validateOnChange: false,
})(frmSRList);
