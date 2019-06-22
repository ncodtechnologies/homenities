import React, { Component }  from 'react';
import { Alert, ActivityIndicator, View  } from 'react-native';
import { connect } from "react-redux";
import HomeScreen from "./screen";
import { reqGeneralService } from "../action";

class _Container extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    

  };

  componentDidUpdate = () => {
    console.log("///////General Service Request update");
    if (!this.props.genServiceRequest.loading) {
      if(this.props.genServiceRequest.success)
      {
        Alert("Service Request","Service requested successfully")
        this.props.navigation.navigate("SRHome");
      }
      else if(this.props.genServiceRequest.error)
        alert(this.props.genServiceRequest.error)
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

const mapStateToProps = ({ reqGeneralService, token }) => ({
  reqGeneralService,
  token
});
const mapDispatchToProps = dispatch => ({
  reqGeneralService: data => dispatch(reqGeneralService(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_Container);

