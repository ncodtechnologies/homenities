import React, { Component }  from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import { Container, Header, Content, Left, Icon, Title, Right, Text, Body, H2, Button } from 'native-base';
import { connect } from "react-redux";
import HomeScreen from "./screen";

class _Container extends Component {
  componentDidMount = () => {

  };

  render = () => {
    return (
      <View style={{ flex: 1 }}>
        <HomeScreen {...this.props} />
      </View>
    );
  };
}

const mapStateToProps = ({ addVisitor, token }) => ({
  addVisitor,
  token
});
const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Container);

