import React, { Component }  from 'react';
import { Alert, ActivityIndicator, View  } from 'react-native';
import { getSRCompanyList } from "../action";
import { connect } from "react-redux";
import HomeScreen from "./screen";
import AlertView from "../../../../styled/alert-view";
import Loader from "../../../../styled/loader";

class _Container extends Component {
  componentDidMount = () => {
    this.props.getSRCompanyList(this.props.navigation.state.params.service_type);
    console.log("///////////////"+JSON.stringify(this.props.navigation.state.params))
  };

  render = () => {
    const { srCompanyList } = this.props;
    const { loading, error, success } = srCompanyList;
    return (
      <View style={{ flex: 1 }}>
        <Loader loading={loading} />
        { (!loading && srCompanyList.success) ? (<HomeScreen {...this.props} />) : ( <View></View> )  }
        {error && <AlertView type="error" />}
      </View>
    );
  };
}

const mapStateToProps = ({ srCompanyList, token }) => ({
  srCompanyList,
  token
});
const mapDispatchToProps = dispatch => ({
  getSRCompanyList: payload => dispatch(getSRCompanyList(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Container);