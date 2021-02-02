import { all, put, call, takeEvery, takeLeading} from 'redux-saga/effects'
import { actions, types } from '../state'
import { callApi } from './api'
import { makeFetchSaga } from '../../common/fetch'

function* fetchAutoComplete({keyword}) {
  const {isSuccess, data} = yield call(callApi, {
    url:'/user/search',
    params: {keyword}
  })

  if(isSuccess && data){
    yield put(actions.setValue('autoCompletes', data))
  }
}

function* fetchAllHistory(_, page){
  const { isSuccess, data } = yield call(callApi, {
    url:'/history',
    params: {page}
  });
  if (isSuccess && data) {
    yield put(actions.setValue('history', data));
  }
}

function* fetchPagination(_){
  
  const {isSuccess, data} = yield call(callApi, {
    url:'/history',

  })
  console.log("pagination saga", data, _)
  if (isSuccess && data) {
    yield put(actions.setValue('allPage', data));
  }
}

export default function* () {
  yield all ([
    takeEvery(
      types.FetchAutoComplete, makeFetchSaga({fetchSaga: fetchAutoComplete, canCache:true})
    ),
    takeLeading(
      types.FetchAllHistory,
      makeFetchSaga({ fetchSaga: fetchAllHistory, canCache: false}),
    ),
    takeLeading(
      types.FetchPagination,
      makeFetchSaga({ fetchSaga: fetchPagination, canCache: false, })
      
    )

  ])
} 