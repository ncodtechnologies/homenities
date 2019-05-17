import React, { Component } from "react";
import { Alert, ActivityIndicator } from "react-native";
import MainmenuScreen from "./screen";
import { connect } from "react-redux";

class Container extends Component {
  componentDidMount = () => {
    
  };

  componentDidUpdate() {
    
  }

  render = () =>
      <MainmenuScreen {...this.props} />
}
const mapStateToProps = ({ token }) => ({
  token
});
const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
