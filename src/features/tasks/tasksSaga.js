import { takeEvery, call, put, select, takeLatest, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, exampleTasksSuccess,  selectTasks, exampleTasksError} from "./tasksSlice";

function* fetchExampleTasksHandler(){
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(exampleTasksSuccess(exampleTasks));
  } catch (error){
    yield call(alert, "coś poszło nie tak!");
    yield put(exampleTasksError());
  }
};

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
};

export function* tasksSaga(){
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
};