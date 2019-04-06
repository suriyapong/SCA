
<template>
  <v-container fill-height fluid grid-list-xl style="padding: 10px">
    <v-layout wrap>
      <p>User Profile</p>

      <v-btn color="green" @click="setName">OK</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: () => ({}),

  methods: {
    ...mapMutations("auth", ["SetUserName"]),
    setName() {
      alert("ok");
      this.SetUserName("Big");
      alert("ok2");
    }
  }
};
</script>

