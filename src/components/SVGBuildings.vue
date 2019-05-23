<template>
  <v-container fill-height class="py-2">
    <v-layout>
      <BuildingPlant v-if="selected === 'main'" />
      <BuildingPlant v-if="selected === 'C0'" />
      <CZeroPlant v-if="selected === 'C1'" />
      <CZeroPlant v-if="selected === 'C2'" />
      <CZeroPlant v-if="selected === 'C3'" />
      <BuildingPlant v-if="selected === 'C4'" />
    </v-layout>
  </v-container>
</template>

<script>
import BuildingPlant from "./svgplants/BuildingPlant";
import CZeroPlant from "./svgplants/CZeroPlant";

import { mapGetters } from "vuex";

export default {
  name: "SVGBuildings",
  components: {
    BuildingPlant,
    CZeroPlant
  },
  computed: {
    ...mapGetters(["selected"])
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
