import React, { Component } from 'react';
import {View, Alert} from 'react-native';
import { Container,  Content, Header, Item, Input, Button, Text, H3,  Icon, Left, Body, Right, Title  } from 'native-base';

export default class postPrice extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      post_ad :  props.navigation.state.params.post_ad
    }
  }

  postAd = () => {
    
    Alert.alert("Thank You","Your Advertisement will be verified and posted soon. Thank You!");    
    this.props.navigation.navigate("AdsList");

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
              <H3>Please give the Price of your Product in DHS. </H3>
            </View>
            <Item style={{ marginTop:15 }} >
              <Input placeholder="Price" value={this.state.post_ad.price}
                onChangeText={(text) => this.setState({ 
                  post_ad : {
                    id_tenant: 1,
                    id_adv: this.state.post_ad.id_adv,
                    title: this.state.post_ad.title,
                    description: this.state.post_ad.description,
                    price: text
                  }
                })}
              />
            </Item>
            <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button
              onPress={() => this.postAd()} 
                style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
