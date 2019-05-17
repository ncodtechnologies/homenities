import {
  tenantState
} from "./action";
const initialTenantState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

export const tenant = (state = initialTenantState, action) => {
  switch (action.type) {
    case tenantState.LOADING:
      return { ...state, loading: action.state };
    case tenantState.DONE:
      return { ...state, data: action.state };
    case tenantState.SUCCESS:
      return { ...state, success: action.state };
    case tenantState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

