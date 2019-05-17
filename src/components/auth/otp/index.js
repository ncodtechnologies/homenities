import React, { Component } from "react";
import { Alert } from "react-native";
import OTPScreen from "./screen";
import { connect } from "react-redux";
import { checkOTP } from "../action";

class Container extends Component {
  componentDidMount = () => {
    
  };
  componentDidUpdate() {
    if (!this.props.otp.loading) {
      if(this.props.otp.success)
        this.props.navigation.navigate("MainMenu");
      }
  }

  render = () =>
      <OTPScreen {...this.props} />
}
const mapStateToProps = ({ token, otp }) => ({
  token,
  otp
});
const mapDispatchToProps = dispatch => ({
  checkOTP: data => dispatch(checkOTP(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
