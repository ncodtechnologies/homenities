import React, { Component } from 'react';
import { Container, Content, List, ListItem,  Header, Text, Left, Right, Body, Title } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Complaint extends Component {

  regFeedback = () => {
    Alert.alert('Thank you!',"Your request is registered successfully. We will review it soon. Thank You!");
    this.props.navigation.navigate("Home");
  }

  render() {
    return ( 
      <Container>
        <Header  style={{ backgroundColor: '#0574CA' }}>
            <Left/>
            <Body>
                <Title>Info</Title>
            </Body>
            <Right />
        </Header>
          <Content>
              <List>
                  <ListItem itemDivider iconLeft style={{ marginTop:30, borderTopColor: '#0574CA', borderTopWidth: 4 }} >
                        <Icon size={20} name='alarm' />
                        <Text style={{marginLeft: 20}} >Alerts</Text>
                  </ListItem>  
                  <ListItem iconLeft>
                      <Icon size={20} name='call' />
                      <Text style={{marginLeft: 20}} >Building Security</Text>
                  </ListItem>
                  <ListItem iconLeft>
                      <Icon size={20} name='call' />
                      <Text style={{marginLeft: 20}} >Building Management</Text>
                  </ListItem>
                  <ListItem iconLeft>
                      <Icon size={20} name='call' />
                      <Text style={{marginLeft: 20}} >Police</Text>
                  </ListItem>
                  <ListItem iconLeft>
                      <Icon size={20} name='call' />
                      <Text style={{marginLeft: 20}} >Ambulance</Text>
                  </ListItem>
                  <ListItem iconLeft>
                      <Icon size={20} name='call' />
                      <Text style={{marginLeft: 20}} >Fireforce</Text>
                  </ListItem>
              </List>

              <List style={{ marginTop:30, borderTopColor: '#0574CA', borderTopWidth: 4  }} >
                  <ListItem itemDivider iconLeft  >
                        <Icon size={20} name='assignment' />
                        <Text style={{marginLeft: 20}} >Feedback</Text>
                  </ListItem> 
                  <ListItem iconLeft onPress={() => this.props.navigation.navigate("Suggestion")} >
                      <Icon size={20} name='feedback' />
                      <Text style={{marginLeft: 20}} >Suggestions</Text>
                  </ListItem>
                  <ListItem iconLeft onPress={() => this.props.navigation.navigate("Complaint")} >
                      <Icon size={20} name='warning' />
                      <Text style={{marginLeft: 20}} >Complaints</Text>
                  </ListItem> 
              </List>
          </Content>
      </Container>
    );
  }
}