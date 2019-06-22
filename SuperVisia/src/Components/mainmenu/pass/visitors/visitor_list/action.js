import {
  VISITOR_LIST_URL
} from "../../../../../constants";

export const visitorListState = {
  LOADING: "VISITOR_LIST_LOADING",
  SUCCESS: "VISITOR_LIST_SUCCESS",
  ERROR: "VISITOR_LIST_ERROR",
  DONE: "VISITOR_LIST_DONE"
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

export const loadVisitorList = token => dispatch => {
  console.log(VISITOR_LIST_URL);
  return Fetcher(
    async () => {
      const result = await fetch(VISITOR_LIST_URL+"?token="+token.token.data.token, {
        method: "GET"
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    visitorListState,
    dispatch
  );
};
