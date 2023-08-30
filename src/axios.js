import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-7acfb/us-central1/api", // API (Cloud Function ) URL
});

export default instance;
