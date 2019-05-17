import {
  maintenanceState
} from "./action";
const initialMaintenanceState = {
  loading: false,
  data: null,
  success: null,
  error: null
};
export const maintenance = (state = initialMaintenanceState, action) => {
  switch (action.type) {
    case maintenanceState.LOADING:
      return { ...state, loading: action.state };
    case maintenanceState.DONE:
      return { ...state, data: action.state };
    case maintenanceState.SUCCESS:
      return { ...state, success: action.state };
    case maintenanceState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

