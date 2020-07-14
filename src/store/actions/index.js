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

export const deleteItem = item => {
  console.log('action', item);
  return {
    type: types.DELETE_ITEM,
    item,
  }
}