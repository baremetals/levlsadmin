import axios from 'axios';
import { API } from 'config/api';

export function requestApprenticeships() {
  // console.log('niggers wana bang');
  return axios.request({
    method: 'get',
    url: API.apprenticeships.find,
  });
}

export function requestCreateApprenticeship(formData) {
  console.log('I am here fuckboy');
  return axios.request({
    method: 'post',
    url: API.apprenticeships.create,
    data: formData.payload,
  });
}

export function requestEditApprenticeship(data) {
  return axios.request({
    method: 'post',
    url: `${API.apprenticeships.update}/${data.payload.id}`,
    data: data.payload,
  });
}

export function requestDeleteApprenticeship(id) {
  console.log('request', id.payload);
  return axios.request({
    method: 'delete',
    url: `${API.apprenticeships.delete}/${id.payload}`,
  });
}
