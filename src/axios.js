import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/clone-3ea96/us-central1/api",
});

export default instance;
// http://localhost:5001/clone-3ea96/us-central1/api
//https://us-central1-clone-3ea96.cloudfunctions.net/api
