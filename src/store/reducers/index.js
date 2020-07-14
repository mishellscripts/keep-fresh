import * as types from '../actions/types';

const initialState = {
  list: [],
  loading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LIST:
    case types.ADD_ITEM:
    case types.DELETE_ITEM:
      return { ...state, loading: true };
    case types.GET_LIST_ERROR:
    case types.ADD_ITEM_ERROR:
    case types.DELETE_ITEM_ERROR:
      return { ...state, error: action.error, loading: false };
    case types.GET_LIST_SUCCESS:
      return { ...state, list: action.list, loading: false };
    case types.ADD_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        list: [...state.list, action.item],
      };
    case types.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter((item) => item.name !== action.item.name),
      };
    default:
      return state;
  }
};
  
export default reducer;