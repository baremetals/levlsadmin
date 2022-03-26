// import axios from "axios";
// import config from 'config/config'


// // urlEndPoint - test url

// export function requestGetUserEntriesData(userId) {
//     return axios.request({
//       method: "get",
//       url: `${config.prodUrlEndpoint}/user/${userId}`,
//       data: userId.payload
//     });
// }

// export function requestAvote(entryId) {
//   return axios.request({
//     method: "get",
//     url: `${config.prodUrlEndpoint}/submission/${entryId}/vote`,
//     data: entryId.payload
//   });
// }

// export function requestFollowUser(userId) {
//   return axios.request({
//     method: "get",
//     url: `${config.prodUrlEndpoint}/user/${userId}/follow`,
//     data: userId.payload
//   });
// }

// export function requestUnFollowUser(userId) {
//   return axios.request({
//     method: "get",
//     url: `${config.prodUrlEndpoint}/user/${userId}/unfollow`,
//     data: userId.payload
//   });
// }

// export function requestEntryComment(entryId) {
//   return axios.request({
//     method: "post",
//     url: `${config.prodUrlEndpoint}/submission/${entryId}/comment`,
//     data: entryId.payload
//   });
// }

// export function requestEnterContest(contestId) {
//   return axios.request({
//     method: "post",
//     url: `${config.prodUrlEndpoint}/submissions`,
//     data: contestId.payload
//   });
// }

// export function requestLikeEntry(entryId) {
//   return axios.request({
//     method: "get",
//     url: `${config.prodUrlEndpoint}/submission/${entryId}/like`,
//     data: entryId.payload
//   });
// }

// export function requestUnLikeEntry(entryId) {
//   return axios.request({
//     method: "get",
//     url: `${config.prodUrlEndpoint}/submission/${entryId}/unlike`,
//     data: entryId.payload
//   });
// }

// export function requestGetContestEntries() {
//   return axios.request({
//     method: "get",
//     url: `${config.prodUrlEndpoint}/submissions`,
//   });
// }

// export function requestGetContestEntry(entryId) {
//   return axios.request({
//     method: "get",
//     url: `${config.prodUrlEndpoint}/submission/${entryId}`,
//     data: entryId.payload
//   });
// }



