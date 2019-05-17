import axios from "axios";

export default {
  getAllLectures() {
    return axios.get("/api").then(response => response.data.data);
  }
};
