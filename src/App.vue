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
      <v-breadcrumbs class="pa-1">
        <v-breadcrumbs-item>Hello</v-breadcrumbs-item>
        <v-breadcrumbs-item>Hello</v-breadcrumbs-item>
      </v-breadcrumbs>
      <SVGBuildings class="pa-1" />
      <v-pagination class="pa-1" circle :length="4" :value="1"> </v-pagination>
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
    drawerRight: null,
    mobileBreakPoint: 960,
    drawerWidth: 360
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
  }
};
</script>

<style lang="scss">
$mobile-breakpoint: 960px;
$drawer-width: 400px; // accounts for padding/margin...

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
  width: calc(100vw - #{$drawer-width});
  @media screen and (max-width: $mobile-breakpoint) {
    width: 95vw;
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
</style>
