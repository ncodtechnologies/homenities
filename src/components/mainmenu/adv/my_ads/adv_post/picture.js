import React, { Component } from 'react';
import { Image, View, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
    TextInputName:'name',
    TextInputEmail:'email',
    TextInputPhoneNumber:'102',
  },
};

export default class PostPicture extends Component {
  
  constructor(props){
    super(props);
    this.state ={
       isLoading: true,
       ad : props.navigation.state.params ? props.navigation.state.params.ad : null,
      }
    }
  state = {
    avatar : require('../../../../../Assets/Images/Ads/add_image.png')
  }

 OpenImagePicker = () => {
    Alert.alert("Demo App","You can take picture or select from library here");

}

uploadPicture = () => {
  Alert.alert("Request");
  console.log("Request");

    //constant varaibles that equal propertes in state
    const {TextInputName} = this.state;
    const {TextInputEmail} = this.state;
    const {TextInputPhoneNumber} = this.state;

    const formData = new FormData();
    //Add your input data
    formData.append('name', TextInputName);
    formData.append('email', TextInputEmail);
    formData.append('phone_number', TextInputPhoneNumber);

    //Add your photo
    //this, retrive the file extension of your photo
 //   const uriPart = avatarSource.split('.');
    const fileExtension = "add_image";//uriPart[uriPart.length - 1];

    formData.append('photo', {
        uri: avatar,
        name: `photo.${fileExtension}`,
        type: `image/${fileExtension}`
    });

    fetch('http://10.0.2.2/sulafa/controller/Ads/postPicture.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: JSON.stringify(this.state),
    })
    .then((response) => response.text())
    .then((responseJson) => {

      this.setState({
        isLoading: false
      }, function(){
        
      })
    })
      return;
    //API that use fetch to input data to database via backend php script
    fetch('http://10.0.2.2/sulafa/controller/Ads/postPicture.php',{
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData
      })
      .then((response) => response.text())
      .then((responseJson) => {
          console.log(responseJson);
        })
        .catch((error) => {
            console.error(error);
          });
    }

  render() 
  {

    return (
      <Container>
      <Header  style={{ backgroundColor: '#0574CA' }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
              <Title>Post Ad</Title>
          </Body>
          <Right>
          <Button transparent onPress={() => this.props.navigation.navigate("MyAds")} >
            <Text>My Ads</Text>
          </Button>
        </Right>
      </Header>
        <Content>
          <Card >
            <CardItem>
              <Left>
                <Body style={{ marginLeft:15 }} >
                  <Text>Press below to take a picture or select from library</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem button  onPress={() => this.OpenImagePicker()} >
                <Image   source={require('../../../../../Assets/Images/Ads/add_image.png')}  style={{height: 350, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Body>
                <View style={{ marginTop:20, justifyContent: 'flex-end', flexDirection: 'row', flex:1 }}>
                  <View style={{ alignItems:"flex-end", flexDirection: 'row', flex:1  }}>

                  <Button style={{ backgroundColor:"#0574CA" }}   
                           onPress={() => this.props.navigation.navigate("AdvTitle", {ad: this.state.ad})}  >
                    <Text> >> </Text>
                  </Button>
                  
                  </View>
                </View>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}