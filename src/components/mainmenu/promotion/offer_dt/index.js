import React, { Component }  from 'react';
import { View  } from 'react-native';
import { loadPromoOfferDt, redeemOffer } from "../action";
import { connect } from "react-redux";
import HomeScreen from "./screen";
import AlertView from "../../../styled/alert-view";
import Loader from "../../../styled/loader";

class _Container extends Component {
  componentDidMount = () => {
    const id_offer = this.props.navigation.state.params.id_offer;
    this.props.loadPromoOfferDt(id_offer);
  };

  render = () => {
    const { promoOfferDt } = this.props;
    const { loading, error, success } = promoOfferDt;
    return (
      <View style={{ flex: 1 }}>
        <Loader loading={loading} />
        { (!loading && promoOfferDt.success) ? (<HomeScreen {...this.props} />) : ( <View></View> )  }
        {error && <AlertView type="error" />}
      </View>
    );
  };
}

const mapStateToProps = ({ promoOfferDt, token }) => ({
  promoOfferDt,
  token
});

const mapDispatchToProps = dispatch => ({
  loadPromoOfferDt: id_offer => dispatch(loadPromoOfferDt(id_offer)),
  redeemOffer: data => dispatch(redeemOffer(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Container);
