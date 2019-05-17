import axios from "axios";

export default {
  getAllLectures() {
    return axios.get("/api").then(response => {
      return response.data;
    });
  }
};
