import {
  reqGServiceState,
  serviceReqListState,
  srCompanyListState
} from "./action";

const initialreqGServiceState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

const initialSRListState = {
  loading: false,
  data: null,
  success: null,
  error: null
};


const initialSRCompanyListState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

export const genServiceRequest = (state = initialreqGServiceState, action) => {
  switch (action.type) {
    case reqGServiceState.LOADING:
      return { ...state, loading: action.state };
    case reqGServiceState.DONE:
      return { ...state, data: action.state };
    case reqGServiceState.SUCCESS:
      return { ...state, success: action.state };
    case reqGServiceState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

export const serviceReqList = (state = initialSRListState, action) => {
  switch (action.type) {
    case serviceReqListState.LOADING:
      return { ...state, loading: action.state };
    case serviceReqListState.DONE:
      return { ...state, data: action.state };
    case serviceReqListState.SUCCESS:
      return { ...state, success: action.state };
    case serviceReqListState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

export const srCompanyList = (state = initialSRCompanyListState, action) => {
  switch (action.type) {
    case srCompanyListState.LOADING:
      return { ...state, loading: action.state };
    case srCompanyListState.DONE:
      return { ...state, data: action.state };
    case srCompanyListState.SUCCESS:
      return { ...state, success: action.state };
    case srCompanyListState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

