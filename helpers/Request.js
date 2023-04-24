
class Request {

  get(url) {
    return fetch(url).then((res) => res.json());
  }
  delete(url, payload) {
    return fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }
  post(url, payload) {
    return fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    });
  }
  patch(url, payload){
    console.log(payload)
    return fetch(url, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(payload),
    })
  }
}
export default Request;
