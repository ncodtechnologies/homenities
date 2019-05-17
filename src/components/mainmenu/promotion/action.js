import {
  PROMO_SHOPS, PROMO_OFFERS, PROMO_OFFER_DT, PROMO_REDEEM_OFFER
} from "../../../constants";

export const promoShopState = {
  LOADING: "PROMO_SHOPS_LOADING",
  SUCCESS: "PROMO_SHOPS_SUCCESS",
  ERROR: "PROMO_SHOPS_ERROR",
  DONE: "PROMO_SHOPS_DONE"
};

export const promoOfferState = {
  LOADING: "PROMO_OFFERS_LOADING",
  SUCCESS: "PROMO_OFFERS_SUCCESS",
  ERROR: "PROMO_OFFERS_ERROR",
  DONE: "PROMO_OFFERS_DONE"
};

export const promoOfferDtState = {
  LOADING: "PROMO_OFFER_DT_LOADING",
  SUCCESS: "PROMO_OFFER_DT_SUCCESS",
  ERROR: "PROMO_OFFER_DT_ERROR",
  DONE: "PROMO_OFFER_DT_DONE"
};

export const promoRedeemOfferState = {
  LOADING: "PROMO_REDEEM_OFFER_LOADING",
  SUCCESS: "PROMO_REDEEM_OFFER_SUCCESS",
  ERROR: "PROMO_REDEEM_OFFER_ERROR",
  DONE: "PROMO_REDEEM_OFFER_DONE"
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

export const loadPromoShops = token => dispatch => {
  console.log(PROMO_SHOPS);
  return Fetcher(
    async () => {
      const result = await fetch(PROMO_SHOPS, {
        method: "GET"
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    promoShopState,
    dispatch
  );
};

export const loadPromoOffers = id_shop => dispatch => {
  console.log(PROMO_OFFERS);
  const id_tenant = 1;
  return Fetcher(
    async () => {
      const result = await fetch(PROMO_OFFERS + "?id_tenant="+id_tenant+"&id_shop="+id_shop, {
        method: "GET"
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    promoOfferState,
    dispatch
  );
};

export const loadPromoOfferDt = id_offer => dispatch => {
  console.log(PROMO_OFFER_DT);
  return Fetcher(
    async () => {
      const result = await fetch(PROMO_OFFER_DT+"?id_offer="+id_offer+"&id_tenant=1", {
        method: "GET"
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    promoOfferDtState,
    dispatch
  );
};

export const redeemOffer = id_offer => dispatch => {
  console.log(PROMO_REDEEM_OFFER);
  return Fetcher(
    async () => {
      const result = await fetch(PROMO_REDEEM_OFFER, {
        method: "GET"
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok
      }));
    },
    promoRedeemOfferState,
    dispatch
  );
};
