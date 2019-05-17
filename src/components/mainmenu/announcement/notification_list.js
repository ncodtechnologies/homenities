import React, { Component } from 'react';
import { Container, Left, Right, Content, Card, CardItem, Text, Body, Icon, Button } from 'native-base';
export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card style={{ borderTopWidth: 5, borderColor: '#0574CA' }}>
            <CardItem header>
              <Text>False Alarm</Text>
              <Right>
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                It was a false that occured at 2.05pm. Please be calm and don't panic
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>03/01/2019</Text>
            </CardItem>
         </Card>
         <Card style={{ borderTopWidth: 5, borderColor: '#0574CA' }}>
            <CardItem header>
              <Text>Elevator</Text>
              <Right>
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                Elevator No.3 is under maintenance today from 8 am until 2 pm. Please make sure that you take into your consideration time required to go down.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>04/01/2019</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}