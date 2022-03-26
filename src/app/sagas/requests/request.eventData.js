// import axios from "axios";
// import config from 'config/config'


// // urlEndPoint - test url


// export function requestGetEvents() {
//     return axios.request({
//       method: "get",
//       url: `${config.prodUrlEndpoint}/events`,
//     });
// }

// export function requestCreateAnEvent() {
//     return axios.request({
//       method: "post",
//       url: `${config.prodUrlEndpoint}/events`,
//     });
// }

// export function requestGetEvent(eventId) {
//     return axios.request({
//       method: "get",
//       url: `${config.prodUrlEndpoint}/event/${eventId}`,
//       data: eventId.payload
//     });
// }

// export function requestLikeEvent(eventId) {
//     return axios.request({
//       method: "get",
//       url: `${config.prodUrlEndpoint}/event/${eventId}/like`,
//       data: eventId.payload
//     });
// }

// export function requestUnLikeEvent(eventId) {
//     return axios.request({
//       method: "get",
//       url: `${config.prodUrlEndpoint}/event/${eventId}/unlike`,
//       data: eventId.payload
//     });
// }

// export function requestEventComment(eventId) {
//     return axios.request({
//       method: "post",
//       url: `${config.prodUrlEndpoint}/event/${eventId}/comment`,
//       data: eventId.payload
//     });
// }

// export function requestDeleteEvent(eventId) {
//     return axios.request({
//       method: "delete",
//       url: `${config.prodUrlEndpoint}/event/${eventId}`,
//       data: eventId.payload
//     });
// }

// export function requestEditEventDetails(eventId) {
//     return axios.request({
//       method: "post",
//       url: `${config.prodUrlEndpoint}/event/${eventId}`,
//       data: eventId.payload
//     });
// }

// export function requestGetUserEventsData(userId) {
//     return axios.request({
//       method: "get",
//       url: `${config.prodUrlEndpoint}/userId`,
//       data: userId.payload
//     });
// }