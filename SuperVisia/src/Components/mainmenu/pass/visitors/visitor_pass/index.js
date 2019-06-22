import React, { Component }  from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import QRCode from 'react-native-qrcode';
import { Container, Header, Content, Left, Icon, Title, Right, Text, Body, H2, Button } from 'native-base';
import { getVisitorDt } from "./action";
import { connect } from "react-redux";
import HomeScreen from "./screen";
import AlertView from "../../../../styled/alert-view";
import Loader from "../../../../styled/loader";

class _Container extends Component {
  componentDidMount = () => {
    console.log("////////////////////params "+ JSON.stringify(this.props.navigation.state.params));
  };

  render = () => {
    const { visitorPass } = this.props;
    const { loading, error } = visitorPass;
    return (
      <View style={{ flex: 1 }}>
        <Loader loading={loading} />
        <HomeScreen {...this.props} />
        {error && <AlertView type="error" />}
      </View>
    );
  };
}

const mapStateToProps = ({ visitorPass, token }) => ({
  visitorPass,
  token
});
const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Container);

