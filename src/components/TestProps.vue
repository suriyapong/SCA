<template>
  <v-layout row>
    <h1>{{ title }} <small>{{ subtitle }}</small></h1>
  </v-layout>
</template> 

<script>

export default {
   props:{
    title: {
      type: String,
      default: "firstname"
    },
    subtitle: {
      type: String,
      default: "lastname"
    },
   },
}
</script>
