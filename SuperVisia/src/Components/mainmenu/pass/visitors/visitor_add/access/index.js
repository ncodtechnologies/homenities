import React, { Component }  from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import { Container, Header, Content, Left, Icon, Title, Right, Text, Body, H2, Button } from 'native-base';
import { connect } from "react-redux";
import HomeScreen from "./screen";
import { addVisitor } from "../action";

class _Container extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    console.log("/////////params : "+JSON.stringify(this.props.navigation.state.params))

  };

  componentDidUpdate() {
    if (!this.props.visitorAdd.loading) {
      if(this.props.visitorAdd.success)
        this.props.navigation.navigate("VisitorList");
      else if(this.props.visitorAdd.error)
        alert(this.props.visitorAdd.error)
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

const mapStateToProps = ({ addVisitor, token, visitorAdd }) => ({
  addVisitor,
  token,
  visitorAdd
});
const mapDispatchToProps = dispatch => ({
  addVisitor: data => dispatch(addVisitor(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Container);

