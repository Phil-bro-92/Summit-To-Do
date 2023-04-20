import request from 'request';

const API_BASE_URL= 'http://localhost:8080/api/';

class Request {
  get(url) {
    return fetch(url).then((res) => res.json());
  }
  delete(url) {
    return fetch(url).then((res) => res.json());
  }
  delete(url) {
    return fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  }
  post(url, payload) {
    return fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    });
  }
}
export default Request;
