<template>
  <v-container fill-height class="svg-buildings-content">
    <v-layout>
      <BuildingPlant v-if="selected === 'all'" />
      <CZeroPlant v-if="selected === 'C'" />
    </v-layout>
  </v-container>
</template>

<script>
import BuildingPlant from "./svgplants/BuildingPlant";
import CZeroPlant from "./svgplants/CZeroPlant";

export default {
  name: "SVGBuildings",
  components: {
    BuildingPlant,
    CZeroPlant
  },
  computed: {
    selected() {
      return this.$store.getters.selected;
    }
  }
};
</script>

<style lang="scss">
$mobile-breakpoint: 960px;
$drawer-width: 360px;
$primary-blue-color: #0973ba;

[id^="Line_"],
line {
  stroke-linecap: square;
  stroke-linejoin: bevel;
}

tspan {
  font-family: inherit;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

svg {
  position: absolute;
  width: 100%;
  height: calc(100% - 100px);
}
</style>
