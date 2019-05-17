import React, { Component }  from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import { loadVisitorList } from "./action";
import { connect } from "react-redux";
import HomeScreen from "./screen";
import AlertView from "../../../../styled/alert-view";
import Loader from "../../../../styled/loader";

class _Container extends Component {
  componentDidMount = () => {
    this.props.loadVisitorList(this.props.token);
  };

  render = () => {
    const { visitorList } = this.props;
    const { loading, error, success } = visitorList;
    return (
      <View style={{ flex: 1 }}>
        <Loader loading={loading} />
        { (!loading && visitorList.success) ? (<HomeScreen {...this.props} />) : ( <View></View> )  }
        {error && <AlertView type="error" />}
      </View>
    );
  };
}

const mapStateToProps = ({ visitorList, token }) => ({
  visitorList,
  token
});
const mapDispatchToProps = dispatch => ({
  loadVisitorList: payload => dispatch(loadVisitorList(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Container);

