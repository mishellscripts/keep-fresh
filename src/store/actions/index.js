import * as types from './types';

export const getList = () => ({
  type: types.GET_LIST,
});

export const addItem = item => {
  return {
    type: types.ADD_ITEM,
    item,
  };
};

export const increaseQuantity = item => {
  return {
    type: types.INCREASE_QUANTITY,
    item,
  }
}

export const decreaseQuantity = item => {
  return {
    type: types.DECREASE_QUANTITY,
    item,
  }
}

export const deleteItem = item => {
  return {
    type: types.DELETE_ITEM,
    item,
  }
}