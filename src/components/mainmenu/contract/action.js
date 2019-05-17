import {
  CHEQUE_REMINDER_URL,
  FLAT_INSPECTION_URL,
  FURNITURE_MOVE_IN_URL
} from "../../../constants";

export const chequeReminderState = {
  LOADING: "CHEQUE_REMINDER_LOADING",
  SUCCESS: "CHEQUE_REMINDER_SUCCESS",
  ERROR: "CHEQUE_REMINDER_ERROR",
  DONE: "CHEQUE_REMINDER_DONE"
};

export const flatInspectionState = {
  LOADING: "FLAT_INSPECTION_LOADING",
  SUCCESS: "FLAT_INSPECTION_SUCCESS",
  ERROR: "FLAT_INSPECTION_ERROR",
  DONE: "FLAT_INSPECTION_DONE"
};

export const furnitureMoveState = {
  LOADING: "FURNITURE_MOVE_LOADING",
  SUCCESS: "FURNITURE_MOVE_SUCCESS",
  ERROR: "FURNITURE_MOVE_ERROR",
  DONE: "FURNITURE_MOVE_DONE"
};

export const checkResult = (result, dispatch, setError) => {
  console.log(result);
  if (result.status) {
    return true;
  }
  dispatch(setError(JSON.stringify(result.data)));
  return false;
};

const setDone = data => ({
  type: tokenState.DONE,
  data
});
export const setInStore = (state, type) => ({
  type,
  state
});
export const clearData = () => ({
  type: tokenState.CLEAR
});


const Fetcher = async (fetchData, type, dispatch) => {
  dispatch(setInStore(true, type.LOADING));
  dispatch(setInStore(null, type.ERROR));
  try {
    const result = await fetchData();
    if (checkResult(result, dispatch, error => setInStore(error, type.ERROR))) {
      dispatch(setInStore(result.data, type.DONE));
      dispatch(setInStore(true, type.SUCCESS));
    } else {
      dispatch(setInStore(false, type.SUCCESS));
    }
  } catch (error) {
    dispatch(setInStore(false, type.SUCCESS));
    dispatch(setInStore(error, type.ERROR));
  }
  dispatch(setInStore(false, type.LOADING));
};

export const loadChequeReminder = token => dispatch => {
  console.log(CHEQUE_REMINDER_URL);
  return Fetcher(
    async () => {
      const result = await fetch(CHEQUE_REMINDER_URL+"?id_tenant=1", {
        method: "GET"
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    chequeReminderState,
    dispatch
  );
};

export const reqFlatInspection = formBody => dispatch => {
  console.log(FLAT_INSPECTION_URL);
  return Fetcher(
    async () => {
      const result = await fetch(FLAT_INSPECTION_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json',
        },
        body: formBody
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    flatInspectionState,
    dispatch
  );
};

export const reqFurnitureMove = formBody => dispatch => {
  console.log(FURNITURE_MOVE_IN_URL);
  return Fetcher(
    async () => {
      const result = await fetch(FURNITURE_MOVE_IN_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          'Content-Type': 'application/json',
        },
        body: formBody
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    furnitureMoveState,
    dispatch
  );
};