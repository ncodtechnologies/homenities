import {
  addVisitorState
} from "./action";

const initialAddVisitorState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

export const visitorAdd = (state = initialAddVisitorState, action) => {
  switch (action.type) {
    case addVisitorState.LOADING:
      return { ...state, loading: action.state };
    case addVisitorState.DONE:
      return { ...state, data: action.state };
    case addVisitorState.SUCCESS:
      return { ...state, success: action.state };
    case addVisitorState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

