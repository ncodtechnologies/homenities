import { createStackNavigator } from "react-navigation";

import MaintenanceReqDate from "../components/mainmenu/service_request/maintenance/date";
import MaintenanceReqDescription from "../components/mainmenu/service_request/maintenance/description";
import SRHome from "../components/mainmenu/service_request";

import SRCompany  from "../components/mainmenu/service_request/general_services/Company";

import CarCleaning  from "../components/mainmenu/service_request/general_services/CarCleaning";
import Laundry from "../components/mainmenu/service_request/general_services/Laundry";
import Cleaning from '../components/mainmenu/service_request/general_services/Cleaning';
import PersonalTrainer from '../components/mainmenu/service_request/general_services/PersonalTrainer';
import SwimmingTrainer from '../components/mainmenu/service_request/general_services/SwimmingTrainer';
import Cheff from '../components/mainmenu/service_request/general_services/Cheff';
import Tailoring from '../components/mainmenu/service_request/general_services/Tailoring';
import Tutoring from '../components/mainmenu/service_request/general_services/Tutoring';
import Driver from '../components/mainmenu/service_request/general_services/Driver';
import HouseInsurance from '../components/mainmenu/service_request/general_services/HouseInsurance';
import SRList from '../components/mainmenu/service_request/general_services/requested_list';

export default createStackNavigator({
  SRHome: SRHome,
  MaintenanceReqDate: MaintenanceReqDate,
  MaintenanceReqDescription: MaintenanceReqDescription,
  CarCleaning: CarCleaning,
  Laundry: Laundry,
  Cleaning: Cleaning,
  PersonalTrainer: PersonalTrainer,
  SwimmingTrainer: SwimmingTrainer,
  Cheff: Cheff,
  Tailoring: Tailoring,
  Tutoring: Tutoring,
  Driver: Driver,
  HouseInsurance: HouseInsurance,
  SRList: SRList,
  SRCompany: SRCompany
},
{
headerMode: 'none',
navigationOptions: {
  headerVisible: false,
}
}); 