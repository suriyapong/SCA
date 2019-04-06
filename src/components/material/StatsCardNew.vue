<template>
  <material-card v-bind="$attrs" class="v-card--material-stats-new" v-on="$listeners">
    <v-card slot="offset" :class="`elevation-${elevation}`" :color="color" class="pa-4" dark >
      <v-text class="display-1">
        {{ grade }}
      </v-text>
        

    </v-card>
    <div class="text-xs-right">
      <p
        class="category grey--text font-weight-light"
        v-text="title"
      />
      <h3
        class="title display-1 font-weight-light">
        {{ Arrived }} / {{ NumberOfStudents }} <small>{{ smallValue }}</small>
      </h3>
    </div>

    <template slot="actions">
      <v-icon
        :color="subIconColor"
        size="20"
        class="mr-2"
      >
        {{ subIcon }}
      </v-icon>
      <span
        :class="subTextColor"
        class="caption font-weight-light"
        v-text="subText"
      />
      <v-spacer></v-spacer>
      <v-btn color="warning" round class="font-weight-light" to="url">รายละเอียด</v-btn>
    </template> 
  </material-card>
</template>

<script>
import Card from './Card'

export default {
  inheritAttrs: false,

  props: {
    ...Card.props,
    grade: {
      type: String,
      required: true
    },
    subIcon: {
      type: String,
      default: undefined
    },
    subIconColor: {
      type: String,
      default: undefined
    },
    subTextColor: {
      type: String,
      default: undefined
    },
    subText: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: undefined
    },
    NumberOfStudents: {
      type: String,
      default: "0"
    },
    Arrived: {
      type: String,
      default: "0"
    },
    smallValue: {
      type: String,
      default: undefined
    },
    url: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style lang="scss">
.v-card--material-stats-new {
  display: flex;
  flex-wrap: wrap;
  position: relative;

  .v-offset {
    display: inline-block;
    flex: 0 1;
    margin-top: 0;
    margin-left: 0;
    margin-right: auto;
    margin-bottom: 0 !important;
    max-width: auto;
    padding: 0 16px 0;
  }

  .v-card {
    border-radius: 4px;
    flex: 0 1 auto;
  }

  .v-card__text {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
  }

  .v-card__actions {
    flex: 1 0 100%;
  }
}
</style>
