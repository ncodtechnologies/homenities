import React, { Component } from 'react';
import { Container, View, Content, ListItem, Text, Radio, Right, Left, Button, H3, Header, Body, Title, Icon } from 'native-base';

export default class selGender extends Component {

  constructor(props){
    super(props);
    this.state = {
      gender_id: 0,
      genders : [{
        id_gender: 0,
        text: "Male"
      },{
        id_gender: 1,
        text: "Female"
      }]
    }
  }

  checkGenderSel(id_gender){
    return id_gender==this.state.gender_id;
  }

  selGender(id_gender){
    this.setState({gender_id: id_gender})
  }


  goToPlans(){
    this.props.navigation.navigate("selTrainingPlan",{selectedGender : this.state.genders[this.state.gender_id].text, id_company: this.props.navigation.state.params.id_company})
  }

  renderList() {
    return this.state.genders.map((gender) => {
        return (
          <ListItem onPress={() => this.selGender(gender.id_gender)} >
            <Left>
              <Text>{gender.text}</Text>
            </Left>
            <Right>
              <Radio selected={this.checkGenderSel(gender.id_gender)} />
            </Right>
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
            <Title>Personal Trainer</Title>
          </Body>
          <Right />
      </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3>Please select the required trainer gender </H3>
            </View>
            <View>
            {
              this.renderList()
            }
            </View>
          <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
            <Button
              onPress={() => this.goToPlans()}
              style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
          </View>
          </View>
        </Content>
      </Container>
    );
  }

}