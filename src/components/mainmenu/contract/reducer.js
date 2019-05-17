import {
  chequeReminderState,
  flatInspectionState,
  furnitureMoveState
} from "./action";

const initialChequeReminderState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

export const chequeReminder = (state = initialChequeReminderState, action) => {
  switch (action.type) {
    case chequeReminderState.LOADING:
      return { ...state, loading: action.state };
    case chequeReminderState.DONE:
      return { ...state, data: action.state };
    case chequeReminderState.SUCCESS:
      return { ...state, success: action.state };
    case chequeReminderState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};


const initialFlatInspectionState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

const initialFurnitureMoveState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

export const flatInspection = (state = initialFlatInspectionState, action) => {
  switch (action.type) {
    case flatInspectionState.LOADING:
      return { ...state, loading: action.state };
    case flatInspectionState.DONE:
      return { ...state, data: action.state };
    case flatInspectionState.SUCCESS:
      return { ...state, success: action.state };
    case flatInspectionState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

export const furnitureMove = (state = initialFurnitureMoveState, action) => {
  switch (action.type) {
    case furnitureMoveState.LOADING:
      return { ...state, loading: action.state };
    case furnitureMoveState.DONE:
      return { ...state, data: action.state };
    case furnitureMoveState.SUCCESS:
      return { ...state, success: action.state };
    case furnitureMoveState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};