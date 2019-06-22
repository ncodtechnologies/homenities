import React, { Component } from "react";
import { Alert, ActivityIndicator } from "react-native";
import LoginScreen from "./screen";
import { connect } from "react-redux";
import { loginUser } from "../action";

class Container extends Component {
  componentDidMount = () => {
    if (this.props.token) {
      this.props.navigation.navigate("Home");
    }
  };

  componentDidUpdate() {
    if (!this.props.login.loading) {
      if(this.props.login.success)
        this.props.navigation.navigate("OTP");
      }
  }

  render = () =>
      <LoginScreen {...this.props} />
}
const mapStateToProps = ({ token, login }) => ({
  token,
  login
});
const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(loginUser(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
