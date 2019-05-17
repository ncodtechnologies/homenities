import {
  SHOPPING_ITEM_LIST_URL,
  SHOPPING_REQ_ORDER_URL,
  SHOPPING_SHOP_LIST_URL
} from "../../../constants";

export const shoppingItemState = {
  LOADING: "SHOPPING_ITEMS_LOADING",
  SUCCESS: "SHOPPING_ITEMS_SUCCESS",
  ERROR: "SHOPPING_ITEMS_ERROR",
  DONE: "SHOPPING_ITEMS_DONE"
};

export const shoppingReqOrderState = {
  LOADING: "SHOPPING_REQ_ORDER_LOADING",
  SUCCESS: "SHOPPING_REQ_ORDER_SUCCESS",
  ERROR: "SHOPPING_REQ_ORDER_ERROR",
  DONE: "SHOPPING_REQ_ORDER_DONE"
};

export const shoppingShopLitState = {
  LOADING: "SHOPPING_SHOP_LIST_LOADING",
  SUCCESS: "SHOPPING_SHOP_LIST_SUCCESS",
  ERROR: "SHOPPING_SHOP_LIST_ERROR",
  DONE: "SHOPPING_SHOP_LIST_DONE"
};
 
export const shoppingCartState = {
  ADD_QTY: "ADD_QTY",
  LESS_QTY: "LESS_QTY"
};

export const addQty = (item, id_shop) => (
  {
    type: shoppingCartState.ADD_QTY,
    payload: { item, id_shop }
  }
);

export const checkResult = (result, dispatch, setError) => {
  console.log(result);
  if (result.status) {
    return true;
  }
  dispatch(setError(JSON.stringify(result.data)));
  return false;
};

export const lessQty = (id_item, id_shop) => (
  {
    type: shoppingCartState.LESS_QTY,
    payload: { id_item, id_shop }
  }
);
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

export const getItemList = id_shop => dispatch => {
  return Fetcher(
    async () => {
      const result = await fetch(SHOPPING_ITEM_LIST_URL+"?id_shop="+id_shop, {
        method: "GET"
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    shoppingItemState,
    dispatch
  );
};

export const getShopList = id_shop => dispatch => {
  return Fetcher(
    async () => {
      const result = await fetch(SHOPPING_SHOP_LIST_URL, {
        method: "GET"
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    shoppingShopLitState,
    dispatch
  );
};

export const reqOrder = formBody => dispatch => {
  console.log(SHOPPING_REQ_ORDER_URL);
  console.log("Order : " + formBody);
  return Fetcher(
    async () => {
      const result = await fetch(SHOPPING_REQ_ORDER_URL, {
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
    shoppingReqOrderState,
    dispatch
  );
};


