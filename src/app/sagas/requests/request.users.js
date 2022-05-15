import axios from 'axios';
import { API } from 'config/api';

export function requestGetUsers(id = 'one') {
  return axios.request({
    method: 'get',
    url: `${API.users.find}/${id.payload || 'one'}`,
  });
}

export function requestGetOrganisations(id = 'one') {
  return axios.request({
    method: 'get',
    url: `${API.users.findOrgs}/${id.payload || 'one'}`,
  });
}

export function requestCreateUser(userData) {
  
  return axios.request({
    method: 'post',
    url: API.users.create,
    data: userData.payload,
  });
}

export function requestEditUserDetails(data) {
  return axios.request({
    method: 'post',
    url: API.users.update,
    data: data.payload,
  });
}

export function requestEditOrgDetails(data) {
  return axios.request({
    method: 'post',
    url: API.users.updateOrg,
    data: data.payload,
  });
}

export function requestDeleteUser(id) {
  // console.log('request', id.payload);
  return axios.request({
    method: 'delete',
    url: `${API.users.delete}/${id.payload}`,
  });
}
