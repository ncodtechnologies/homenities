import React, { Component }  from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import { Container, Header, Content, Left, Icon, Title, Right, Text, Body, H2, Button } from 'native-base';
import { loadChequeReminder } from "../action";
import { connect } from "react-redux";
import HomeScreen from "./screen";
import AlertView from "../../../styled/alert-view";
import Loader from "../../../styled/loader";

class _Container extends Component {
  componentDidMount = () => {
    this.props.loadChequeReminder("123");
  };

  render = () => {
    const { chequeReminder } = this.props;
    const { loading, error, success } = chequeReminder;
    return (
      <View style={{ flex: 1 }}>
        <Loader loading={loading} />
        { (!loading && chequeReminder.success) ? (<HomeScreen {...this.props} />) : ( <View></View> )  }
        {error && <AlertView type="error" />}
      </View>
    );
  };
}

const mapStateToProps = ({ chequeReminder, token }) => ({
  chequeReminder,
  token
});
const mapDispatchToProps = dispatch => ({
  loadChequeReminder: payload => dispatch(loadChequeReminder(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Container);

