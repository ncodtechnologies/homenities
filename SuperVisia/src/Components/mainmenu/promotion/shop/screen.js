import React, { Component }  from 'react';
import { ListView, FlatList, ActivityIndicator, View, Image } from 'react-native';
import { Container, Header, Content, Left, Icon, Title, Right, Text, Body, H2, Button, ListItem,
          Card, CardItem, Thumbnail
} from 'native-base';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default ({ navigation, promoShops }) => (
  
  <Container>
  <Header  style={{ backgroundColor: '#0574CA' }}>
      <Left>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name='arrow-back' />
        </Button>
      </Left>
      <Body>
        <Title>Shop</Title>
      </Body>
      <Right>
    </Right>
  </Header>
      <Content>
      {promoShops.loading ? (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
     ) : (
          <ListView
            rightOpenValue={-75}
            dataSource={ds.cloneWithRows(promoShops.data)}
            renderRow={data =>
              
            <Card  >
              <CardItem>
                <Left>
                  <Body>
                    <Text>{data.shop}</Text>
                    <Text note>Dubai</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={require("../../../../Assets/Images/Ads/ad1.jpg")} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                    <Text>{data.description}</Text>
                </Left>
                <Right>
                  <Button transparent onPress={()=>navigation.navigate("PromoOfferList",{ id_shop: data.id_shop })}>
                    <Text>Offers</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>

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
