<template>
  <div
    class="slot-contianer my-4 pa-1"
    v-bind:class="getLectStatusFontClass(lect)"
  >
    <div class="hour-container">
      <div class="room font-weight-bold">
        {{ lect.building }}{{ lect.floor }}.{{ lect.room }}
      </div>
      <div>
        <span class="time font-weight-bold">
          {{ formatDate(lect["start-timestamp"]) }} -
          {{ formatDate(lect["end-timestamp"]) }}
        </span>
        <span class="lect-type">{{ lect.type }}</span>
      </div>
    </div>

    <div class="lecuture-container">
      <div v-bind:class="getLectStatusClass(lect)">
        {{ getLectStatus(lect) }}
      </div>
      <div>
        <div class="lect-title subheading">
          {{ formatLecTitle(lect.title) }}
        </div>
        <div class="lecturer text-uppercase">{{ lect.lecturer }}</div>
      </div>
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
    },
    formatLecTitle: function(title) {
      return title.split("_").join(" ");
    },
    getLectStatusFontClass(lect) {
      let now = +(new Date() / 1000) + 7200;
      let et = +new Date(lect["end-timestamp"]);
      if (now > et) return "grey-box";
      let st = +new Date(lect["start-timestamp"]);
      if (now < st) return "green-box";
      return "yellow-box";
    },
    getLectStatusClass(lect) {
      // Finished, Going on, Coming up
      let now = +(new Date() / 1000) + 7200;
      let et = +new Date(lect["end-timestamp"]);
      if (now > et) return "lecture-finished";
      let st = +new Date(lect["start-timestamp"]);
      if (now < st) return "lecture-coming-up";
      return "lecture-going-on";
    },
    getLectStatus(lect) {
      let now = +(new Date() / 1000) + 7200;
      let et = parseInt(lect["end-timestamp"]);
      if (now > et) return "Finished";
      let st = parseInt(lect["start-timestamp"]);
      if (now < st) return "Coming up";
      return "In progress";
    }
  }
};
</script>

<style lang="scss" scoped>
$color-primary: #0973ba;
.lecture-finished {
  font-weight: 500;
  color: #aaa;
}
.lecture-coming-up {
  font-weight: 500;
  color: rgb(201, 204, 39);
}
.lecture-going-on {
  font-weight: 500;
  color: #15b53b;
}

.grey-box {
  color: #b9b9b9 !important;
}

.slot-contianer {
  width: 100%;
  padding: 2px auto;
}

.hour-container {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-template-rows: 1fr;
}

.lecuture-container {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 2.5fr;
  grid-template-rows: 1fr;
}

.time {
  &:after {
    content: " \2219 ";
  }
}

.lect-type {
  color: #b9b9b9;
  font-weight: 500;
}

.room {
  color: $color-primary;
}

.lect-title {
  font-weight: 500;
}
</style>
