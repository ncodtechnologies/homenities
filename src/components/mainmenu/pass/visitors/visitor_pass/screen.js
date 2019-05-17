import React, { Component }  from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import QRCode from 'react-native-qrcode';
import { Container, Header, Content, Left, Icon, Title, Right, Text, Body, H2, H3, Button } from 'native-base';


export default ({ navigation, visitor }) => (
  <Container>
  <Header  style={{ backgroundColor: '#0574CA' }}>
      <Left>
        <Button transparent onPress={() => this.props.navigation.goBack()}>
          <Icon name='arrow-back' />
        </Button>
      </Left>
        
      <Body>
        <Title>Visitor Pass</Title>
      </Body>
      <Right>
        <Button style={{ justifyContent: 'center', alignItems: 'center' }} onPress={()=> this.snapIt()} >
          <Icon style={{ fontSize: 23, color: 'white' }} name='share' />
          <Text style={{ fontSize: 11, color: 'white' }} >Share</Text>
        </Button>
    </Right>
  </Header>
    <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
        <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop:20 }}>
          <View style={{ alignItems:"center", width: 300 }}>
              <H2 style={{ alignItems:"center",textAlign: 'center' }}>Scan the below QR code to gain access</H2>
          </View>
        </View>
        <View style={{justifyContent: 'center', flexDirection: 'row', marginTop:10}}>
          <View style={{ alignItems:"center", elevation: 8, padding: 7, backgroundColor: 'white', borderRadius:7, borderColor:"#16a085" }}>
            <QRCode
                value={navigation.state.params.visitor.pass_code}
                size={250}
                bgColor='black'
                fgColor='white'/>
          </View>
        </View>
        <View style={{ justifyContent: 'center', flexDirection: 'row'}}>
          <View style={{ alignItems:"flex-start", width: 300}}>
              <Text style={{fontWeight: "bold", fontSize:17}} >Visitor:</Text>
              <H3 style={{ alignItems:"flex-start",padding: 3, fontSize:17 }}>Name: {navigation.state.params.visitor.name}</H3>
              <H3 style={{ alignItems:"flex-start",padding: 3, fontSize: 17 }}>Unit: {navigation.state.params.visitor.unit}</H3>
          </View>
        </View>
        
    </Content>
  </Container>
);
