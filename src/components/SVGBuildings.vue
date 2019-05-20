<template>
  <div :class="classes" v-html="svg">
    {{ require("@/assets/planimetries/buildings.svg") }}
  </div>
</template>

<script>
export default {
  name: "SVGBuildings"
};
</script>

<style lang="scss" scoped></style>
