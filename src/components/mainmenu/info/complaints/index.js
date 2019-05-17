import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Container, Header, Content, Form, Item, Icon, Button, Text, H3, Textarea , Left, Right, Body, Title } from 'native-base';

export default class Complaint extends Component {

  regFeedback = () => {
    Alert.alert('Thank you!',"Your request is registered successfully. We will review it soon. Thank You!");
    this.props.navigation.navigate("Home");
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
                <Title>Complaints</Title>
            </Body>
            <Right />
        </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3>Feel bad about something? Please let us know and we will fix it soon </H3>
            </View>
            <View style={{ marginTop:15 }} >
              <Textarea rowSpan={10} bordered placeholder="Complaints" />
            </View>
            <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button
                onPress={() => this.regFeedback()} 
                style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}