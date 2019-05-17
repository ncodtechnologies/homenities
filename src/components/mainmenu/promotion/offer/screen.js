import React, { Component }  from 'react';
import { ListView, FlatList, ActivityIndicator, View, Image } from 'react-native';
import { Container, Header, Content, Left, Icon, Title, Right, Text, Body, H2, Button, ListItem } from 'native-base';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default ({ navigation, promoOffers }) => (
  
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
      {promoOffers.loading ? (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
     ) : (
          <ListView
            rightOpenValue={-75}
            dataSource={ds.cloneWithRows(promoOffers.data)}
            renderRow={data =>
              
            <ListItem avatar  onPress={()=>{
              (!data.redeemed_date) ? 
              navigation.navigate("PromoOfferDt",{ id_offer: data.id_offer })
              :
              null
            }} >
              <Body style={{ marginLeft: 15 }} >
                <Text>{data.offer}</Text>
              </Body>
              <Right>
                {!data.redeemed_date ? ( 
                <Text/>
                ) : (<Text style={{ color:"red" }} >Redeemed</Text>)}
              </Right>
            </ListItem>
            }
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
          />
     )}
        </Content>
      </Container>
);
