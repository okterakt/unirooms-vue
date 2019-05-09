<template>
  <div class="px-5 py-0">
    <v-list>
      <TimeSlot v-for="(lect, index) in lectures" :lect="lect" :key="index" />
    </v-list>
  </div>
  <!-- </v-navigation-drawer> -->
</template>

<script>
import TimeSlot from "./TimeSlot";

export default {
  name: "TimeTable",
  components: {
    TimeSlot
  },
  data() {
    return {
      lectures: [
        {
          building: "E",
          floor: "4",
          room: "22",
          starttimestamp: 1557216000.0,
          endtimestamp: 1557223200.0,
          title: "Analisi Matematica II",
          type: "EXERCISE",
          lecturer: "Bertotti Maria Letizia"
        },
        {
          building: "E",
          floor: "4",
          room: "22",
          starttimestamp: 1557216000.0,
          endtimestamp: 1557223200.0,
          title: "Analisi Matematica II",
          type: "LECT",
          lecturer: "Bertotti Maria Letizia"
        },
        {
          building: "E",
          floor: "4",
          room: "22",
          starttimestamp: 1557216000.0,
          endtimestamp: 1557223200.0,
          title: "Analisi Matematica II",
          type: "LECT",
          lecturer: "Bertotti Maria Letizia"
        },
        {
          building: "E",
          floor: "4",
          room: "22",
          starttimestamp: 1557216000.0,
          endtimestamp: 1557223200.0,
          title: "Analisi Matematica II",
          type: "LAB",
          lecturer: "Bertotti Maria Letizia"
        },
        {
          building: "E",
          floor: "4",
          room: "22",
          starttimestamp: 1557216000.0,
          endtimestamp: 1557223200.0,
          title: "Analisi Matematica II",
          type: "LECT",
          lecturer: "Bertotti Maria Letizia"
        },
        {
          building: "E",
          floor: "4",
          room: "22",
          starttimestamp: 1557216000.0,
          endtimestamp: 1557223200.0,
          title: "Analisi Matematica II",
          type: "LECT",
          lecturer: "Bertotti Maria Letizia"
        },
        {
          building: "E",
          floor: "4",
          room: "22",
          starttimestamp: 1557216000.0,
          endtimestamp: 1557223200.0,
          title: "Analisi Matematica II",
          type: "LECT",
          lecturer: "Bertotti Maria Letizia"
        },
        {
          building: "E",
          floor: "4",
          room: "22",
          starttimestamp: 1557216000.0,
          endtimestamp: 1557223200.0,
          title: "Analisi Matematica II",
          type: "LECT",
          lecturer: "Bertotti Maria Letizia"
        },
        {
          building: "E",
          floor: "4",
          room: "22",
          starttimestamp: 1557216000.0,
          endtimestamp: 1557223200.0,
          title: "Analisi Matematica II",
          type: "LECT",
          lecturer: "Bertotti Maria Letizia"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
