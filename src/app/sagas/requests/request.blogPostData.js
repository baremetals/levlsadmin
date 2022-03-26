// import axios from "axios";
// import config from 'config/config'


// // urlEndPoint - test url


// export function requestGetBlogPosts() {
//     return axios.request({
//       method: "get",
//       url: `${config.prodUrlEndpoint}/blogposts`,
//     });
// }

// export function requestCreateBlogPost() {
//     return axios.request({
//       method: "post",
//       url: `${config.prodUrlEndpoint}/blogposts`,
//     });
// }

// export function requestGetBlogPost(blogpostId) {
//     return axios.request({
//       method: "get",
//       url: `${config.prodUrlEndpoint}/blogpost/${blogpostId}`,
//       data: blogpostId.payload
//     });
// }

// export function requestLikeBlogPost(blogpostId) {
//     return axios.request({
//       method: "get",
//       url: `${config.prodUrlEndpoint}/blogpost/${blogpostId}/like`,
//       data: blogpostId.payload
//     });
// }

// export function requestUnLikeBlogPost(blogpostId) {
//     return axios.request({
//       method: "get",
//       url: `${config.prodUrlEndpoint}/blogpost/${blogpostId}/unlike`,
//       data: blogpostId.payload
//     });
// }

// export function requestBlogPostComment(blogpostId) {
//     return axios.request({
//       method: "post",
//       url: `${config.prodUrlEndpoint}/blogpost/${blogpostId}/comment`,
//       data: blogpostId.payload
//     });
// }

// export function requestDeleteBlogPost(blogpostId) {
//     return axios.request({
//       method: "delete",
//       url: `${config.prodUrlEndpoint}/blogpost/${blogpostId}`,
//       data: blogpostId.payload
//     });
// }

// export function requestEditBlogPost(blogpostId) {
//     return axios.request({
//       method: "post",
//       url: `${config.prodUrlEndpoint}/blogpost/${blogpostId}`,
//       data: blogpostId.payload
//     });
// }

// export function requestGetUserBlogPostsData(userId) {
//     return axios.request({
//       method: "get",
//       url: `${config.prodUrlEndpoint}/userId`,
//       data: userId.payload
//     });
// }