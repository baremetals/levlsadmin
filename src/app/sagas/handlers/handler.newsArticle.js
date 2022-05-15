import { call, put, takeLatest } from 'redux-saga/effects';

import {
  requestCreateNewsArticle,
  requestNewsArticles,
  requestEditNewsArticle,
  requestDeleteNewsArticle,
} from '../requests/request.newsArticle';

import {
  setNewsArticles,
  getNewsArticles,
  createNewsArticle,
  createNewsArticleEntity,
  deleteNewsArticle,
  removeNewsArticle,
  editNewsArticle,
} from 'app/features/newsArticleSlice';

import { clearErrors, stopLoadingUi, setErrors, loadingUi, setSuccess } from 'app/features/ui/uiSlice';

function* handleGetNewsArticles() {
  yield put(loadingUi());
  try {
    const res = yield call(requestNewsArticles);
    const { data } = res;
    yield put(setNewsArticles(data));
    yield put(stopLoadingUi());
  } catch (error) {
    console.log(error);
    yield put(setNewsArticles([]));
    yield put(setErrors(error.response.data));
  }
}

function* handleCreateNewsArticle(formData, header) {
  yield put(loadingUi());
  try {
    const res = yield call(requestCreateNewsArticle, formData, header);
    const { data } = res;
    yield put(createNewsArticle(data));
    yield put(setSuccess({ message: 'News Article created successfully' }));
    yield put(clearErrors());
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response.data));
  }
}

function* handleDeleteNewsArticle(id) {
  yield put(loadingUi());
  try {
    const res = yield call(requestDeleteNewsArticle, id);
    const { data } = res;
    yield put(removeNewsArticle(id));
    yield put(setSuccess(data));
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response));
  }
}

function* handleEditNewsArticle(articleData) {
  yield put(loadingUi());
  try {
    yield call(requestEditNewsArticle, articleData);
    const res = yield call(requestNewsArticles);
    const { data } = res;
    yield put(setNewsArticles(data));
    yield put(setSuccess({ message: "News Article updated successfully" }));
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response.data));
  }
}

function* newsArticleSagas() {
  yield takeLatest(getNewsArticles.type, handleGetNewsArticles);
  yield takeLatest(createNewsArticleEntity.type, handleCreateNewsArticle);
  yield takeLatest(deleteNewsArticle.type, handleDeleteNewsArticle);
  yield takeLatest(editNewsArticle.type, handleEditNewsArticle);
}
export default newsArticleSagas;
