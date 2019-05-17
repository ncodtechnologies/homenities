import React, { Component } from 'react';
import {Alert} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button, Title } from 'native-base';

export default class ListIconExample extends Component {

  reqContractRenewal(){
    Alert.alert("Contract Renewal", "Thank you for your request. We will get back to you soon.");
  }

  render() {
    return (
      <Container>
      <Header  style={{ backgroundColor: '#0574CA' }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>

          <Body>
            <Title>Contract Details</Title>
          </Body>
          <Right />
      </Header>
        <Content>
          <ListItem icon  onPress={() => this.reqContractRenewal() }   >
            <Left>
              <Icon name="refresh" />
            </Left>
            <Body>
              <Text>Contract Renewal</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem icon>
            <Left>
              <Icon name="clipboard" />
            </Left>
            <Body>
              <Text>Contract Expiry</Text>
            </Body>
            <Right>
              <Text>01/06/2019</Text>
            </Right>
          </ListItem>
          <ListItem icon  onPress={() => this.props.navigation.navigate("ChequeReminder")} >
            <Left>
              <Icon name="alarm" />
            </Left>
            <Body>
              <Text>Cheque Reminder</Text>
            </Body>
            <Right>
              <Icon style={{ color: "#E67E22" }} name="warning" />
            </Right>
          </ListItem>
          <ListItem icon  onPress={() => this.props.navigation.navigate("FurnitureMoveIn")} >
            <Left>
              <Icon name="arrow-dropleft-circle" />
            </Left>
            <Body>
              <Text>Furniture Move In</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem icon  onPress={() => this.props.navigation.navigate("FurnitureMoveOut")} >
            <Left>
              <Icon name="arrow-dropright-circle" />
            </Left>
            <Body>
              <Text>Furniture Move Out</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem icon  onPress={() => this.props.navigation.navigate("FlatInspection")} >
            <Left>
              <Icon name="done-all" />
            </Left>
            <Body>
              <Text>Flat Inspection</Text>
            </Body>
            <Right />
          </ListItem>
        </Content>
      </Container>
    );
  }
}