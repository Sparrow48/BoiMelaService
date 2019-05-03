<template>
  <div>
    <v-container>
      <h1 class="subheading">New Books:</h1>
      <v-spacer></v-spacer>
      <v-layout row wrap>
        <v-flex md3 v-for="books in bookDetails" :key="books.id">
          <v-card class="text-center text-md-center ma-3">
            <v-responsive class="pt-5">imgae gose here</v-responsive>
            <v-card-text>
              <div class="subheading1">{{ books.bookName}}</div>
              <div>{{ books.authors}}</div>
              <!-- <div>author name</div> -->
              <div>{{books.price}}</div>
              <div class="btn">
                <v-btn>Add To List</v-btn>
              </div>
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
      bookDetails: []
    };
  },
  components: {},
  mounted() {
    axios
      .get("http://localhost:3000/api/boook")
      .then(response => {
        console.log(response.data);
        this.bookDetails = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
.subheading1 {
  font-size: 17px;
  text-transform: capitalize;
  padding: 15px;
  font-weight: bold;
}
.btn {
  text-transform: capitalize;
}
</style>
