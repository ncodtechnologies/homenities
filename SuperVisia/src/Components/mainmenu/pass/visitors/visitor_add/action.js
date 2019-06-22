import {
  ADD_VISITOR_URL
} from "../../../../../constants";

export const addVisitorState = {
  LOADING: "ADD_VISITOR_LOADING",
  SUCCESS: "ADD_VISITOR_SUCCESS",
  ERROR: "ADD_VISITOR_ERROR",
  DONE: "ADD_VISITOR_DONE"
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
    console.log("//////" + JSON.stringify(result));
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

export const addVisitor = formBody => dispatch => {
  console.log(ADD_VISITOR_URL);
  return Fetcher(
    async () => {
      const result = await fetch(ADD_VISITOR_URL, {
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
    addVisitorState,
    dispatch
  );
};