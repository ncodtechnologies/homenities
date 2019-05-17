import React, { Component }  from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import { Container, Header, Content, Left, Icon, Title, Right, Text, Body, H2, Button } from 'native-base';
import { connect } from "react-redux";
import HomeScreen from "./screen";
import { reqFlatInspection } from "../action";

class _Container extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    
  };

  

  componentDidUpdate = () => {
    if (!this.props.flatInspection.loading) {
      if(this.props.flatInspection.success)
      {
        alert("Your request is being registered. Our Agent will arrive for inspection on the date requested. Your reference no. is "+this.props.flatInspection.data.refNo);
        this.props.navigation.navigate("ContractHome");
      }
      else if(this.props.flatInspection.error)
        alert(this.props.flatInspection.error)
      }
  }

  render = () => {
    return (
      <View style={{ flex: 1 }}>
        <HomeScreen {...this.props}  />
      </View>
    );
  };
}

const mapStateToProps = ({ reqFlatInspection, token, flatInspection }) => ({
  reqFlatInspection,
  flatInspection,
  token
});
const mapDispatchToProps = dispatch => ({
  reqFlatInspection: data => dispatch(reqFlatInspection(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Container);

