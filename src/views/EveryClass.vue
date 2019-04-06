<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <material-card color="orange" title="ภาพรวม" :text="GetDateTimeNowFormate()">
          
          <stats-card-class
            v-if="p1[0].Level != null"
            :level="p1[0].Level"
            :description="p1[0].Description"
            :totalArrived="p1[0].TotalArrived"
            :total="p1[0].Total"
          ></stats-card-class>

          <v-divider v-if="p2[0].Level != null"></v-divider>
          <stats-card-class
            v-if="p2[0].Level != null"
            :level="p2[0].Level"
            :description="p2[0].Description"
            :totalArrived="p2[0].TotalArrived"
            :total="p2[0].Total"
          ></stats-card-class>

          <v-divider v-if="p3[0].Level != null"></v-divider>
          <stats-card-class
            v-if="p3[0].Level != null"
            :level="p3[0].Level"
            :description="p3[0].Description"
            :totalArrived="p3[0].TotalArrived"
            :total="p3[0].Total"
          ></stats-card-class>

          <v-divider v-if="p4[0].Level != null"></v-divider>
          <stats-card-class
            v-if="p4[0].Level != null"
            :level="p4[0].Level"
            :description="p4[0].Description"
            :totalArrived="p4[0].TotalArrived"
            :total="p1[0].Total"
          ></stats-card-class>

          <v-divider v-if="p5[0].Level != null"></v-divider>
          <stats-card-class
            v-if="p5[0].Level != null"
            :level="p5[0].Level"
            :description="p5[0].Description"
            :totalArrived="p5[0].TotalArrived"
            :total="p1[0].Total"
          ></stats-card-class>

          <v-divider v-if="p6[0].Level != null"></v-divider>
          <stats-card-class
            v-if="p6[0].Level != null"
            :level="p6[0].Level"
            :description="p6[0].Description"
            :totalArrived="p6[0].TotalArrived"
            :total="p1[0].Total"
          ></stats-card-class>

          <v-divider v-if="m1[0].Level != null"></v-divider>
          <stats-card-class
            v-if="m1[0].Level != null"
            :level="m1[0].Level"
            :description="m1[0].Description"
            :totalArrived="m1[0].TotalArrived"
            :total="m1[0].Total"
          ></stats-card-class>

          <v-divider v-if="m2[0].Level != null"></v-divider>
          <stats-card-class
            v-if="m2[0].Level != null"
            :level="m2[0].Level"
            :description="m2[0].Description"
            :totalArrived="m2[0].TotalArrived"
            :total="m2[0].Total"
          ></stats-card-class>

        </material-card>
      </v-flex>

      <!-- <v-flex>
        <template>
          <p>{{ filltedCustomer }}</p>
        </template>
      </v-flex>-->
    </v-layout>
  </v-container>
</template>



<script>
const customers = [
  { firstname: "suriyapong", lastname: "sinyod" },
  { firstname: "suthin", lastname: "Chowwai" },
  { firstname: "chai", lastname: "Chowwai" },
  { firstname: "anuthin", lastname: "Chowwai" }
];

//state school => Educations
import { mapState } from "vuex";

export default {
  data: () => ({
    avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",

    interval: {},
    value: 0,

    headers: [
      { value: "Icon", text: "", sortable: true },
      { value: "Level", text: "ชั้น", sortable: true },
      { value: "Total", text: "มาเรียน", sortable: true },
      { value: "Percen", text: "%", sortable: true }
    ],
    counter: 45,
    max: 100
  }),

  //state school => Educations
  computed: {
    ...mapState("sca", [
      "p1",
      "p2",
      "p3",
      "p4",
      "p5",
      "p6",
      "m1",
      "m2",
      "m3",
      "m4",
      "m5",
      "m6"
    ]),
    filltedCustomer: function() {
      return customers.filter(cus => {
        return cus.firstname.startsWith("s");
      });
    }
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 10;
    }, 1000);
  },

  methods: {
    GetDateTimeNowFormate() {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }

      if (mm < 10) {
        mm = "0" + mm;
      }
      today = mm + "-" + dd + "-" + yyyy;
      console.log(today);
      today = mm + "/" + dd + "/" + yyyy;
      console.log(today);
      today = dd + "-" + mm + "-" + yyyy;
      console.log(today);
      today = dd + "/" + mm + "/" + yyyy;
      console.log(today);

      return today;
    }
  }
};
</script>

<style>
.v-list__tile__action,
.v-list__tile__avatar {
  min-width: 0px !important;
}
</style>
