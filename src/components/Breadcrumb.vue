<template>
  <ul class="breadcrumb">
    <li
      v-for="(el, index) in navStack"
      :el="el"
      :key="index"
      @click="onBreadcrumbItemClick(index)"
    >
      {{ el }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Breadcrumb",
  methods: {
    onBreadcrumbItemClick: function(index) {
      this.$store.commit("SLICE_NAV_STACK", index + 1);
    }
  },
  computed: {
    navStack() {
      return this.$store.getters.navStack;
    }
  }
};
</script>

<style lang="scss" scoped>
$color-primary: #1976d2;

/* Style the list */
ul.breadcrumb {
  padding: 4px 32px;
  list-style: none;
}

/* Display list items side by side */
ul.breadcrumb li {
  display: inline;
  font-size: 16px;
  color: $color-primary;
  cursor: pointer;
}

/* Add a slash symbol (/) before/behind each list item */
ul.breadcrumb li + li:before {
  padding: 8px;
  color: $color-primary;
  content: ">";
  cursor: initial;
}

ul.breadcrumb li a {
  color: $color-primary;
  text-decoration: none;
}
</style>
