import axios from "axios";

function createAxiosRequest(method, url, data = {}, headers) {
  return axios({
    method,
    url,
    data,
    headers: {
      ...headers,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(({ data, status }) => {
      if (status >= 200 && status <= 300) return data;
      else throw url;
    })
    .catch((e) => e);
}

export default {
  get(url, data, headers) {
    return createAxiosRequest("get", url, data, headers);
  },
};
