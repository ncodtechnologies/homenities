import React, { Component }  from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import QRCode from 'react-native-qrcode';
import { Container, Header, Content, Left, Icon, Title, Right, Text, Body, H2, Button } from 'native-base';
import { getTenantDt } from "./action";
import { connect } from "react-redux";
import HomeScreen from "./screen";
import AlertView from "../../../styled/alert-view";
import Loader from "../../../styled/loader";

class _Container extends Component {
  componentDidMount = () => {
    this.props.getTenantDt(this.props.token);
  };

  render = () => {
    const { tenant } = this.props;
    const { loading, error } = tenant;
    return (
      <View style={{ flex: 1 }}>
        <Loader loading={loading} />
        { (!loading && tenant.success) ? (<HomeScreen {...this.props} />) : ( <View></View> )  }
        {error && <AlertView type="error" />}
      </View>
    );
  };
}

const mapStateToProps = ({ tenant, token }) => ({
  tenant,
  token
});
const mapDispatchToProps = dispatch => ({
  getTenantDt: payload => dispatch(getTenantDt(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Container);

