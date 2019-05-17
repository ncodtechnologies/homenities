import React, { Component }  from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import { Container, Header, Content, Left, Icon, Title, Right, Text, Body, H2, Button } from 'native-base';
import { connect } from "react-redux";
import HomeScreen from "./screen";
import { reqFurnitureMove } from "../action";

class _Container extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    
  };

  

  componentDidUpdate = () => {
    if (!this.props.furnitureMove.loading) {
      if(this.props.furnitureMove.success)
      {
        alert("Your request is being registered. Your reference no. is "+this.props.furnitureMove.data.refNo);
        this.props.navigation.navigate("ContractHome");
      }
      else if(this.props.furnitureMove.error)
        alert(this.props.furnitureMove.error)
      }
  }

  render = () => {
    return (
      <View style={{ flex: 1 }}>
        <HomeScreen {...this.props}  />
      </View>
    );
  };
}

const mapStateToProps = ({ reqFurnitureMove, token, furnitureMove }) => ({
  reqFurnitureMove,
  furnitureMove,
  token
});
const mapDispatchToProps = dispatch => ({
  reqFurnitureMove: data => dispatch(reqFurnitureMove(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Container);

