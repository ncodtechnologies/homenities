import React, { Component } from 'react';
import { Container, Header, Content, List, Title, Text, Card, CardItem, Left, Body, Button, Icon, H3, Right } from 'native-base';
import { Image, View, TouchableOpacity } from 'react-native';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      active: true,
      adv_list: [
        {
          name : 'Sofa Set',
          description: 'White, Clean, used for 5 months only',
          date: 'Dec 15, 2018',
          image: require('../../../../Assets/Images/Ads/ad1.jpg'),
          rate: '1000'
        },
        {
          name :  'Sofa Sets',
          description: 'Black and Grey Sofas',
          date: 'Dec 16, 2018',
          image: require('../../../../Assets/Images/Ads/ad2.jpg'),
          rate: '1200'
        },
        {
          name :  'Table',
          description: '1 year used',
          date: 'Dec 17, 2018',
          image: require('../../../../Assets/Images/Ads/ad3.jpg'),
          rate: '1400'
        },
        {
          name :  'Stove',
          description: 'Good Stove with no complaints',
          date: 'Dec 18, 2018',
          image: require('../../../../Assets/Images/Ads/ad4.jpg'),
          rate: '6500'
        }
      ]
    };
  }
  
  componentDidMount(){
    console.log("Requestingg ... ");
  }

  gotoDetails = (id_ad) => {
    this.props.navigation.navigate("AdDetails")
  }
  gotoExAdDetails = () => {
    this.props.navigation.navigate("AdDetails")
  }

  
  _renderItem ({item, index}) {
    return (
      <TouchableOpacity onPress={() => this.gotoExAdDetails()}   >    
        <Image source={item.image}  style={{height: 150, flex: 1}}/>
      </TouchableOpacity>
    );
  } 

  render() {

    const images = 
      [ 
        { 
          id_image: 1,
          image:  require('../../../../Assets/Images/Ads/ad1.jpg')
        },
        { 
          id_image: 2,
          image:  require('../../../../Assets/Images/Ads/ad2.jpg')
        },
        { 
          id_image: 3,
          image:  require('../../../../Assets/Images/Ads/ad3.jpg')
        },
        { 
          id_image: 4,
          image:  require('../../../../Assets/Images/Ads/ad4.jpg')
        }
      ];
    
    
    return (
      <Container>
        <Header  style={{ backgroundColor: '#0574CA' }}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Advertisements</Title>
            </Body>
            <Right />
        </Header>
        <Content>
          <Card >
            <List dataArray={this.state.adv_list} horizontal={false}
              renderRow={(item) =>
                
                <Card style={{ borderBottomColor: '#0574CA', borderBottomWidth: 4 }} >
                  <CardItem>   
                    <Left>
                      <Body>
                        <Text>{item.title}</Text>
                      </Body>
                    </Left>
                    <Right>
                      <TouchableOpacity>
                        <View style={{ flexDirection:"row" }} >
                          <Icon style={{ color:"#16a085" }} name="call" />
                          <Text>  CALL VENDOR</Text>
                        </View>
                      </TouchableOpacity>
                    <Text style={{ borderBottomWidth: 2, borderColor: '#16a085', fontWeight: 'bold' }} >DHS.{item.price}</Text>
                    </Right>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <List dataArray={images} horizontal={true}
                        renderRow={(imageItem) =>
                          <Card>
                            <Image source={imageItem.image}  style={{height: 300, width: 300, flex: 1}}/>
                          </Card>
                        }>
                      </List>
                      <View style={{ marginTop: 10 }} > 
                        <Text>
                          {item.description}
                        </Text>
                      </View>
                      <View style={{ color: 'red',marginTop: 15 }} >
                        
                      </View>
                    </Body>
                  </CardItem>
                </Card>
              }>
            </List>
          </Card>

        </Content>
      </Container>
    );
  }
}