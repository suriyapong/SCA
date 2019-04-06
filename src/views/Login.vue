<template>
  <v-container style="padding: 10px">
    <v-layout row>
      <v-flex xs12>
        <v-flex xs12>
          <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200"></v-img>
        </v-flex>

        <v-text-field
          label="Email"
          placeholder="Email"
          prepend-icon="mdi-account"
        ></v-text-field>

        <v-text-field
          label="Password"
          placeholder="Password"
          type="password"
          prepend-icon="mdi-lock"
        ></v-text-field>

        <!--POPUP Register -->
        <!-- <div class="text-xs-center">
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
              <v-btn color="red lighten-2" round dark v-on="on">Register</v-btn>
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>Register</v-card-title>
              <v-card-text>
                <v-text-field
                  label="User Name"
                  placeholder="Email"
                  prepend-icon="person"
                ></v-text-field>

                <v-text-field
                  label="Password"
                  placeholder="Password"
                  type="password"
                  prepend-icon="lock"
                ></v-text-field>

                <v-text-field
                  label="Confirm Password"
                  placeholder="Repeat Password"
                  type="password"
                  prepend-icon="lock"
                ></v-text-field>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="dialog = false">Register</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div> -->

        <div class="text-xs-center">
          <!-- <v-btn to="/every-class" round color="primary" dark>LOGIN</v-btn> -->
          <!-- <v-btn to="/every-class" round color="primary" dark>LOGIN</v-btn> -->
          <v-btn @click="onLoginClick" round color="primary" dark>LOGIN</v-btn>
        </div>

        <div class="text-xs-center">
            <!-- <router-link :to="{ name: 'Register', params: { id: 1, name: 'name' } }">Register</router-link> -->
            <v-btn :to="{ name: 'Register', params: { id: 1, name: 'suriyapong' } }" round color="primary" dark>Register</v-btn>
        </div>

        <!-- <test-props title="suriyapong" subtitle="sinyod"></test-props> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import {ShowBgImage,NotShowBgImage} from '@/utils/bgHelper';
export default {
   data() {
    return {
      email:"",
    };
  },
    created(){
        ShowBgImage('https://images.unsplash.com/photo-1497733942558-e74c87ef89db?dpr=1&auto=compress,format&fit=crop&w=1650&h=&q=80&cs=tinysrgb&crop=')
    },
    destroyed(){
      NotShowBgImage();
    },
    methods:{
       onLoginClick(){
         this.$router.push({ path: 'every-class', params: { userName: this.email } })
       }
    }   
}
</script>