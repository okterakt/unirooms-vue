<template>
  <div class="container my-4 pa-0">
    <div class="room font-weight-bold">
      {{ lect.building }}{{ lect.floor }}.{{ lect.room }}
    </div>
    <div>
      <div>
        <span class="time font-weight-bold">
          {{ formatDate(lect["start-timestamp"]) }} -
          {{ formatDate(lect["end-timestamp"]) }}
        </span>
        <span class="lect-type">{{ lect.type }}</span>
      </div>
      <div class="lect-title subheading">{{ lect.title }}</div>
      <div class="lecturer text-uppercase">{{ lect.lecturer }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeSlot",
  props: ["lect"],
  methods: {
    addZero: function(num) {
      if (num < 10) {
        num = "0" + num;
      }
      return num;
    },
    formatDate: function(timestamp) {
      if (!timestamp) return "";
      var d = new Date(timestamp * 1000);
      var h = this.addZero(d.getUTCHours());
      var m = this.addZero(d.getUTCMinutes());

      return h + ":" + m;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
}

.time {
  &:after {
    content: " \2219 ";
  }
}

.lect-type {
  color: #757575;
  font-weight: 500;
}

.room {
  color: #0973ba;
}

.lect-title {
  font-weight: 500;
}
</style>
