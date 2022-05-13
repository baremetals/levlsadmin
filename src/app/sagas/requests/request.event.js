import axios from 'axios';
import { API } from 'config/api';

export function requestGetEvents() {
  return axios.request({
    method: 'get',
    url: API.events.find,
  });
}

export function requestCreateAnEvent(formData, header) {
  return axios.request({
    method: 'post',
    url: API.events.create,
    data: formData.payload,
    headers: header,
  });
}

export function requestDeleteEvent(id) {
    return axios.request({
      method: 'delete',
      url: `${API.events.delete}/${id.payload}`,
    });
}

export function requestEditEventDetails(data) {
    return axios.request({
      method: 'post',
      url: `${API.events.update}/${data.payload.id}`,
      data: data.payload,
    });
}

