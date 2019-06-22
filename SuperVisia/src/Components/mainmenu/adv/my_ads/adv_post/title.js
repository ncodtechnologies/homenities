import React, { Component } from 'react';
import {View} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Text, H3,  Icon, Left, Body, Right, Title  } from 'native-base';

export default class postTitle extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      post_ad : props.navigation.state.params.ad ? props.navigation.state.params.ad : {
        title : ""
      }
    }
  }
  
  goToDescription = () => {
    console.log(this.state.post_ad);
    this.props.navigation.navigate("AdvDescription",{
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
              <H3>Please give a suitable title </H3>
            </View>
            <Item style={{ marginTop:15 }} >
              <Input placeholder="Title" value={this.state.post_ad.title}
              onChangeText={(text) => this.setState({ 
                post_ad : {
                  id_adv : this.state.post_ad.id_adv ? this.state.post_ad.id_adv : 0,
                  description : this.state.post_ad.description,
                  title: text,
                  price : this.state.post_ad.price,
                }
              })}
              />
            </Item>
            <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button
                onPress={() => this.goToDescription()}
                style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}