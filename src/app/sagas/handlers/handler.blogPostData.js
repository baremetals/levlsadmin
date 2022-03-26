// import { call, put, takeLatest } from "redux-saga/effects";

// import { 
//     requestGetUserBlogPostsData,
//     requestCreateBlogPost,
//     requestGetBlogPost,
//     requestGetBlogPosts,
//     requestLikeBlogPost,
//     requestUnLikeBlogPost,
//     requestBlogPostComment,
//     requestDeleteBlogPost,
//     requestEditBlogPost, 
// } from "../requests/request.blogPostData";

// import { 
//     setBlogPosts,
//     getBlogPosts,
//     getBlogPost,
//     createBlogPost,
//     likeBlogPost,
//     unLikeBlogPost,
//     blogPostComment,
//     deleteBlogPost,
//     loadingData,
//     editBlogPost,
//  } from "features/articles/blogpostSlice";
// import { getUserBlogPostsData } from 'features/users/userSlice'
// import { clearErrors, stopLoadingUi, setErrors, loadingUi } from 'features/ui/uiSlice'


// function* handleGetBlogPosts() {
//     yield put(loadingUi());
//       try {
//         const res = yield call(requestGetBlogPosts);
//         const { data } = res;
//         yield put(setBlogPosts({ ...data }));
//         yield put(stopLoadingUi());
//       } catch (error) {
//         console.log(error);
//         yield put(setBlogPosts([]));
//         yield put(setErrors(error.response.data));
//       }
// }

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

// function* handleCreateBlogPost(formData) {
//     yield put(loadingUi());
//       try {
//         const blogpost = yield call(requestCreateBlogPost, formData);
//         const { data } = blogpost;
//         yield put(createBlogPost({ ...data }));
//         yield put(clearErrors());
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }

// function* handleLikeBlogPost(blogpostId) {
//       try {
//         const res = yield call(requestLikeBlogPost, blogpostId);
//         const { data } = res;
//         yield put(likeBlogPost({ ...data }));
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }

// function* handleUnLikeBlogPost(blogpostId) {
//       try {
//         const res = yield call(requestUnLikeBlogPost, blogpostId);
//         const { data } = res;
//         yield put(unLikeBlogPost({ ...data }));
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }

// function* handleBlogPostComment(blogpostId) {
//       try {
//         const res = yield call(requestBlogPostComment, blogpostId);
//         const { data } = res;
//         yield put(blogPostComment({ ...data }));
//         yield put(clearErrors());
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }

// function* handleDeleteBlogPost(blogpostId) {
//     yield put(loadingData());
//       try {
//         const res = yield call(requestDeleteBlogPost, blogpostId);
//         const { data } = res;
//         yield put(deleteBlogPost({ ...data }));
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }

// function* handleEditBlogPost(blogpostId) {
//     yield put(loadingData());
//       try {
//         const res = yield call(requestEditBlogPost, blogpostId);
//         const { data } = res;
//         yield put(setBlogPosts({ ...data }));
//       } catch (error) {
//         console.log(error);
//         yield put(setErrors(error.response.data));
//       }
// }


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

// function* blogPostSagas() {
//     yield takeLatest(getBlogPosts.type, handleGetBlogPosts);
//     yield takeLatest(createBlogPost.type, handleCreateBlogPost);
//     yield takeLatest(getBlogPost.type, handleGetBlogPost);
//     yield takeLatest(getUserBlogPostsData.type, handleGetUserBlogPostsData);
//     yield takeLatest(likeBlogPost.type, handleLikeBlogPost);
//     yield takeLatest(unLikeBlogPost.type, handleUnLikeBlogPost);
//     yield takeLatest(blogPostComment.type, handleBlogPostComment);
//     yield takeLatest(deleteBlogPost.type, handleDeleteBlogPost);
//     yield takeLatest(editBlogPost.type, handleEditBlogPost);
// }
// export default blogPostSagas 