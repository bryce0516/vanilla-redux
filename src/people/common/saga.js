import { all, takeEvery, call, put } from "redux-saga/effects";
import { types, actions } from "../state";
import { callApi } from "../../findClient/common/api";
import makeFetchSaga from '../../common/fetch'
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

export default function* () {
  yield all([
    takeEvery(
      types.FetchPeople,  
      makeFetchSaga({fetchSaga:fetchPeopleGen, canCache: true})
    )
  ]);
}
