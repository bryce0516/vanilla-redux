import { all, put, call, takeEvery} from 'redux-saga/effects'
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
export default function* () {
  yield all ([
    takeEvery(types.FetchAutoComplete, makeFetchSaga({fetchSaga: fetchAutoComplete, canCache:true}))
  ])
} 