import axios from 'axios';
import { API } from 'config/api';

export function requestResources() {
  return axios.request({
    method: 'get',
    url: API.resources.find,
  });
}

export function requestCreateResource(formData, header) {
  // console.log('I am here mate');
  return axios.request({
    method: 'post',
    url: API.resources.create,
    data: formData.payload,
    headers: header,
  });
}

export function requestEditResource(data) {
  return axios.request({
    method: 'post',
    url: `${API.resources.update}/${data.payload.id}`,
    data: data.payload,
  });
}

export function requestDeleteResource(id) {
  // console.log('request', id.payload);
  return axios.request({
    method: 'delete',
    url: `${API.resources.delete}/${id.payload}`,
  });
}

