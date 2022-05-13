import axios from 'axios';
import { API } from 'config/api';

export function requestNewsArticles() {
  return axios.request({
    method: 'get',
    url: API.news.find,
  });
}

export function requestCreateNewsArticle(formData, header) {
  console.log('I am here mate');
  return axios.request({
    method: 'post',
    url: API.news.create,
    data: formData.payload,
    headers: header,
  });
}

export function requestEditNewsArticle(data) {
  return axios.request({
    method: 'post',
    url: `${API.news.update}/${data.payload.id}`,
    data: data.payload,
  });
}

export function requestDeleteNewsArticle(id) {
         console.log('request', id.payload);
         return axios.request({
           method: 'delete',
           url: `${API.news.delete}/${id.payload}`,
         });
       }
// export function requestGetBlogPost(blogpostId) {
//     return axios.request({
//       method: "get",
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
