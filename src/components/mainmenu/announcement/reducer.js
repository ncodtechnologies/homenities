import {
  announcementState
} from "./action";

const initialAnnouncementState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

export const announcements = (state = initialAnnouncementState, action) => {
  switch (action.type) {
    case announcementState.LOADING:
      return { ...state, loading: action.state };
    case announcementState.DONE:
      return { ...state, data: action.state };
    case announcementState.SUCCESS:
      return { ...state, success: action.state };
    case announcementState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

