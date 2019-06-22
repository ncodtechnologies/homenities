import React, { Component } from 'react';
import {View} from 'react-native';
import { Container, Header, Content, Left, Right, Body, Title, Button, Text, H3, Textarea, Icon } from 'native-base';

export default class Main extends Component {

  constructor(props){
    super(props);
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
              <Title>Personal Driver</Title>
            </Body>
            <Right />
        </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3>As many businessmen and women prefer having a driver to go to and from work in order to make calls, schedule meetings, and generally work on the operational aspects of their companies during that time.
 </H3>
              <H3 style={{ marginTop: 7 }} > - Clean driving records </H3>
              <H3 style={{ marginTop: 7 }} > - To be 21 years or older </H3>
              <H3 style={{ marginTop: 7 }} > - Atleast 3 years experience </H3>
              <H3 style={{ marginTop: 7 }} > - A background check </H3>
            </View>
            <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button
                onPress={() => this.props.navigation.navigate("DriverDate")}
                style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
