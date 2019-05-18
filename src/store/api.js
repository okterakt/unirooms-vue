import axios from "axios";

export default {
  async loadAllLectures() {
    const response = await axios.get("/api");
    return response.data.data;
  }
};
