<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <material-card color="orange" title="ข้อมูลย้อนหลัง">
          <v-flex xs12 md6 lg6>
            <v-combobox v-model="selectMonth" :items="months" label="เลือกเดือนที่ต้องการ"></v-combobox>
          </v-flex>
          <v-flex xs12 md6 lg6>
            <v-combobox v-model="selectYear" :items="years" label="เลือกปีที่ต้องการ"></v-combobox>
          </v-flex>

          <v-data-table :headers="headers" :items="history" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
              <span class="subheading font-weight-light text--darken-3" v-text="header.text"/>
            </template>
            <template slot="items" slot-scope="{ item }" v-if="item.Day != null">
              <td>{{ item.Day }}</td>
              <td>{{ item.Come }}</td>
              <td>{{ item.Late }}</td>
              <td>{{ item.Cut }}</td>
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
  data() {
    return {
      selectMonth: "เดือน",
      months: [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม"
      ],

      selectYear: "ปี",
      years: ["2562", "2563", "2564", "2565"],

      headers: [
        { value: "Day", text: "วันที่", sortable: true },
        { value: "come", text: "มา", sortable: true },
        { value: "late", text: "สายสาย", sortable: true },
        { value: "Cut", text: "ขาด", sortable: true }
      ]
    };
  },

  //state school => Educations
  computed: {
    ...mapState("sca", ["history"])
  },
};
</script>