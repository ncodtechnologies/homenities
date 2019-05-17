import React, { Component }  from 'react';
import { ListView, FlatList, ActivityIndicator, View, Image } from 'react-native';
import { Container, Header, Content, Left, Icon, Title, Right, Text, Body, H2, Button, ListItem } from 'native-base';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default ({ navigation, srCompanyList }) => {
  
  _to_page = navigation.state.params.to_page;
  _service_type = navigation.state.params.service_type;

  return (
  <Container>
  <Header  style={{ backgroundColor: '#0574CA' }}>
      <Left>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name='arrow-back' />
        </Button>
      </Left>
      <Body>
        <Title>Select Company</Title>
      </Body>
      <Right>
    </Right>
  </Header>
      <Content>
      {srCompanyList.loading ? (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
     ) : (
          <ListView
            rightOpenValue={-75}
            dataSource={ds.cloneWithRows(srCompanyList.data)}
            renderRow={data =>
              
            <ListItem onPress={()=>navigation.navigate(_to_page,{ id_company: data.id_company, service_type: _service_type })} >
              <Body style={{ marginLeft: 15 }} >
                <Text>{data.company}</Text>
              </Body>
              <Right>
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
};
