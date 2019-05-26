<template>
  <div class="timetable-container pa-0 ma-0">
    <v-progress-circular
      class="progress-bar"
      indeterminate
      color="#0973ba"
      v-if="loading"
    ></v-progress-circular>
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
</style>
