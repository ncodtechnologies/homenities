import React, { Component }  from 'react';
import { connect } from "react-redux";
import HomeScreen from "./screen";

class _Container extends Component {
  componentDidMount = () => {
    console.log("/////////params : "+JSON.stringify(this.props.navigation.state.params))
  };

  render = () => {
    return (
        <HomeScreen {...this.props} />
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
