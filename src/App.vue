<template>
  <v-app>
    <div id="mytoolbar" v-if="!pages.includes($route.name)">
      <!-- Setting Threm-->
      <!-- <core-filter/> -->
      <core-toolbar/>
      <core-drawer/>
    </div>
    <core-view/>
  </v-app>
</template>

<style lang="scss">
@import "@/styles/index.scss";

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>

<script>
import { setTimeout } from "timers";

export default {
  data: () => ({
    // route name ที่ไม่ต้องการให้ขึ้น ToolBar กับ Drawer ใส่ชื่อใน Array นี้
    pages: ["Login", "SignUp"]
  })
};
</script>