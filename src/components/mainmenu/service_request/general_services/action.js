import {
  SERVICE_REQUEST_URL,
  SR_LIST_URL,
  SR_COMPANY_LIST_URL
} from "../../../../constants";

export const reqGServiceState = {
  LOADING: "REQ_G_SR_LOADING",
  SUCCESS: "REQ_G_SR_SUCCESS",
  ERROR: "REQ_G_SR_ERROR",
  DONE: "REQ_G_SR_DONE"
};

export const serviceReqListState = {
  LOADING: "SR_LIST_LOADING",
  SUCCESS: "SR_LIST_SUCCESS",
  ERROR: "SR_LIST_ERROR",
  DONE: "SR_LIST_DONE"
};

export const srCompanyListState = {
  LOADING: "SR_COMPANY_LIST_LOADING",
  SUCCESS: "SR_COMPANY_LIST_SUCCESS",
  ERROR: "SR_COMPANY_LIST_ERROR",
  DONE: "SR_COMPANY_LIST_DONE"
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


export const reqGeneralService = formBody => dispatch => {
  console.log(SERVICE_REQUEST_URL);
  console.log(JSON.stringify(formBody));
  return Fetcher(
    async () => {
      const result = await fetch(SERVICE_REQUEST_URL, {
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
    reqGServiceState,
    dispatch
  );
};


export const getSRList = token => dispatch => {
  console.log(SR_LIST_URL);
  return Fetcher(
    async () => {
      const result = await fetch(SR_LIST_URL+"?id_tenant=1", {
        method: "GET"
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    serviceReqListState,
    dispatch
  );
};

export const getSRCompanyList = service_type => dispatch => {
  console.log(SR_COMPANY_LIST_URL);
  return Fetcher(
    async () => {
      const result = await fetch(SR_COMPANY_LIST_URL+"?service_type='"+service_type+"'", {
        method: "GET"
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    srCompanyListState,
    dispatch
  );
};