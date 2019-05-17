import React, { Component } from 'react';
import {View} from 'react-native';
import { Container, Header, Content, Left, Right, Body, Title, Button, Text, H3, ListItem, CheckBox, Icon } from 'native-base';

export default class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      types : [{
        type: "Sea Food",
        selected : false
      },{
        type: "Arabic",
        selected : false
      },{
        type: "Italian",
        selected : false
      },{
        type: "International",
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
              <Title>Personal Chef</Title>
            </Body>
            <Right />
        </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3>As a personal chef, you will spend your days cooking for people who do not have the time to do so themselves but do have the money to pay someone to do it for them. If you want to stand out from the crowd, offer meal plans that suit various dietary requirements, such as: </H3>
            </View>
            <View>
            {
              this.renderList()
            }
            </View>
            <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button
                onPress={() => this.props.navigation.navigate("ChefDate",{ selectedTypes: this.serialiseSelection(), id_company: this.props.navigation.state.params.id_company })}
                style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
