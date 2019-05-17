import React, { Component }  from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import { getSRList } from "../action";
import { connect } from "react-redux";
import HomeScreen from "./screen";
import AlertView from "../../../../styled/alert-view";
import Loader from "../../../../styled/loader";

class _Container extends Component {
  componentDidMount = () => {
    this.props.getSRList("123");
  };

  render = () => {
    const { serviceReqList } = this.props;
    const { loading, error, success } = serviceReqList;
    return (
      <View style={{ flex: 1 }}>
        <Loader loading={loading} />
        { (!loading && serviceReqList.success) ? (<HomeScreen {...this.props} />) : ( <View></View> )  }
        {error && <AlertView type="error" />}
      </View>
    );
  };
}

const mapStateToProps = ({ serviceReqList, token }) => ({
  serviceReqList,
  token
});
const mapDispatchToProps = dispatch => ({
  getSRList: payload => dispatch(getSRList(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Container);

