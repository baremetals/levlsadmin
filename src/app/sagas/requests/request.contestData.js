// import axios from "axios";
// import config from 'config/config'


// // urlEndPoint - test url


// export function requestGetContests() {
//     return axios.request({
//       method: "get",
//       url: `${config.prodUrlEndpoint}/contests`,
//     });
// }

// export function requestHostAContest() {
//     return axios.request({
//       method: "post",
//       url: `${config.prodUrlEndpoint}/contests`,
//     });
// }

// export function requestGetContest(contestId) {
//     return axios.request({
//       method: "get",
//       url: `${config.prodUrlEndpoint}/contest/${contestId}`,
//       data: contestId.payload
//     });
// }

// export function requestLikeContest(contestId) {
//     return axios.request({
//       method: "get",
//       url: `${config.prodUrlEndpoint}/contest/${contestId}/like`,
//       data: contestId.payload
//     });
// }

// export function requestUnLikeContest(contestId) {
//     return axios.request({
//       method: "get",
//       url: `${config.prodUrlEndpoint}/contest/${contestId}/unlike`,
//       data: contestId.payload
//     });
// }

// export function requestContestComment(contestId) {
//     return axios.request({
//       method: "post",
//       url: `${config.prodUrlEndpoint}/contest/${contestId}/comment`,
//       data: contestId.payload
//     });
// }

// export function requestDeleteContest(contestId) {
//     return axios.request({
//       method: "delete",
//       url: `${config.prodUrlEndpoint}/contest/${contestId}`,
//       data: contestId.payload
//     });
// }

// export function requestEditContest(contestId) {
//     return axios.request({
//       method: "post",
//       url: `${config.prodUrlEndpoint}/contest/${contestId}`,
//       data: contestId.payload
//     });
// }

// export function requestGetUserContestsData(userId) {
//     return axios.request({
//       method: "get",
//       url: `${config.prodUrlEndpoint}/userId`,
//       data: userId.payload
//     });
// }