<template>
  <div class="container my-4 pa-0">
    <div class="room font-weight-bold">
      {{ lect.building }}{{ lect.floor }}.{{ lect.room }}
    </div>
    <div>
      <div>
        <span class="time font-weight-bold"
          >{{ lect.starttimestamp | formatDate }} -
          {{ lect.endtimestamp | formatDate }}</span
        >
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
  filters: {
    formatDate: function(timestamp) {
      if (!timestamp) return "";
      var d = new Date(timestamp);

      return d.getHours() + ":" + d.getMinutes();
      // return moment(String(timestamp)).format("hh:mm");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 2fr 5fr;
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
