<template>
  <div class="px-4 py-0">
    <v-list>
      <v-progress-circular
        indeterminate
        color="#0973ba"
        v-if="loading"
      ></v-progress-circular>

      <div class="timetable-container">
        <TimeSlot v-for="(lect, index) in lectures" :lect="lect" :key="index" />
      </div>
    </v-list>
  </div>
  <!-- </v-navigation-drawer> -->
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
  overflow-x: hidden;
  /*overflow-y: auto;*/
}
</style>
