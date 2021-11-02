import axios from "axios";

function createAxiosRequest(method, api, data = {}, headers) {
  return axios({
    method,
    url: api,
    data,
    headers: {
      ...headers,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(({ data, status }) => {
      if (status >= 200 && status <= 300) return data;
      else throw api;
    })
    .catch((e) => e);
}

export default {
  get(api, data, headers) {
    return createAxiosRequest("get", api, data, headers);
  },
};
