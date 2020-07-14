import { put, takeLatest, all, takeEvery, delay } from 'redux-saga/effects';
import * as types from '../actions/types';

// Async generator functions
function* getListSaga() {
  try {
    const mockData = [
      {
        name: 'Apple',
        quantity: 3,
        category: 'Fruit',
      },
      {
        name: 'Mango',
        quantity: 4,
        category: 'Fruit',
      },
      {
        name: 'Lemon',
        quantity: 2,
        category: 'Fruit',
      },
      {
        name: 'Steak',
        quantity: 1,
        category: 'Meat',
      },
    ];
    yield delay(1000);
    yield put({ type: types.GET_LIST_SUCCESS, list: mockData });
  } catch (error) {
    yield put({ type: types.GET_LIST_ERROR, error });
  }
}

function* addItemSaga({ item }) {
  try {
    yield delay(1000);
    yield put({ type: types.ADD_ITEM_SUCCESS, item });
  } catch (error) {
    yield put({ type: types.ADD_ITEM_ERROR, error });
  }
}

function* deleteItemSaga({ item }) {
  try {
    yield delay(1000);
    yield put({ type: types.DELETE_ITEM_SUCCESS, item });
  } catch (error) {
    yield put({ type: types.DELETE_ITEM_ERROR, error });
  }
}

function* increaseQuantitySaga({ item }) {
  try {
    yield delay(1000);
  } catch (error) {
    yield put({ type: types.INCREASE_QUANTITY_ERROR, error });
  }
}

function* decreaseQuantitySaga({ item }) {
  try {
    yield delay(1000);
  } catch (error) {
    yield put({ type: types.DECREASE_QUANTITY_ERROR, error });
  }
}

// Redux saga watchers
function* watchGetList() {
  yield takeLatest(types.GET_LIST, getListSaga);
}

function* watchAddItem() {
  yield takeEvery(types.ADD_ITEM, addItemSaga);
}

function* watchIncreaseQuantity() {
  yield takeEvery(types.INCREASE_QUANTITY, increaseQuantitySaga);
}

function* watchDecreaseQuantity() {
  yield takeEvery(types.DECREASE_QUANTITY, decreaseQuantitySaga);
}

function* watchDeleteItem() {
  yield takeEvery(types.DELETE_ITEM, deleteItemSaga);
}

export default function* rootSaga() {
  yield all([
    watchGetList(),
    watchAddItem(),
    watchIncreaseQuantity(),
    watchDecreaseQuantity(),
    watchDeleteItem(),
  ]);
}