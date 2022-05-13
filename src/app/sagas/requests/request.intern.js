import axios from 'axios';
import { API } from 'config/api';

export function requestInternships() {
         return axios.request({
           method: 'get',
           url: API.internships.find,
         });
       }

export function requestCreateInternship(formData, header) {
         console.log('I am here mate');
         return axios.request({
           method: 'post',
           url: API.internships.create,
           data: formData.payload,
           headers: header,
         });
       }

export function requestEditInternship(data) {
  return axios.request({
    method: 'post',
    url: `${API.internships.update}/${data.payload.id}`,
    data: data.payload,
  });
}

export function requestDeleteInternship(id) {
  console.log('request', id.payload);
  return axios.request({
    method: 'delete',
    url: `${API.internships.delete}/${id.payload}`,
  });
}
