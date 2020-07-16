import { runSaga } from 'redux-saga';
import { GET_LIST_SUCCESS, GET_LIST_ERROR } from '../store/actions/types';
import * as api from '../api';
import { getListSaga } from '../store/sagas';

describe('getListSaga', () => {
  it('should call api and dispatch success action', async () => {
    const dummyList = {};
    const requestList = jest.spyOn(api, 'getList')
      .mockImplementation(() => Promise.resolve(dummyList));
    const dispatched = [];
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, getListSaga);

    expect(requestList).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([{ type: GET_LIST_SUCCESS, list: dummyList }]);
    requestList.mockClear();
  });

  it('should call api and dispatch error action', async () => {
    const requestList = jest.spyOn(api, 'getList')
      .mockImplementation(() => Promise.reject());
    const dispatched = [];
    const result = await runSaga({
      dispatch: (action) => dispatched.push(action),
    }, getListSaga);

    expect(requestList).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([{ type: GET_LIST_ERROR }]);
    requestList.mockClear();
  });
});