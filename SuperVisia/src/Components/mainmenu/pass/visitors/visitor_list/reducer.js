import {
  visitorListState
} from "./action";

const initialVisitorListState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

export const visitorList = (state = initialVisitorListState, action) => {
  switch (action.type) {
    case visitorListState.LOADING:
      return { ...state, loading: action.state };
    case visitorListState.DONE:
      return { ...state, data: action.state };
    case visitorListState.SUCCESS:
      return { ...state, success: action.state };
    case visitorListState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

