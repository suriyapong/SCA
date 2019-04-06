<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <material-card
          color="orange"
          :title="this.$route.params.descriptionNow"
          :text="GetDateTimeNowFormate()"
        >
          <v-data-table :headers="headers" :items="currentStudent" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
              <span class="subheading font-weight-light text--darken-3" v-text="header.text"/>
            </template>
            <template slot="items" slot-scope="{ item }" v-if="item.Description != null">
              <td>
                <v-list-tile-avatar>
                  <img :src="item.ImgUrl">
                </v-list-tile-avatar>
              </td>
              <td>
                {{ item.FirstName }} {{ item.LastName}}
                <br>
                <small>รหัส {{ item.StudentID }}</small>
              </td>
              <td>
                <span v-if="item.Arrived">
                  <v-icon>mdi-check</v-icon>
                  <br>{{ item.InTime }}
                </span>
                <span v-if="!item.Arrived">
                  <v-icon>mdi-alarm</v-icon>
                </span>
              </td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
//state school => Educations
import { mapState } from "vuex";

export default {
  data: () => ({
    avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",

    interval: {},
    value: 0,

    headers: [
      { value: "Icon", text: "", sortable: true },
      { value: "ชื่อ-สกุล", text: "ชื่อ-สกุล", sortable: true },
      { value: "มาเรียน", text: "มาเรียน", sortable: true }
    ],
    counter: 45,
    max: 100
  }),

  //state school => Educations
  computed: {
    ...mapState("sca", ["history"])
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
  }
};
</script>


<style>
.v-list__tile__action,
.v-list__tile__avatar {
  min-width: 0px !important;
}
</style>