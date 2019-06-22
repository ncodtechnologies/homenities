import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, TouchableOpacity  } from 'react-native';
import { Container, Header, Card, CardItem, Body, Text, Left, Right, Icon, Title, Button, Segment } from 'native-base';
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

class Maintenance extends Component {

  constructor(props){
    super(props);
    this.state ={
      selectedSegment : 2
      }
  }

 requestForm = (type) => {
   console.log(type);
    this.props.navigation.navigate("ReqDescription",{
              service_type: type
            })
  }

  selSegment(segment_id){
    this.setState({
      selectedSegment: segment_id
    })
  }

    render() {
        return ( 
          <Container>
          <Header hasSegment style={{ backgroundColor: '#0574CA' }}>
              <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Segment style={{ backgroundColor: '#0574CA' }} >
                  <Button first active={this.state.selectedSegment==1}
                   onPress={()=>this.selSegment(1)}
                  ><Text>Maintenance</Text></Button>
                  <Button last active={this.state.selectedSegment==2}
                   onPress={()=>this.selSegment(2)}
                   ><Text>G. Services</Text></Button>
                </Segment>
              </Body>
              <Right>
                <Button transparent onPress={() => this.props.navigation.navigate("SRList")}>
                  <Icon name='checkbox' />
                </Button>
              </Right>
          </Header>
          {
            (this.state.selectedSegment == 1) ? 
            <MaintenanceReqs {...this.props} />
            :
            <GeneralServices {...this.props} />
          }
          </Container>
        );
    }
}

export default Maintenance;

  const MaintenanceReqs = ({ navigation }) => (
            <ScrollView> 
              <Grid>
              <Row>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("MaintenanceReqDate", {service_type : "AC Services"})}   >
                    <Card>
                      <CardItem cardBody  style={styles.cardBody} >
                        <Image style={styles.stretch} source={require('../../../Assets/Images/ac.png')} />
                      </CardItem>
                      <CardItem footer style={styles.cardFooter}>
                        <Text>AC Services</Text>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                </Col>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("MaintenanceReqDate", {service_type : "Doors Repair"})}   >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../../Assets/Images/aluminium.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Doors Repair</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
                </Row>
                <Row>
                  <Col >
                    <TouchableOpacity onPress={() => navigation.navigate("MaintenanceReqDate", {service_type : "Electric"})}  >
                    <Card>
                      <CardItem cardBody  style={styles.cardBody} >
                        <Image style={styles.stretch} source={require('../../../Assets/Images/electric.png')} />
                      </CardItem>
                      <CardItem footer style={styles.cardFooter}>
                        <Text>Electric Services</Text>
                      </CardItem>
                    </Card>
                    </TouchableOpacity>
                  </Col>
                  <Col >
                    <TouchableOpacity onPress={() => navigation.navigate("MaintenanceReqDate", {service_type : "Carpentary"})}   >
                    <Card>
                      <CardItem cardBody  style={styles.cardBody} >
                        <Image style={styles.stretch} source={require('../../../Assets/Images/carpentary.png')} />
                      </CardItem>
                      <CardItem footer style={styles.cardFooter}>
                        <Text>Carpentary </Text>
                      </CardItem>
                    </Card>
                    </TouchableOpacity>
                  </Col>
                </Row>
                <Row>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("MaintenanceReqDate", {service_type : "Plumbing"})}   >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../../Assets/Images/plumbing.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Plumbing</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("MaintenanceReqDate", {service_type : "Painting"})}   >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../../Assets/Images/painting.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Painting</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
                </Row>
                <Row>
                  <Col >
                    <TouchableOpacity onPress={() => navigation.navigate("MaintenanceReqDate", {service_type : "Satellite"})}   >
                    <Card>
                      <CardItem cardBody  style={styles.cardBody} >
                        <Image style={styles.stretch} source={require('../../../Assets/Images/satellite.png')} />
                      </CardItem>
                      <CardItem footer style={styles.cardFooter}>
                        <Text>Satellite</Text>
                      </CardItem>
                    </Card>
                    </TouchableOpacity>
                  </Col>
                </Row>
              </Grid>
              </ScrollView>
        );


const GeneralServices = ({ navigation }) => (
          <ScrollView> 
            <Grid>
              
              <Row>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("SRCompany", { to_page : "CarCleaning", service_type: "Car Cleaning" })}  >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../../Assets/Images/car_cleaning.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Car Cleaning</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
              <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("SRCompany", { to_page : "Cleaning", service_type: "House Maid" })}  >
                <Card>
                  <CardItem cardBody  style={styles.cardBody} >
                    <Image style={styles.stretch} source={require('../../../Assets/Images/housemaid.png')} />
                  </CardItem>
                  <CardItem footer style={styles.cardFooter}>
                    <Text>HouseMaid</Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
              </Col>
              </Row>
              <Row>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("SRCompany", { to_page : "Cleaning", service_type: "Baby Sitting" })}  >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../../Assets/Images/babysitting.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Baby Sitting</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
              <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("SRCompany", { to_page : "Laundry", service_type: "Laundry" })}  >
                <Card>
                  <CardItem cardBody  style={styles.cardBody} >
                    <Image style={styles.stretch} source={require('../../../Assets/Images/laundry.png')} />
                  </CardItem>
                  <CardItem footer style={styles.cardFooter}>
                    <Text>Laundry Services</Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
              </Col>
              </Row>
              <Row>
              <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("SRCompany", { to_page : "PersonalTrainer", service_type: "Personal Trainer" })}  >
                <Card>
                  <CardItem cardBody  style={styles.cardBody} >
                    <Image style={styles.stretch} source={require('../../../Assets/Images/trainer.png')} />
                  </CardItem>
                  <CardItem footer style={styles.cardFooter}>
                    <Text>Personal Trainer</Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
              </Col>
              <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("SRCompany", { to_page : "SwimmingTrainer", service_type: "Swimming Trainer" })}  >
                <Card>
                  <CardItem cardBody  style={styles.cardBody} >
                    <Image style={styles.stretch} source={require('../../../Assets/Images/swimming.png')} />
                  </CardItem>
                  <CardItem footer style={styles.cardFooter}>
                    <Text>Swimming Trainer</Text>
                  </CardItem>
                </Card>
                </TouchableOpacity>
              </Col>
              </Row>
              <Row>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("SRCompany", { to_page : "Cleaning", service_type: "Pest Control" })}  >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../../Assets/Images/pest-control.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Pest Control</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("SRCompany", { to_page : "Cheff", service_type: "Cheff" })}  >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../../Assets/Images/cheff.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Personal Cheff</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
              </Row>
              <Row>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("SRCompany", { to_page : "Tailoring", service_type: "Tailoring"})}  >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../../Assets/Images/tailoring.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Tailoring</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("SRCompany", { to_page : "Tutoring", service_type: "Tutoring"})}  >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../../Assets/Images/tutoring.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Tutoring</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
              </Row>
              <Row>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("SRCompany", { to_page : "Driver", service_type: "Personal Driver" })}  >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../../Assets/Images/driver.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>Personal Driver</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
                <Col >
                  <TouchableOpacity onPress={() => navigation.navigate("SRCompany", { to_page : "HouseInsurance", service_type: "House Insurance"})}  >
                  <Card>
                    <CardItem cardBody  style={styles.cardBody} >
                      <Image style={styles.stretch} source={require('../../../Assets/Images/house_insurance.png')} />
                    </CardItem>
                    <CardItem footer style={styles.cardFooter}>
                      <Text>House Insurance</Text>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </Col>
              </Row>
            </Grid>
            </ScrollView>
      );