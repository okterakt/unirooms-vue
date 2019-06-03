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
      <Breadcrumb />
      <BuildingPlants class="pa-1" />
      <Pagination />
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
        <span class="title">Timetable - {{ toDate() }}</span>
        <v-spacer />
        <v-toolbar-side-icon
          v-if="$vuetify.breakpoint.smAndDown"
          @click.stop="drawerRight = !drawerRight"
        >
        </v-toolbar-side-icon>
      </v-toolbar>
      <v-container class="timetable">
        <TimeTable />
      </v-container>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import TimeTable from "./components/TimeTable";
import BuildingPlants from "./components/BuildingPlants";
import Breadcrumb from "./components/Breadcrumb";
import Pagination from "./components/Pagination";

export default {
  name: "App",
  mounted: function() {
    this.$store.dispatch("getAllLectures");
  },
  components: {
    TimeTable,
    BuildingPlants,
    Breadcrumb,
    Pagination
  },
  data: () => ({
    drawerRight: null,
    mobileBreakPoint: 960,
    drawerWidth: 400
  }),
  computed: {
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
  },
  methods: {
    toDate: () => {
      var d = new Date();
      var date = d.toUTCString().split(" ");
      return date[0] + " " + date[1] + " " + date[2] + " " + date[3];
    }
  }
};
</script>

<style lang="scss">
$mobile-breakpoint: 960px;
$drawer-width: 440px; // accounts for padding/margin...
$color-primary: #1976d2;
$color-primary-dark: #004ba0;

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

.timetable {
  height: calc(100% - 65px);
  overflow-y: auto;
}
</style>
