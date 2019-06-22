import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch, Button, Title } from 'native-base';

export default ({ navigation, chequeReminder }) => {

  return (
      <Container>
      <Header  style={{ backgroundColor: '#0574CA' }}>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
        
          <Body>
            <Title>Cheque Reminders</Title>
          </Body>
          <Right />
      </Header>
        <Content>
          {
            !chequeReminder.loading 
            &&
            chequeReminder.data.map(datum => <ListItem icon>
              <Left>
                {datum.status=="0" ? <Icon name="alarm" /> : <Icon name="done-all" /> }
              </Left>
              <Body>
                <Text>{datum.amount}</Text>
              </Body>
              <Right>
                <Text>{datum.date}</Text>
              </Right>
            </ListItem>
            )    
          }
        </Content>
      </Container>
)}
