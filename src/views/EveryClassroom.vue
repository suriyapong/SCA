<template>
  <v-container fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <material-card
          color="orange"
          :title="this.$route.params.descriptionNow"
          :text="GetDateTimeNowFormate()"
        >
          <v-card>
            <v-list three-line>
              <template v-for="(item, index) in p1[0].Detail">
                <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>
                <v-list-tile v-else :key="item.title" avatar @click="onClickRoom(item.Description)">
                  <v-list-tile-avatar>
                    <h4>{{ item.Description }}</h4>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <!-- <v-list-tile-title v-html="item.Description"></v-list-tile-title> -->
                    <!-- <v-list-tile-sub-title v-html="item.Total"></v-list-tile-sub-title> -->
                    <small>มาเรียน : {{ item.Arrived }} / {{ item.Total }}</small>
                    <v-progress-linear :value="item.Arrived" height="10" color="blue"></v-progress-linear>
                    <small class="caption">{{ item.Arrived }} %</small>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card>
        </material-card>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12 sm6 offset-sm3></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  data: () => ({
    interval: {},
    value: 0,

    headers: [
      { value: "Icon", text: "", sortable: true },
      { value: "Level", text: "ห้อง", sortable: true },
      { value: "Total", text: "มาเรียน", sortable: true },
      { value: "Percen", text: "%", sortable: true }
    ],

    avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg"
  }),

  computed: {
    ...mapState("sca", ["p1"]),
    ...mapState("sca", ["p2"])
  },

  methods: {
    onClickRoom(description) {
      this.$router.push({
        name: "Classroom",
        params: { descriptionNow: description }
      });
    },

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
.v-progress-linear {
  margin: 0.3rem 0 !important;
}
</style>
