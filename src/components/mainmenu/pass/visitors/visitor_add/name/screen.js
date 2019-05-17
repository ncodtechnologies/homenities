import React, { Component }  from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import { Container, Header, Content, Left, Right, Icon, Body, Title, Item, Input, Button, Text, H3 } from 'native-base';

let newVisitor = {
  name: ""
}
export default ({ navigation }) => (
  <Container>
      <Header  style={{ backgroundColor: '#0574CA' }}>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
            
          <Body>
            <Title>New Visitor</Title>
          </Body>
          <Right>
        </Right>
      </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
          <View style={{ padding: 25 }} > 
            <View>
              <H3>Have a Visitor? Please fill in the Visitor's name </H3>
            </View>
            <Item style={{ marginTop:15 }} >
              <Input placeholder="Visitor Name"
                     onChangeText={(text) => 
                      newVisitor.name = text
                  }
                    />
            </Item>
            <View style={{ justifyContent:"flex-end", flexDirection: "row", flex:1,marginTop:8 }} >
              <Button
                onPress={()=>navigation.navigate("AddVisitorTime", {newVisitor: newVisitor} )}
                style={{backgroundColor:"#0574CA" }} ><Text> >> </Text></Button>
            </View>
          </View>
        </Content>
      </Container>
);
