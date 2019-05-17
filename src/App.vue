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
    <v-content>
      <v-container></v-container>
    </v-content>
    <!-- Drawer -->
    <v-navigation-drawer
      v-model="drawerRight"
      fixed
      right
      :temporary="drawerTemporary"
      :mobile-break-point="mobileBreakPoint"
      :width="drawerWidth"
    >
      <v-toolbar flat>
        <span class="title">Timetable</span>
        <v-spacer />
        <v-toolbar-side-icon
          v-if="$vuetify.breakpoint.smAndDown"
          @click.stop="drawerRight = !drawerRight"
        ></v-toolbar-side-icon>
      </v-toolbar>
      <TimeTable />
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import TimeTable from "./components/TimeTable";

export default {
  name: "App",
  mounted: function() {
    this.$store.dispatch("getAllLectures");
  },
  components: {
    TimeTable
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
  }
};
</script>

<style lang="scss">
html {
  overflow: hidden;
}
</style>
