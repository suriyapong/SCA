<template>
  <v-toolbar id="core-toolbar" dark fixed flat prominent color="blue">
    <div class="v-toolbar-title">
      <v-toolbar-title class="tertiary--text font-weight-light">
        <v-btn v-if="responsive" class="default v-btn--simple" icon @click.stop="onClickBtn">
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
        {{ title }}
      </v-toolbar-title>
    </div>
    <v-spacer></v-spacer>
    <v-btn icon dark class="default v-btn--simple">
     {{ UserName }} <v-icon>mdi-logout</v-icon>
    </v-btn>

    <v-toolbar-items></v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapMutations } from "vuex";

 //state Auth
import { mapState } from "vuex";

export default {
  data: () => ({
    title: null,
    responsive: false,
    responsiveInput: false
  }),

  //state Auth
  computed:{
    ...mapState("auth",["UserID", "UserName"])
  },

  watch: {
    $route(val) {
      this.title = val.name;
    }
  },

  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },

  methods: {
    ...mapMutations("app", ["setDrawer", "toggleDrawer"]),
    onClickBtn() {
      this.setDrawer(!this.$store.state.app.drawer);
    },
    onClick() {
      //
    },
    onResponsiveInverted() {
      if (window.innerWidth < 991) {
        this.responsive = true;
        this.responsiveInput = false;
      } else {
        this.responsive = false;
        this.responsiveInput = true;
      }
    }
  }
};
</script>

<style>
#core-toolbar a {
  text-decoration: none;
}
</style>
