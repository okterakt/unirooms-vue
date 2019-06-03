import axios from "axios";

export default {
  async loadAllLectures() {
    var d = new Date();
    var starttime = +d.setUTCHours(0, 0, 0, 0) / 1000;
    var endtime = +d.setUTCHours(24, 0, 0, 0) / 1000;
    const response = await axios.get(
      "/api?starttime=" + starttime + "&endtime=" + endtime
    );
    return response.data.data;
  }
};
