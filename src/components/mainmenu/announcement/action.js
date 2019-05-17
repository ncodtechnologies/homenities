import {
  ANNOUNCEMENT_URL
} from "../../../constants";

export const announcementState = {
  LOADING: "ANNOUNCEMENT_LOADING",
  SUCCESS: "ANNOUNCEMENT_SUCCESS",
  ERROR: "ANNOUNCEMENT_ERROR",
  DONE: "ANNOUNCEMENT_DONE"
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

export const loadAnnouncements = token => dispatch => {
  console.log(ANNOUNCEMENT_URL);
  return Fetcher(
    async () => {
      const result = await fetch(ANNOUNCEMENT_URL+"?id_tenant=1", {
        method: "GET"
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    announcementState,
    dispatch
  );
};