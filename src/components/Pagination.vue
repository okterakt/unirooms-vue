<template>
  <div class="button-group" v-show="!(selected === 'main')">
    <v-btn-toggle v-model="floor" mandatory>
      <v-btn
        v-for="fl in floors"
        v-bind:key="fl - 1"
        :value="fl - 1"
        class="px-3"
      >
        {{ fl - 1 }}
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data: () => ({
    nrOfFloors: {
      A: 5,
      C: 5,
      D: 2,
      E: 6,
      F: 7
    },
    floor: 0
  }),
  watch: {
    floor: function(val) {
      this.$store.commit("UPDATE_NAV_STACK_TOP", val);
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
$color-primary: #0973ba;

.button-group {
  align-self: center;
}

.theme--light.v-btn-toggle .v-btn {
  color: black;
}

.theme--light.v-btn-toggle .v-btn--active {
  color: $color-primary;
}
</style>
