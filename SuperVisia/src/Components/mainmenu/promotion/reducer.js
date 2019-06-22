import {
  promoShopState,
  promoOfferState,
  promoOfferDtState,
  promoRedeemOfferState
} from "./action";

const initialPromoShopState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

const initialPromoOfferState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

const initialPromoOfferDtState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

const initialPromoRedeemOfferState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

export const promoShops = (state = initialPromoShopState, action) => {
  switch (action.type) {
    case promoShopState.LOADING:
      return { ...state, loading: action.state };
    case promoShopState.DONE:
      return { ...state, data: action.state };
    case promoShopState.SUCCESS:
      return { ...state, success: action.state };
    case promoShopState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

export const promoOffers = (state = initialPromoOfferState, action) => {
  switch (action.type) {
    case promoOfferState.LOADING:
      return { ...state, loading: action.state };
    case promoOfferState.DONE:
      return { ...state, data: action.state };
    case promoOfferState.SUCCESS:
      return { ...state, success: action.state };
    case promoOfferState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

export const promoOfferDt = (state = initialPromoOfferDtState, action) => {
  switch (action.type) {
    case promoOfferDtState.LOADING:
      return { ...state, loading: action.state };
    case promoOfferDtState.DONE:
      return { ...state, data: action.state };
    case promoOfferDtState.SUCCESS:
      return { ...state, success: action.state };
    case promoOfferDtState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

export const promoRedeemOffer = (state = initialPromoRedeemOfferState, action) => {
  switch (action.type) {
    case promoRedeemOfferState.LOADING:
      return { ...state, loading: action.state };
    case promoRedeemOfferState.DONE:
      return { ...state, data: action.state };
    case promoRedeemOfferState.SUCCESS:
      return { ...state, success: action.state };
    case promoRedeemOfferState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};
