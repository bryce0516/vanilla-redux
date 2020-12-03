import { all, takeEvery, call, put, takeLeading } from "redux-saga/effects";
import { types, actions } from "../state";
import { callApi } from "../../findClient/common/api";
import { makeFetchSaga, deleteApiCache } from '../../common/fetch'

function* fetchPeopleGen({ name }) {
  console.log("saga name", name);
  const { isSuccess, data } = yield call(callApi, {
    url: "/user/search",
    params: { keyword: name },
  });
  if (isSuccess && data) {
    const user = data.find((item) => item.name === name);
    console.log("saga user", user);
    if (user) {
      yield put(actions.setValue("people", user));
    }
  }
}

function* fetchUpdatePeople({people,key,value}){
  const oldValue = people[key]
  yield put(actions.setValue('people', {...people, [key]:value }));
  const { isSuccess, data } = yield call(callApi, {
    url: "/user/update",
    method:'post',
    data: { name:people.name, key, value, oldValue },
  });
  if(isSuccess && data){
    deleteApiCache()
  }else{ 
    yield put(actions.setValue('people', people))
  }
}

export default function* () {
  yield all([
    takeEvery(
      types.FetchPeople,  
      makeFetchSaga({fetchSaga:fetchPeopleGen, canCache: true})
    ),
    takeLeading(
      types.FetchUpdatePeople,
      makeFetchSaga({ fetchSaga: fetchUpdatePeople, canCache:false})
    ),
    
  ]);
}
