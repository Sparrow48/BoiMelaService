<template>
  <div>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-text>
              <v-container>
                <h3 class="display-1">Search:</h3>
                <form>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="username"
                        label="Enter Value"
                        id="username"
                        v-model="username"
                        type="username"
                        required
                        :rules="nameRules"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout>
                    <v-flex xs12>
                      <v-btn
                        color="pink darken-1 white--text"
                        type="submit"
                        @click="addToApi"
                      >Search</v-btn>
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

// <script>
// import axios from "axios";
// export default {
//   data() {
//     return {
//       bookDetails: []
//     };
//   },
//   components: {},
//   mounted() {
//     axios
//       .get("http://localhost:3000/api/boook")
//       .then(response => {
//         console.log(response.data);
//         this.bookDetails = response.data;
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
// };
//
//
</script>


<style>
</style>
