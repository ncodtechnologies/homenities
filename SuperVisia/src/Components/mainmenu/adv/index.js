import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity  } from 'react-native';
import { Container, Card, CardItem, Text, View } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const styles = StyleSheet.create({
  stretch: {
    width: 80,
    height: 80
  },
  cardBody: {
    height: 125,
    justifyContent: 'space-around'
  },
  cardFooter: {
    flexDirection: "row",  
    alignItems: "center", 
    justifyContent: "space-around" 
  }
});

class Menu extends Component {

    requestForm = (type) => {
        console.log(type);
        this.props.navigation.navigate("ReqDescription",{
                service_type: type
            })
        }
    render() {
        return ( 
          <Container >
            <View style={{alignItems: "center", flexDirection: "row", flex:1}}>
              <Grid  > 
                <Row style={{height:180}} >
                  <Col >
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate("AdsList")}   >
                      <Card >
                        <CardItem cardBody  style={styles.cardBody} >
                          <Image style={styles.stretch} source={require('../../../Assets/Images/Home/browse.png')} />
                        </CardItem>
                        <CardItem footer style={styles.cardFooter}>
                          <Text>Browse Ads</Text>
                        </CardItem>
                      </Card>
                    </TouchableOpacity>
                  </Col>
                </Row>
                <Row style={{height:180}} >
                  <Col >
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate("AdvPicture")}    >
                      <Card>
                        <CardItem cardBody  style={styles.cardBody} >
                          <Image style={styles.stretch} source={require('../../../Assets/Images/Home/upload.png')} />
                        </CardItem>
                        <CardItem footer style={styles.cardFooter}>
                          <Text>Post Ad</Text>
                        </CardItem>
                      </Card>
                    </TouchableOpacity>
                  </Col>
                </Row>
                <Row style={{height:180}} >
                  <Col >
                    <TouchableOpacity  >
                      <Card>
                        <CardItem cardBody  style={styles.cardBody} >
                          <Image style={styles.stretch} source={require('../../../Assets/Images/Home/ext_ads.png')} />
                        </CardItem>
                        <CardItem footer style={styles.cardFooter}>
                          <Text>External Ads</Text>
                        </CardItem>
                      </Card>
                    </TouchableOpacity>
                  </Col>
                </Row>
              </Grid>
            </View>
          </Container>
        );
    }
}

export default Menu;
