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
    case types.INCREASE_QUANTITY_ERROR:
    case types.DECREASE_QUANTITY_ERROR:
    case types.DELETE_ITEM_ERROR:
      return { ...state, error: action.error, loading: false };
    case types.GET_LIST_SUCCESS:
      return { ...state, list: action.list, loading: false };
    case types.ADD_ITEM_SUCCESS: {
      // update quantity if item is on list, otherwise, add to end of list
      // TODO: this name comparison will become id based once added to db
      const itemIndex = state.list.findIndex((item) => item.name.toLowerCase() === action.item.name.toLowerCase());
      return {
        ...state,
        loading: false,
        list: itemIndex >= 0 ?
          Object.assign([...state.list], {
            [itemIndex]: {
              ...state.list[itemIndex],
              quantity: state.list[itemIndex].quantity + action.item.quantity,
            }
          }) :
          [...state.list, action.item],
      };
    }
    case types.INCREASE_QUANTITY:
      return {
        ...state,
        list: state.list.map((item) => {
          // TODO: this name comparison will become id based once added to db
          if (item.name.toLowerCase() === action.item.name.toLowerCase()) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      }
    case types.DECREASE_QUANTITY: {
      // TODO: this name comparison will become id based once added to db
      const itemIndex = state.list.findIndex((item) => item.name.toLowerCase() === action.item.name.toLowerCase());
      const list = Object.assign([...state.list], {
        [itemIndex]: {
          ...state.list[itemIndex],
          quantity: state.list[itemIndex].quantity - 1,
        }
      });
      return {
        ...state,
        list: list[itemIndex].quantity === 0 ?
          [ ...list.slice(0, itemIndex), ...list.slice(itemIndex + 1) ] : list,
      };
    }
    case types.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        // TODO: this name comparison will become id based once added to db
        list: state.list.filter((item) => item.name.toLowerCase() !== action.item.name.toLowerCase()),
      };
    default:
      return state;
  }
};
  
export default reducer;