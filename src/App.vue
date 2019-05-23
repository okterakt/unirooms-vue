<template>
  <v-app>
    <!-- Toolbar -->
    <v-toolbar>
      <img :src="require('@/assets/logo_unibz.png')" height="36" width="45" />
      <v-toolbar-title>UNIROOMS</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click.stop="drawerRight = !drawerRight"
      ></v-toolbar-side-icon>
    </v-toolbar>
    <!-- Content -->
    <v-container class="content-container pa-0 ma-3">
      <ul class="breadcrumb">
        <li
          v-for="(el, index) in navStack"
          :el="el"
          :key="index"
          @click="onBreadcrumbItemClick(index)"
        >
          {{ el.text }}
        </li>
      </ul>
      <!-- <v-breadcrumbs TODO: remove
        class="py-1 px-5"
        divider=">"
        large
        :items="navStack"
        @click="onBreadcrumbItemClick"
      >
      </v-breadcrumbs> -->
      <SVGBuildings class="pa-1" />
      <v-pagination
        v-show="!(selected === 'main')"
        class="pa-1"
        circle
        :length="floors"
        v-model="floor"
      >
      </v-pagination>
    </v-container>
    <!-- Drawer -->
    <v-navigation-drawer
      v-model="drawerRight"
      fixed
      right
      :temporary="drawerTemporary"
      :mobile-break-point="mobileBreakPoint"
      :width="drawerWidth"
    >
      <v-toolbar>
        <span class="title">Timetable</span>
        <v-spacer />
        <v-toolbar-side-icon
          v-if="$vuetify.breakpoint.smAndDown"
          @click.stop="drawerRight = !drawerRight"
        >
        </v-toolbar-side-icon>
      </v-toolbar>
      <v-container class="timetable-container">
        <TimeTable />
      </v-container>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import TimeTable from "./components/TimeTable";
import SVGBuildings from "./components/SVGBuildings";

export default {
  name: "App",
  mounted: function() {
    this.$store.dispatch("getAllLectures");
  },
  components: {
    TimeTable,
    SVGBuildings
  },
  data: () => ({
    nrOfFloors: {
      A: 4,
      C: 5,
      D: 5,
      E: 5,
      F: 5
    },
    floor: 1,
    drawerRight: null,
    mobileBreakPoint: 960,
    drawerWidth: 360
  }),
  watch: {
    floor: function(val) {
      this.$store.commit("UPDATE_NAV_STACK_TOP", val - 1);
    }
  },
  methods: {
    onBreadcrumbItemClick: function(index) {
      this.$store.commit("SLICE_NAV_STACK", index + 1);
    }
  },
  computed: {
    navStack() {
      return this.$store.getters.navStack;
    },
    selected() {
      return this.$store.getters.selected;
    },
    floors() {
      var building = this.$store.getters.selected;
      if (building == "main") return 0;
      return this.nrOfFloors[building[0]];
    },
    drawerTemporary() {
      var temporary = false;
      switch (this.$vuetify.breakpoint.name) {
        case ("xs", "sm"):
          temporary = true;
          break;
        default:
          temporary = false;
          break;
      }
      return temporary;
    }
  }
};
</script>

<style lang="scss">
$mobile-breakpoint: 960px;
$drawer-width: 400px; // accounts for padding/margin...
$primary-blue-color: #1976d2;

* {
  box-sizing: border-box;
}

html {
  overflow: auto;
}

.content-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(100vw - #{$drawer-width} - 32px);
  @media screen and (max-width: $mobile-breakpoint) {
    width: calc(100vw - 32px);
  }
  height: calc(100vh - 100px);
}

.timetable-container {
  height: calc(100% - 65px);
  overflow-y: auto;
}

.v-pagination {
  justify-content: center;
}

/* Style the list */
ul.breadcrumb {
  padding: 4px 32px;
  list-style: none;
}

/* Display list items side by side */
ul.breadcrumb li {
  display: inline;
  font-size: 16px;
  color: $primary-blue-color;
  cursor: pointer;
}

/* Add a slash symbol (/) before/behind each list item */
ul.breadcrumb li + li:before {
  padding: 8px;
  color: $primary-blue-color;
  content: ">";
  cursor: initial;
}

/* Add a color to all links inside the list */
ul.breadcrumb li a {
  color: $primary-blue-color;
  text-decoration: none;
}

// .v-pagination__item {
//   text-indent: -9999px;
//   line-height: 0; /* Collapse the original line */

//   &::after {
//     content: "0";
//     text-indent: 0;
//     display: block;
//     line-height: initial; /* New content takes up original line height */
//   }
// }
</style>
