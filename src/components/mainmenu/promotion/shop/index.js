import React, { Component }  from 'react';
import { View  } from 'react-native';
import { loadPromoShops } from "../action";
import { connect } from "react-redux";
import HomeScreen from "./screen";
import AlertView from "../../../styled/alert-view";
import Loader from "../../../styled/loader";

class _Container extends Component {
  componentDidMount = () => {
    this.props.loadPromoShops("123");
  };

  render = () => {
    const { promoShops } = this.props;
    const { loading, error, success } = promoShops;
    return (
      <View style={{ flex: 1 }}>
        <Loader loading={loading} />
        { (!loading && promoShops.success) ? (<HomeScreen {...this.props} />) : ( <View></View> )  }
        {error && <AlertView type="error" />}
      </View>
    );
  };
}

const mapStateToProps = ({ promoShops, token }) => ({
  promoShops,
  token
});
const mapDispatchToProps = dispatch => ({
  loadPromoShops: payload => dispatch(loadPromoShops(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Container);

