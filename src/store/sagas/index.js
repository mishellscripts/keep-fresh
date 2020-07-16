import { put, takeLatest, all, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import * as api from '../../api';

// Async generator functions
export function* getListSaga() {
  try {
    const list = yield api.getList();
    yield put({ type: types.GET_LIST_SUCCESS, list });
  } catch (error) {
    yield put({ type: types.GET_LIST_ERROR, error });
  }
}

export function* addItemSaga({ item }) {
  try {
    yield api.addItem();
    yield put({ type: types.ADD_ITEM_SUCCESS, item });
  } catch (error) {
    yield put({ type: types.ADD_ITEM_ERROR, error });
  }
}

function* deleteItemSaga({ item }) {
  try {
    yield api.deleteItem();
    yield put({ type: types.DELETE_ITEM_SUCCESS, item });
  } catch (error) {
    yield put({ type: types.DELETE_ITEM_ERROR, error });
  }
}

function* increaseQuantitySaga({ item }) {
  try {
    yield api.increaseQuantity();
  } catch (error) {
    yield put({ type: types.INCREASE_QUANTITY_ERROR, error });
  }
}

function* decreaseQuantitySaga({ item }) {
  try {
    yield api.decreaseQuantity();
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