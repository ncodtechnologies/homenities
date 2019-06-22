import React, { Component }  from 'react';
import { ListView, FlatList, ActivityIndicator, View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Right, Title, Button, Icon, Input } from 'native-base'
import { redeemOffer } from '../action';

export default ({ navigation, promoOfferDt }) => 
(
  <Container>
  <Header  style={{ backgroundColor: '#0574CA' }}>
      <Left>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name='arrow-back' />
        </Button>
      </Left>
      <Body>
        <Title>Offers</Title>
      </Body>
      <Right>
    </Right>
  </Header>
      <Content>
      {promoOfferDt.loading ? (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
     ) : (
      <Card>
        <CardItem header>
          <Text>{promoOfferDt.data.offer}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              {promoOfferDt.data.description}
            </Text>
            <Input placeholder="Enter Code" />
          </Body>
        </CardItem>
        <CardItem footer>
          <Button onClick={redeemOffer} >
            <Text>Redeem</Text>
          </Button>
        </CardItem>
     </Card>
     )}
        </Content>
      </Container>
)
