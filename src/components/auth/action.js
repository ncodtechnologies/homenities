import {
  LOGIN_URL,
  OTP_URL
} from "../../constants";


export const loginState = {
  LOADING: "LOGIN_LOADING",
  SUCCESS: "LOGIN_SUCCESS",
  NOT_FOUND: "NOT_FOUND",
  ERROR: "LOGIN_ERROR"
};

export const tokenState = {
  DONE: "USER_LOGGED",
  CLEAR: "USER_LOGGED_OUT"
};

export const OTPState = {
  LOADING: "OTP_LOADING",
  SUCCESS: "OTP_SUCCESS",
  ERROR: "OTP_ERROR"
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


const openLoginFetcher = async (fetchData, type, dispatch) => {
  dispatch(setInStore(true, type.LOADING));
  dispatch(setInStore(null, type.ERROR));
  try {
    const result = await fetchData();
    console.log("//////////// after : "+ JSON.stringify(result));
    if (result.data) {
      dispatch(setInStore(true, type.SUCCESS));
      dispatch(setInStore(null, type.ERROR));
    }
    else
    {
      dispatch(setInStore(false, type.SUCCESS));
      dispatch(setInStore("Phone number not verified yet", type.ERROR));
    }
  } catch (error) {
    console.log("errrorrrr : "+ error);
    dispatch(setInStore(false, type.LOADING));
    dispatch(setInStore(error, type.ERROR));
  }
  dispatch(setInStore(false, type.LOADING));
};

export const loginUser = formBody => dispatch => {
  console.log(LOGIN_URL);
  return openLoginFetcher(
    async () => {
      const result = await fetch(LOGIN_URL, {
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
    loginState,
    dispatch
  );
};


const openOTPFetcher = async (fetchData, type, dispatch) => {
  dispatch(setInStore(true, type.LOADING));
  dispatch(setInStore(null, type.ERROR));
  try {
    const result = await fetchData();
    
    console.log("//////////// after OTP : "+ JSON.stringify(result));
    console.log("//////////// after OTP : "+ JSON.stringify(result.data.token));
    if (result.data.token == "0") {
      dispatch(setInStore(false, type.SUCCESS));
      dispatch(setInStore("Invalid OTP", type.ERROR));
      dispatch(clearData());
    }
    else
    {
      dispatch(setInStore(true, type.SUCCESS));
      dispatch(setInStore(null, type.ERROR));
      dispatch(setDone(result));
    }
    } catch (error) {
    console.log("errrorrrr : "+ error);
    dispatch(setInStore(false, type.LOADING));
    dispatch(setInStore(error, type.ERROR));
  }
  dispatch(setInStore(false, type.LOADING));
};

export const checkOTP = formBody => dispatch => {
  console.log(OTP_URL);
  return openOTPFetcher(
    async () => {
      const result = await fetch(OTP_URL, {
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
    OTPState,
    dispatch
  );
};