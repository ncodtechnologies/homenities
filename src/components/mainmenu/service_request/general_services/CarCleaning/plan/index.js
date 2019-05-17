import React, { Component }  from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import { connect } from "react-redux";
import HomeScreen from "./screen";

class _Container extends Component {
  componentDidMount = () => {
    
  };

  render = () => {
    return (
      <View style={{ flex: 1 }}>
        <HomeScreen {...this.props} />
      </View>
    );
  };
}

const mapStateToProps = ({  token }) => ({
  token
});
const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Container);

