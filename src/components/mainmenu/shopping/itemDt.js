import React, { Component } from 'react';
import {Image, ListView, View, ActivityIndicator} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';
import { connect } from "react-redux";
import { addQty, lessQty } from "./action";

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
      if(items[i].item.id_item == id_item)
      {
        return items[i].item.qty;
      }
    } 
    return 0;
  }

  getItem = (id_item) => 
  {
    const data = this.props.shoppingItems;
    const __items = data.data;
    i = 0, ii = __items.length;
    for(i; i < ii; i++)
    {
      if(__items[i].id_item === id_item)
      {
        console.log("item true : " + JSON.stringify(__items[i]));
        return __items[i];
      }
    } 
    return null;
  }

  render() {
    const id_item = this.props.navigation.state.params.id_item;
    const item = this.getItem(id_item);
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
            <Right>
              <Button transparent  onPress={()=>this.props.navigation.navigate("ShoppingCart", {id_shop : this.props.navigation.state.params.id_shop})}>
                <Icon name="cart" />
              </Button>
            </Right>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Left>
                  <Text>{item.item}</Text>
                  <Text note>AED {item.price} / {item.unit}</Text>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../../../Assets/orange.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left />
              <Body>
                <Button transparent>
                  <Text>{item.description}</Text>
                </Button>
              </Body>
              <Right>
                <View style={{flexDirection:'row', width: 120, alignItems:'flex-end'}} >
                  <Button light  onPress={() => this.props.addQty(item)} >
                    <Icon name='add' />
                  </Button>
                  <Text style={{ padding: 10 }} >{this.getCnt(item.id_item)}</Text>
                  <Button light  onPress={() => this.props.lessQty(item.id_item)} >
                    <Icon name='remove' />
                  </Button>
                </View>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({  token, shoppingItems, shoppingOrder, shoppingCart }) => ({
  token,
  shoppingItems,
  shoppingOrder,
  shoppingCart
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
