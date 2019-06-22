import React, { Component }  from 'react';
import { ListView, FlatList, ActivityIndicator, View, Image } from 'react-native';
import { Container, Header, Content, Left, Icon, Title, Right, Text, Body, H2, Button, ListItem } from 'native-base';
import { Card, CardItem} from 'native-base';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default ({ navigation, announcements }) => (
  
  <Container>
  <Header  style={{ backgroundColor: '#0574CA' }}>
      <Left>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name='arrow-back' />
        </Button>
      </Left>
      <Body>
        <Title>Announcement</Title>
      </Body>
      <Right>
    </Right>
  </Header>
      <Content>
      {announcements.loading ? (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
     ) : (
          <ListView
            rightOpenValue={-75}
            dataSource={ds.cloneWithRows(announcements.data)}
            renderRow={data =>
              
            <Card style={{ borderTopWidth: 5, borderColor: '#0574CA' }}>
              <CardItem header>
                <Text>{data.title}</Text>
                <Right>
                </Right>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                  {data.body}
                  </Text>
                </Body>
              </CardItem>
              <CardItem footer>
                <Text>{data.date}</Text>
              </CardItem>
            </Card>

            }
          />
     )}
        </Content>
      </Container>
);
