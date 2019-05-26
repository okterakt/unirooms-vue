<template>
  <v-container fill-height class="py-2">
    <v-layout>
      <MainPlant v-if="selected === 'main'" />
      <CZeroPlant v-if="selected === 'C0'" />
      <COnePlant v-if="selected === 'C1'" />
      <CTwoPlant v-if="selected === 'C2'" />
      <CThreePlant v-if="selected === 'C3'" />
      <CFourPlant v-if="selected === 'C4'" />
    </v-layout>
  </v-container>
</template>

<script>
import MainPlant from "./svgplants/MainPlant";
import CZeroPlant from "./svgplants/CZeroPlant";
import COnePlant from "./svgplants/COnePlant";
import CTwoPlant from "./svgplants/CTwoPlant";
import CThreePlant from "./svgplants/CThreePlant";
import CFourPlant from "./svgplants/CFourPlant";

import { mapGetters } from "vuex";

export default {
  name: "BuildingPlants",
  components: {
    MainPlant,
    CZeroPlant,
    COnePlant,
    CTwoPlant,
    CThreePlant,
    CFourPlant
  },
  computed: {
    ...mapGetters(["selected"])
  }
};
</script>

<style lang="scss">
$mobile-breakpoint: 960px;
$drawer-width: 360px;

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
