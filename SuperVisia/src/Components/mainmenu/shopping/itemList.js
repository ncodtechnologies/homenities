import React, { Component } from 'react';
import {Alert, ListView, View, ActivityIndicator} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Thumbnail, Button, Title } from 'native-base';
import { connect } from "react-redux";
import { addQty, lessQty, getItemList, reqOrder } from "./action";
import { IconButton } from '../../../../node_modules/react-native-paper';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

class ShoppingFrm extends Component {

  componentDidMount = () => {
    const id_shop = this.props.navigation.state.params.id_shop;
    this.props.getItemList(id_shop);
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
          <Right>
            <Button transparent  onPress={()=>this.props.navigation.navigate("ShoppingCart", {id_shop : this.props.navigation.state.params.id_shop})}>
              <Icon name="cart" />
            </Button>
          </Right>
      </Header>
        <Content>
        {(this.props.shoppingItems.loading || !this.props.shoppingItems.success) ? (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
     ) : (<ListView
      rightOpenValue={-75}
      dataSource={ds.cloneWithRows(this.props.shoppingItems.data)}
      renderRow={data =>
        
      <ListItem avatar  >
        <Left > 
          <Thumbnail source={require('../../../Assets/orange.png')}
             onPress={()=>this.props.navigation.navigate("ShoppingItemDt", {id_shop : this.props.navigation.state.params.id_shop, id_item: data.id_item })}
          />
        </Left>
        <Body style={{ marginLeft: 15 }} >
          <Text
              onPress={()=>this.props.navigation.navigate("ShoppingItemDt", {id_shop : this.props.navigation.state.params.id_shop, id_item: data.id_item })}
          >{data.item}</Text>
          <Text note> AED { data.price } per { data.unit } </Text>
        </Body>
        <Right>
          <View style={{flexDirection:'row', width: 120, alignItems:'flex-end'}} >
            <Button light  onPress={() => this.props.addQty(data)} >
              <Icon name='add' />
            </Button>
            <Text style={{ padding: 10 }} >{this.getCnt(data.id_item)}</Text>
            <Button light  onPress={() => this.props.lessQty(data.id_item)} >
              <Icon name='remove' />
            </Button>
          </View>
        </Right>
      </ListItem>
      }
    />)
     }
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({  token, shoppingCart, shoppingItems, shoppingOrder }) => ({
  token,
  shoppingCart,
  shoppingItems,
  shoppingOrder
});

const mapDispatchToProps = dispatch => ({
  addQty: payload => dispatch(addQty(payload)),
  lessQty: payload => dispatch(lessQty(payload)),
  getItemList: payload => dispatch(getItemList(payload)),
  reqOrder: payload => dispatch(reqOrder(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingFrm);
