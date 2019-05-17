import React, { Component } from 'react';
import {View} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, H3, Textarea, Icon, Left, Body, Right, Title  } from 'native-base';

export default class postDescription extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      post_ad : props.navigation.state.params.post_ad
    }
  }

  goToPrice = () => {
    console.log(this.state.post_ad);
    this.props.navigation.navigate("AdvPrice",{
      post_ad : this.state.post_ad
        })
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
                <Title>Post Ad</Title>
            </Body>
            <Right />
        </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3>Please give a breif description about the Item </H3>
            </View>
            <View style={{ marginTop:15 }} >
              <Textarea rowSpan={5} bordered placeholder="Description" value={this.state.post_ad.description}
              
              onChangeText={(text) => this.setState({ 
                post_ad : {
                  id_adv: this.state.post_ad.id_adv,
                  price: this.state.post_ad.price,
                  title: this.state.post_ad.title,
                  description: text,
                }
              })}
              />
            </View>
            <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button
                onPress={() => this.goToPrice()}
                style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}