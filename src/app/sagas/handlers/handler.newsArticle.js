import { call, put, takeLatest } from 'redux-saga/effects';

import {
  //     requestGetUserBlogPostsData,
  requestCreateNewsArticle,
  //     requestGetBlogPost,
  requestNewsArticles,
  requestEditNewsArticle,
  requestDeleteNewsArticle,
} from '../requests/request.newsArticle';

import {
  setNewsArticles,
  getNewsArticles,
  //     getBlogPost,
  createNewsArticle,
  createNewsArticleEntity,
  deleteNewsArticle,
  removeNewsArticle,
  //     loadingData,
  editNewsArticle,
} from 'app/features/newsArticleSlice';
// import { getUserBlogPostsData } from 'app/features/newsArticleSlice'
import { clearErrors, stopLoadingUi, setErrors, loadingUi } from 'app/features/ui/uiSlice';

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

// function* handleGetBlogPost(blogpostId) {
//     yield put(loadingUi());
//       try {
//         const res = yield call(requestGetBlogPost, blogpostId);
//         const { data } = res;
//         yield put(setBlogPosts({ ...data }));
//         yield put(stopLoadingUi());
//       } catch (error) {
//         console.log(error);
//         yield put(setBlogPosts(null));
//         yield put(setErrors(error.response.data));
//       }
// }

function* handleCreateNewsArticle(formData, header) {
  yield put(loadingUi());
  try {
    const res = yield call(requestCreateNewsArticle, formData, header);
    const { data } = res;
    yield put(createNewsArticle(data));
    yield put(clearErrors());
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response.data));
  }
}


function* handleDeleteNewsArticle(id) {
  yield put(loadingUi());
  try {
    yield call(requestDeleteNewsArticle, id);
    yield put(removeNewsArticle(id));
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response));
  }
}

function* handleEditNewsArticle(articleData) {
  yield put(loadingUi());
  try {
    yield call(requestEditNewsArticle, articleData);
    const res = yield call(requestNewsArticles)
    const { data } = res;
    yield put(setNewsArticles(data));
  } catch (error) {
    console.log(error);
    yield put(setErrors(error.response.data));
  }
}

// function* handleGetUserBlogPostsData(userId) {
//     yield put(loadingData());
//       try {
//         const res = yield call(requestGetUserBlogPostsData, userId);
//         const { data } = res;
//         yield put(setBlogPosts({ ...data }));
//       } catch (error) {
//         console.log(error);
//         yield put(setBlogPosts(null));
//         yield put(setErrors(error.response.data));
//       }
// }

function* newsArticleSagas() {
  yield takeLatest(getNewsArticles.type, handleGetNewsArticles);
      yield takeLatest(createNewsArticleEntity.type, handleCreateNewsArticle);
  //     yield takeLatest(getBlogPost.type, handleGetBlogPost);
  //     yield takeLatest(getUserBlogPostsData.type, handleGetUserBlogPostsData);
      yield takeLatest(deleteNewsArticle.type, handleDeleteNewsArticle);
      yield takeLatest(editNewsArticle.type, handleEditNewsArticle);
}
export default newsArticleSagas;
