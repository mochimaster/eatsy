import merge from "lodash/merge";

import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {
  RECEIVE_SHOPPING_CART_ITEM_PAYLOAD,
  RECEIVE_ALL_SHOPPING_CART_ITEMS_PAYLOAD,
  REMOVE_SHOPPING_CART_ITEM,
  REMOVE_SHOPPING_CART_ITEMS
} from "../actions/shopping_cart_actions";

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    case RECEIVE_SHOPPING_CART_ITEM_PAYLOAD:
      if (action.payload.users) {
        return merge({}, {currentUser: action.payload.users[state.currentUser.id]});
      } else {
        return state;
      }
    case RECEIVE_ALL_SHOPPING_CART_ITEMS_PAYLOAD:
      if (action.payload.users) {
        return merge({}, {currentUser: action.payload.users[state.currentUser.id]});
      } else {
        return state;
      }
    case REMOVE_SHOPPING_CART_ITEM:
      newState = merge({}, state);
      const index = newState.currentUser.shoppingCartItemsIds.indexOf(action.shoppingCartItemId);
      newState.currentUser.shoppingCartItemsIds.splice(index, 1);
      return newState;
    case REMOVE_SHOPPING_CART_ITEMS:
      newState = merge({}, state);
      newState.currentUser.shoppingCartItemsIds = [];
      return newState;
    // case REMOVE_PRODUCT:
    //   newState = merge({}, state);
    //   let matchingShoppingCartItem = newState.shoppingCartItemsIds.filter(id => id.productId === action.productId);
    //   let deleteId = matchingShoppingCartItem[0].id;
    //   delete newState[deleteId];
    //   return newState;
    default:
      return state;
  }
};

export default sessionReducer;
