import React, { Component }  from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import QRCode from 'react-native-qrcode';
import { Container, Header, Content, Left, Icon, Title, Right, Text, Body, H2, Button } from 'native-base';


export default ({ navigation, tenant }) => (
  <Container>
      <Header  style={{ backgroundColor: '#0574CA' }}>
          <Left/>
          <Body>
            <Title>My Pass</Title>
          </Body>
          <Right>
          <Button transparent onPress={() => navigation.navigate("VisitorList")} >
            <Text>Guests</Text>
          </Button>
        </Right>
      </Header>
        <Content contentContainerStyle={{ justifyContent: 'space-around', flex: 1 }}>
            <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop:15 }}>
              <View style={{ alignItems:"center", width: 300 }}>
                  <H2 style={{ alignItems:"center",textAlign: 'center' }}>Scan the below QR code to gain access</H2>
              </View>
            </View>
            <View style={{justifyContent: 'center', flexDirection: 'row', marginTop:1}}>
              <View style={{ alignItems:"center", elevation: 8, padding: 7, backgroundColor: 'white', borderRadius:7, borderColor:"#16a085" }}>
                <QRCode
                    value={tenant.data.pass}
                    size={250}
                    bgColor='black'
                    fgColor='white'/>
              </View>
            </View>
            <View style={{ justifyContent: 'center', flexDirection: 'row'}}>
              <View style={{ alignItems:"flex-start", width: 300}}>
                <Text style={{fontWeight: "bold", fontSize: 20}} >{tenant.data.name}</Text>
                <Text style={{fontWeight: "bold", fontSize: 20}} >{tenant.data.unit}</Text>
              </View>
            </View>
        </Content>
      </Container>
);
