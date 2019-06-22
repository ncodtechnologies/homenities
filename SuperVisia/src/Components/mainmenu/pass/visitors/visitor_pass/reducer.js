import {
  visitorState
} from "./action";
const initialVisitorState = {
  loading: false,
  data: null,
  success: null,
  error: null
};
export const visitorPass = (state = initialVisitorState, action) => {
  switch (action.type) {
    case visitorState.LOADING:
      return { ...state, loading: action.state };
    case visitorState.DONE:
      return { ...state, data: action.state };
    case visitorState.SUCCESS:
      return { ...state, success: action.state };
    case visitorState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

