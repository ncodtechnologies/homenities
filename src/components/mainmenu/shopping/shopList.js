import React, { Component } from 'react';
import {Alert, ListView, View, ActivityIndicator} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button, Title } from 'native-base';
import { connect } from "react-redux";
import { getShopList } from "./action";

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class ShoppingListFrm extends Component {

  componentDidMount = () => {
    this.props.getShopList("1");
  };

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
            <Title>Thalabat-el-Bait</Title>
          </Body>
          <Right />
      </Header>
        <Content>
        {(this.props.shoppingShopList.loading || !this.props.shoppingShopList.success) ? (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
     ) : (<ListView
      rightOpenValue={-75}
      dataSource={ds.cloneWithRows(this.props.shoppingShopList.data)}
      renderRow={data =>
        
      <ListItem onPress={() => this.props.navigation.navigate("ShoppingItemList",{id_shop : data.id_shop}) }   >
        <Body style={{ marginLeft: 15 }} >
          <Text>{data.shop}</Text>
        </Body>
      </ListItem>
      }
    />)
     }
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({  token, shoppingShopList }) => ({
  token,
  shoppingShopList
});

const mapDispatchToProps = dispatch => ({
  getShopList: payload => dispatch(getShopList(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingListFrm);

