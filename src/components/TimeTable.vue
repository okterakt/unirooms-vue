<template>
  <div class="px-5 py-0">
    <v-list>
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
    }
  }
};
</script>

<style lang="scss" scoped></style>
