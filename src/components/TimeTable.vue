<template>
  <div class="px-5 py-0">
    <v-list>
      <v-progress-circular
        indeterminate
        color="#0973ba"
        v-if="loading"
      ></v-progress-circular>
      <TimeSlot v-for="(lect, index) in lectures" :lect="lect" :key="index" />
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
      return this.$store.state.lectures;
    },
    loading() {
      return this.$store.state.loading;
    }
  }
};
</script>

<style lang="scss" scoped></style>
