<template>
  <div class="timetable-container pa-0 ma-0">
    <v-progress-circular
      class="progress-bar"
      indeterminate
      color="#0973ba"
      v-if="loading"
    ></v-progress-circular>
    <span v-if="!loading && lectures.length == 0" class="no-lectures-msg body-2"
      >NO LECTURES TO DISPLAY</span
    >
    <v-list class="timeslot-list py-0">
      <div class="px-4 py-0">
        <TimeSlot v-for="(lect, index) in lectures" :lect="lect" :key="index" />
      </div>
    </v-list>
  </div>
</template>

<script>
import TimeSlot from "./TimeSlot";

export default {
  name: "TimeTable",
  components: {
    TimeSlot
  },
  computed: {
    lectures() {
      return this.$store.state.lecturesToDisplay;
    },
    loading() {
      return this.$store.state.loading;
    }
  }
};
</script>

<style lang="scss" scoped>
$color-primary: #0973ba;

.timetable-container {
  display: flex;
  flex-direction: column;
}

.timeslot-list {
  overflow-x: hidden;
}

.progress-bar {
  align-self: center;
}

.no-lectures-msg {
  align-self: center;
  color: $color-primary;
}
</style>
