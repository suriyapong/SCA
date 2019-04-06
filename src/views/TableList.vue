<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <material-card color="green" title="รายชื่อประเทศ" text="ประเทศที่มีอยู่ในระบบทั้งหมด">
          <v-btn flat slot="menu">
            <v-icon>mdi-plus</v-icon>เพิ่ม
          </v-btn>
        </material-card>
      </v-flex>
      <v-flex md12>
        <material-card
          color="green"
          full-width
          title="พนักงาน"
          text="Here is a subtitle for this table"
        >
          <v-btn flat slot="menu">
            <v-icon>mdi-plus</v-icon>Add
          </v-btn>

          <v-data-table :headers="headers" :items="items.slice(0, 7)" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
              <span class="subheading font-weight-light text--darken-3" v-text="header.text"/>
            </template>
            <template slot="items" slot-scope="{ item }">
              <td>{{ item.name }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.city }}</td>
              <td class="text-xs-right">{{ item.salary }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>

      <!--New Big-->

      <v-flex xs12>
        <material-card color="green" title="รายชื่อประเทศ" text="ประเทศที่มีอยู่ในระบบทั้งหมด" full-width>
          <v-btn slot='menu'>+ เพิ่ม</v-btn>
          <v-list two-line>
            <template v-for="(item, index) in items2">
              <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>

              <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

              <v-list-tile v-else :key="item.title" avatar>
                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </material-card>
      </v-flex>

      <!--New Big-->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        sortable: true,
        text: "Name",
        value: "name"
      },
      {
        sortable: true,
        text: "Country",
        value: "country"
      },
      {
        sortable: false,
        text: "City",
        value: "city"
      },
      {
        sortable: false,
        text: "Salary",
        value: "salary",
        align: "right"
      }
    ],
    items: [
      {
        name: "รัชกฤช มัญยานนท์",
        country: "Niger",
        city: "Oud-Tunrhout",
        salary: "$35,738"
      },
      {
        name: "Minerva Hooper",
        country: "Curaçao",
        city: "Sinaai-Waas",
        salary: "$23,738"
      },
      {
        name: "Sage Rodriguez",
        country: "Netherlands",
        city: "Overland Park",
        salary: "$56,142"
      },
      {
        name: "Philip Chanley",
        country: "Korea, South",
        city: "Gloucester",
        salary: "$38,735"
      },
      {
        name: "Doris Greene",
        country: "Malawi",
        city: "Feldkirchen in Kārnten",
        salary: "$63,542"
      },
      {
        name: "Mason Porter",
        country: "Chile",
        city: "Gloucester",
        salary: "$78,615"
      }
    ],

    items2: [
      { header: "Today" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle:
          "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
      }
    ]
  })
};
</script>
