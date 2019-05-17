import {
  shoppingCartState,
  shoppingItemState,
  shoppingReqOrderState,
  shoppingShopLitState
} from "./action";

const initialshoppingCartState = {
  items: [],
  qty: 5
};

export const shoppingCart = (state = initialshoppingCartState, action) => {
  switch (action.type) {
    case shoppingCartState.ADD_QTY:
      let __items = state.items;
      let __qty = state.qty;
      __items = incQty(__items, action.payload)
      let __newState = { items : __items, qty : __qty };
      return __newState;
    case shoppingCartState.LESS_QTY:
      let _items = state.items;
      let _qty = state.qty;
      _items = decQty(_items, action.payload)
      let _newState = { items : _items, qty : _qty };
      return _newState;
    default:
      return state;
  }
};

incQty = (items, payload) =>
{
    item = payload.item;
    id_item = payload.item.id_item;
    i = 0, ii = items.length;
    var found = false;
    for(i; i < ii; i++)
    {
      if(items[i].item.id_item == id_item)
      {
        items[i].item.qty++;
        found=true;
        break;
      }
    } 
    if(!found)
    {
      item.qty = 1;
      items.push({ item: item, qty: 1 });
    }
    return items;
}

decQty = (items, payload) =>
{
    id_item = payload.id_item;
    i = 0, ii = items.length;
    var found = false;
    for(i; i < ii; i++)
    {
      if(items[i].item.id_item == id_item)
      {
        items[i].item.qty--;
        found=true;
        break;
      }
    } 
    return items;
}

const initialShoppingItemState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

export const shoppingItems = (state = initialShoppingItemState, action) => {
  switch (action.type) {
    case shoppingItemState.LOADING:
      return { ...state, loading: action.state };
    case shoppingItemState.DONE:
      return { ...state, data: action.state };
    case shoppingItemState.SUCCESS:
      return { ...state, success: action.state };
    case shoppingItemState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

const initialShoppingShopListState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

export const shoppingShopList = (state = initialShoppingShopListState, action) => {
  switch (action.type) {
    case shoppingShopLitState.LOADING:
      return { ...state, loading: action.state };
    case shoppingShopLitState.DONE:
      return { ...state, data: action.state };
    case shoppingShopLitState.SUCCESS:
      return { ...state, success: action.state };
    case shoppingShopLitState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};

const initialShoppingReqOrderState = {
  loading: false,
  data: null,
  success: null,
  error: null
};

export const shoppingOrder = (state = initialShoppingReqOrderState, action) => {
  switch (action.type) {
    case shoppingReqOrderState.LOADING:
      return { ...state, loading: action.state };
    case shoppingReqOrderState.DONE:
      return { ...state, data: action.state };
    case shoppingReqOrderState.SUCCESS:
      return { ...state, success: action.state };
    case shoppingReqOrderState.ERROR:
      return { ...state, error: action.state };
    default:
      return state;
  }
};
