import React, { Component } from 'react';
import {View} from 'react-native';
import { Container, Header, Content, Left, Right, Body, Title, Button, Text, H3, ListItem, CheckBox, Icon } from 'native-base';

export default class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      types : [{
        type: "Arabic",
        selected : false
      },{
        type: "English",
        selected : false
      },{
        type: "German",
        selected : false
      },{
        type: "Music",
        selected : false
      },{
        type: "Mathematics",
        selected : false
      }]
    };
  }
  

  onCheckBoxPress = i => {
    this.setState(state => {
      
      const types = state.types.map((type, j) => {
        if (j === i) {
          return {
            type: type.type,
            selected : !type.selected
          };
        } else {
          return type;
        }
      });

      return {
        types,
      };
    });
  };

  checkPlanSel(i) {
    return this.state.types[i].selected;
  }

  renderList() {
    return this.state.types.map((type, index) => {
        return (
            <ListItem>
              <CheckBox checked={this.checkPlanSel(index)} color="green"
              onPress={()=>this.onCheckBoxPress(index)}
              />
              <Body>
                <Text>{type.type}</Text>
              </Body>
            </ListItem>
        );
    });
  }

  serialiseSelection = () => 
  {
    var selectedTypes = [];
    for(i=0;i<this.state.types.length; i++)
    {
      if(this.state.types[i].selected)
      selectedTypes.push(this.state.types[i].type)
    }
    return selectedTypes.join(",");
  }

  render() {
    return (
      <Container>
        <Header  style={{ backgroundColor: '#0574CA' }}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Tutoring</Title>
            </Body>
            <Right />
        </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3>Tutors for adults and children in:  </H3>
            </View>
            <View>
            {
              this.renderList()
            }
            </View>
            <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button
                onPress={() => this.props.navigation.navigate("TutoringDate",{ selectedTypes: this.serialiseSelection(), id_company: this.props.navigation.state.params.id_company })}
                style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
