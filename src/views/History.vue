<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <material-card color="orange" title="เลือกข้อมูลย้อนหลังที่ต้องการดู">
          <v-card-text>
            <v-treeview :items="items" open-on-click></v-treeview>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
      
    items: [
      {
        id: 0,
        name: "ภาพรวม",
        children: []
      },
      {
        id: 1,
        name: "ป.1",
        children: [
          { id: 1, name: "ป.1/1" },
          { id: 2, name: "ป.1/2" },
          { id: 3, name: "ป.1/3" },
          { id: 4, name: "ป.1/4" }
        ]
      },
      {
        id: 2,
        name: "ป.2",
        children: [
          { id: 1, name: "ป.2/1" },
          { id: 2, name: "ป.2/2" },
          { id: 3, name: "ป.2/3" },
          { id: 4, name: "ป.2/4" }
        ]
      }
    ]
  }),
 
};
</script>
