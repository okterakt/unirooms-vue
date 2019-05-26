<template>
  <v-pagination
    v-show="!(selected === 'main')"
    class="pa-1"
    circle
    :length="floors"
    v-model="floor"
  >
  </v-pagination>
</template>

<script>
export default {
  name: "Pagination",
  data: () => ({
    nrOfFloors: {
      A: 4,
      C: 5,
      D: 5,
      E: 5,
      F: 5
    },
    floor: 1
  }),
  watch: {
    floor: function(val) {
      this.$store.commit("UPDATE_NAV_STACK_TOP", val - 1);
    }
  },
  computed: {
    selected() {
      return this.$store.getters.selected;
    },
    floors() {
      var building = this.$store.getters.selected;
      if (building == "main") return 0;
      return this.nrOfFloors[building[0]];
    }
  }
};
</script>

<style lang="scss" scoped>
.v-pagination {
  justify-content: center;
}
</style>
