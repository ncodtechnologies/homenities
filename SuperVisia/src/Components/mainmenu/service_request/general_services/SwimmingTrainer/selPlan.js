import React, { Component } from 'react';
import {View, Alert} from 'react-native';
import { Container, Header, Content, CheckBox, ListItem, Button, Text, H3, Left, Right, Icon, Body, Title } from 'native-base';

export default class SelPlan extends Component {

  constructor(props) {
    super(props);


    this.state = {
      rate : 100,
      amount : 0,
      days : [{
        id_day: 1,
        day: "Sunday",
        selected : false
      },{
        id_day: 2,
        day: "Monday",
        selected : false
      },{
        id_day: 3,
        day: "Tuesdsy",
        selected : false
      },{
        id_day: 4,
        day: "Wednesday",
        selected : false
      },{
        id_day: 5,
        day: "Thursday",
        selected : false
      },{
        id_day: 6,
        day: "Friday",
        selected : false
      },{
        id_day: 7,
        day: "Saturday",
        selected : false
      }]
    };
  }

  
  calcAmount(){
    var i=0;
    var amount = 0;

    for(i=0;i<this.state.days.length; i++)
      amount += this.state.rate * ( this.state.days[i].selected ? 1 : 0 );
    
    this.state.amount = amount;
  }

  onCheckBoxPress = i => {
    this.setState(state => {
      
      const days = state.days.map((day, j) => {
        if (j === i) {
          return {
            id_day: day.id_day,
            day: day.day,
            selected : !day.selected
          };
        } else {
          return day;
        }
      });

      return {
        days,
      };
    }, () => {
      this.calcAmount();
  });
  };

  checkPlanSel(i) {
    return this.state.days[i].selected;
  }
  
  serialiseSelection = () => 
  {
    var selectedDays = [];
    for(i=0;i<this.state.days.length; i++)
    {
      if(this.state.days[i].selected)
      selectedDays.push(this.state.days[i].day)
    }
    return selectedDays.join(",");
  }

  goToTime(){
    this.props.navigation.navigate("selSwimmingTime",{
      selectedGender : this.props.navigation.state.params.selectedGender,
      id_company: this.props.navigation.state.params.id_company,
      selectedDays : this.serialiseSelection()
    })
  }

  renderList() {
    return this.state.days.map((day, index) => {
        return (
            <ListItem>
              <CheckBox checked={this.checkPlanSel(index)} color="green"
              onPress={()=>this.onCheckBoxPress(index)}
              />
              <Body>
                <Text>{day.day}</Text>
              </Body>
            </ListItem>
        );
    });
  }

  
  render() {
    
    const { navigation } = this.props;
    const visitor = navigation.getParam('visitor');

    return (
      <Container>
      <Header  style={{ backgroundColor: '#0574CA' }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
            
          <Body>
            <Title>Swimming Trainer</Title>
          </Body>
          <Right>
        </Right>
      </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3>Please select the days (DHS.50 per day)</H3>
            </View>
            <View>
            {
              this.renderList()
            }
            </View>
            <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button
                onPress={() => this.goToTime()}
                style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}