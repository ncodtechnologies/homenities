import React, { Component }  from 'react';
import { ListView, FlatList, ActivityIndicator, View, Image } from 'react-native';
import { Container, Header, Content, Left, Icon, Title, Right, Text, Body, H2, Button, ListItem } from 'native-base';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const CHECK_ICON = require('../../../../../Assets/Images/Home/check_icon.png');
const PENDING_ICON = require('../../../../../Assets/Images/Home/pending_icon.png');

export default ({ navigation, visitorList }) => (
  
  <Container>
  <Header  style={{ backgroundColor: '#0574CA' }}>
      <Left>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name='arrow-back' />
        </Button>
      </Left>
      <Body>
        <Title>Guests</Title>
      </Body>
      <Right>
      <Button transparent onPress={() => navigation.navigate("AddVisitorName")} >
        <Text> Add </Text>
      </Button>
    </Right>
  </Header>
      <Content>
      {visitorList.loading ? (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
     ) : (
          <ListView
            rightOpenValue={-75}
            dataSource={ds.cloneWithRows(visitorList.data)}
            renderRow={data =>
              
            <ListItem avatar  onPress={()=>navigation.navigate("VisitorPass",{ visitor: data })} >
              <Body style={{ marginLeft: 15 }} >
                <Text>{data.name}</Text>
                <Text note>Valid on {data.date}</Text>
              </Body>
              <Right>
                <View style={{width: 20, height: 20}} >
                  <Image source={data.approval == "0" ? PENDING_ICON : CHECK_ICON} style={{height: 20, width: null}}/>
                </View>
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
