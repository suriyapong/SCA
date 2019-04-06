<template>
  <v-layout align-center row spacer @click="onClickLevel(description)">
    <v-flex sm4 md4 lg4>
      <h5>{{ description }}</h5>
    </v-flex>

    <v-flex no-wrap sm4 md4 lg4>
      <small>{{ totalArrived }} / {{ total}} คน</small>
    </v-flex>

    <v-flex sm4 md4 lg4>
      <v-progress-circular
        :rotate="90"
        :size="100"
        :width="5"
        :value="totalArrived"
        color="blue"
      >{{ totalArrived }} %</v-progress-circular>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    totalArrived: {
      type: Number,
      default: undefined
    },
    total: {
      type: Number,
      default: undefined
    }
  },

  methods: {
    onClickLevel(description) {
      this.$router.push({
        name: "EveryClassroom",
        params: { descriptionNow: description }
      });
    }
  }
};
</script>
