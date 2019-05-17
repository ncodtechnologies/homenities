import React, { Component }  from 'react';
import { View  } from 'react-native';
import { loadPromoOffers } from "../action";
import { connect } from "react-redux";
import HomeScreen from "./screen";
import AlertView from "../../../styled/alert-view";
import Loader from "../../../styled/loader";

class _Container extends Component {
  componentDidMount = () => {
    const id_shop = this.props.navigation.state.params.id_shop;
    this.props.loadPromoOffers(id_shop);
  };

  render = () => {
    const { promoOffers } = this.props;
    const { loading, error, success } = promoOffers;
    return (
      <View style={{ flex: 1 }}>
        <Loader loading={loading} />
        { (!loading && promoOffers.success) ? (<HomeScreen {...this.props} />) : ( <View></View> )  }
        {error && <AlertView type="error" />}
      </View>
    );
  };
}

const mapStateToProps = ({ promoOffers, token }) => ({
  promoOffers,
  token
});
const mapDispatchToProps = dispatch => ({
  loadPromoOffers: id_shop => dispatch(loadPromoOffers(id_shop)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Container);

