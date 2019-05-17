import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Container, Header, Content, Form, Left, Right, Body, Title , Icon, Button, Text, H3, Textarea } from 'native-base';

export default class Suggestion extends Component {

  regFeedback = () => {
    Alert.alert('Suggestion',"Your request is registered successfully. We will review it soon. Thank You!");
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
                <Title>Suggestion</Title>
            </Body>
            <Right />
        </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3>Your suggestions are valuable to us. Please feel free to write to us </H3>
            </View>
            <View style={{ marginTop:15 }} >
              <Textarea rowSpan={8} bordered placeholder="Suggestions" />
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