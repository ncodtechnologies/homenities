import React, { Component } from 'react';
import {AsyncStorage, ListView, View, ActivityIndicator} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Thumbnail, Button, Title } from 'native-base';
import { connect } from "react-redux";
import { addQty, lessQty, reqOrder, saveOrder } from "./action";

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class ShoppingFrm extends Component {

  componentDidMount = () => {

  };

  getCnt = (id_item) => 
  {
    const items = this.props.shoppingCart.items;
    i = 0, ii = items.length;
    for(i; i < ii; i++)
    {
      if(items[i].item.id_item === id_item)
      {
        return items[i].item.qty;
      }
    } 
    return 0;
  }
  
  getSum = (id_shop) => 
  {
    const items = this.props.shoppingCart.items;
    i = 0, ii = items.length;
    var sum = 0;
    for(i; i < ii; i++)
    {
      if(items[i].item.id_shop === id_shop)
      {
        sum += items[i].item.qty*items[i].item.price;
      }
    } 
    return sum;
  }

  orderSubmit = () => {
    const items = this.props.shoppingCart.items;
    const id_shop = this.props.navigation.state.params.id_shop;
    var _items = [];
    items.forEach(item => {
      if(item.item.id_shop == id_shop)
        _items.push(item.item);      
    });
    const order = {
      id_shop,
      items: _items
    }
    this.props.reqOrder(JSON.stringify(order));
    alert("Order Submitted");
    this.props.navigation.navigate("ShoppingShopList");
  }

  render() {
    const id_shop = this.props.navigation.state.params.id_shop;
    return (
      <Container>
      <Header  style={{ backgroundColor: '#0574CA' }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>

          <Body>
            <Title>Thalabat-el-Bait1</Title>
          </Body>
          <Right />
      </Header>
        <Content>
          <ListView
      rightOpenValue={-75}
      dataSource={ds.cloneWithRows(this.props.shoppingCart.items )}
      renderRow={data =>
        (data.item.id_shop == id_shop) ? 
        <ListItem avatar >
        <Left> 
          <Thumbnail source={require('../../../Assets/orange.png')} />
        </Left>
        <Body style={{ marginLeft: 15 }} >
          <Text>{data.item.item}</Text>
          <View style={{flexDirection:'row', width: 120, alignItems:'flex-end'}} >
            <Button transparent  onPress={() => this.props.addQty(data.item)} >
              <Icon name='add' />
            </Button>
            <Text style={{ padding: 10, fontWeight: 'bold' }} >{this.getCnt(data.item.id_item)}</Text>
            <Button transparent  onPress={() => this.props.lessQty(data.item.id_item)} >
              <Icon name='remove' />
            </Button>
          </View>
        </Body>
        <Right>
          <Text style={{ padding: 10, fontWeight: 'bold' }} >AED {item.price * this.getCnt(data.item.id_item)}</Text>
        </Right>
        </ListItem>
      :
      <View />
      }
    />
    
        <ListItem >
          <Left>
            <Text style={{ padding: 10, fontWeight: 'bold' }}>Total</Text>
          </Left>
          <Right style={{ alignItems:'flex-end' }} >
            <Text style={{ padding: 10, fontWeight: 'bold', width: 150, textAlign:'right' }} >AED {this.getSum(id_shop)}</Text>
          </Right>
        </ListItem>
          <Button  full success onPress={()=>this.orderSubmit()} >
            <Text>Submit Order</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({  token, shoppingCart, shoppingOrder }) => ({
  token,
  shoppingCart,
  shoppingOrder
});

const mapDispatchToProps = dispatch => ({
  addQty: payload => dispatch(addQty(payload)),
  lessQty: payload => dispatch(lessQty(payload)),
  reqOrder: payload => dispatch(reqOrder(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingFrm);
