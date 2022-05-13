import axios from 'axios';
import { API } from 'config/api';

export function requestFundingEntities() {
         return axios.request({
           method: 'get',
           url: API.grants.find,
         });
       }

export function requestCreateFunding(formData, header) {
         console.log('I am here mate');
         return axios.request({
           method: 'post',
           url: API.grants.create,
           data: formData.payload,
           headers: header,
         });
       }

export function requestEditFunding(data) {
  return axios.request({
    method: 'post',
    url: `${API.grants.update}/${data.payload.id}`,
    data: data.payload,
  });
}

export function requestDeleteFunding(id) {
  console.log('request', id.payload);
  return axios.request({
    method: 'delete',
    url: `${API.grants.delete}/${id.payload}`,
  });
}
