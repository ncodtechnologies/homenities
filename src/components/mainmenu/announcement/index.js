import React, { Component }  from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import QRCode from 'react-native-qrcode';
import { Container, Header, Content, Left, Icon, Title, Right, Text, Body, H2, Button } from 'native-base';
import { loadAnnouncements } from "./action";
import { connect } from "react-redux";
import HomeScreen from "./screen";
import AlertView from "../../styled/alert-view";
import Loader from "../../styled/loader";

class _Container extends Component { 
  componentDidMount = () => {
    this.props.loadAnnouncements("123");
  };

  render = () => {
    const { announcements } = this.props;
    const { loading, error, success } = announcements;
    return (
      <View style={{ flex: 1 }}>
        <Loader loading={loading} />
        { (!loading && announcements.success) ? (<HomeScreen {...this.props} />) : ( <View></View> )  }
        {error && <AlertView type="error" />}
      </View>
    );
  };
}

const mapStateToProps = ({ announcements, token }) => ({
  announcements,
  token
});
const mapDispatchToProps = dispatch => ({
  loadAnnouncements: payload => dispatch(loadAnnouncements(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Container);

