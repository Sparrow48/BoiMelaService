<template>
  <div>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-text>
              <v-container>
                <h3 class="display-1">Sign In:</h3>
                <form>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="username"
                        label="Username"
                        id="username"
                        v-model="username"
                        type="username"
                        required
                        :rules="nameRules"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="password"
                        label="Password"
                        id="password"
                        v-model="password"
                        type="password"
                        :rules="passRules"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout>
                    <v-flex xs12>
                      <v-btn
                        color="pink darken-1 white--text"
                        type="submit"
                        @click="addToApi"
                      >Sign In</v-btn>
                    </v-flex>
                  </v-layout>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      nameRules: [
        username => !!username || "Username is required",
        username => username.length >= 6 || "Minimum Length is 6 character"
      ],
      passRules: [
        password => !!password || "Full Name is required",
        password => password.length >= 6 || "Minimum Length is 6 character"
      ]
    };
  },
  methods: {
    /* eslint-disable */
    addToApi() {
      var newSignin = {
        username: this.username,

        password: this.password
      };
      console.log(newSignin);
      axios
        .post("http://localhost:3000/api/signin", newSignin)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>
