import axios from "axios";

const instance = axios.create({
  baseURL: " https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live",
});

export { instance };
