import React, { Component }  from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import { Container, Header, Content, Left, Icon, Title, Right, Text, Body, H2, Button } from 'native-base';
import { connect } from "react-redux";
import HomeScreen from "./screen";
import { reqMaintenance } from "../action";

class _Container extends Component {
  componentDidMount = () => {
    console.log("/////////params : "+JSON.stringify(this.props.navigation.state.params))
  };
  
  componentDidUpdate = () => {
    if (!this.props.maintenance.loading) {
      if(this.props.maintenance.success)
      {
        alert("Your request is being registered. Our Agent will arrive for inspection on the date requested. Your reference no. is "+this.props.maintenance.data.refNo);
        this.props.navigation.navigate("SRHome");
      }
      else if(this.props.maintenance.error)
        alert(this.props.maintenance.error)
      }
  }

  render = () => {
    return (
      <View style={{ flex: 1 }}>
        <HomeScreen {...this.props} />
      </View>
    );
  };
}

const mapStateToProps = ({ reqMaintenance, token }) => ({
  reqMaintenance,
  token
});
const mapDispatchToProps = dispatch => ({
  reqMaintenance: data => dispatch(reqMaintenance(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Container);

