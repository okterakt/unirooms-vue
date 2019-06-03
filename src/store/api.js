import axios from "axios";

export default {
  async loadAllLectures() {
    var time = new Date();
    var starttime = +time.setUTCHours(0, 0, 0, 0) / 1000;
    var endtime = +time.setUTCHours(24, 0, 0, 0) / 1000;
    const response = await axios.get(
      "/api?starttime=" + starttime + "&endtime=" + endtime
    );
    return response.data.data;
  }
};
