<template>
  <div>
    <div></div>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-text>
              <v-container class="text-center">
                <h3 class="display-1">Add New Books:</h3>
                <form>
                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="bookName"
                        label="Book Name"
                        id="bookName"
                        v-model="bookName"
                        type="bookName"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="price"
                        label="Price"
                        id="price"
                        v-model="price"
                        type="number"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="picture"
                        label="Image"
                        id="picture"
                        v-model="picture"
                        type="text"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="authors"
                        label="Author"
                        id="authors"
                        v-model="authors"
                        type="text"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="authorUsername"
                        label="Author Username"
                        id="authorUsername"
                        v-model="authorUsername"
                        type="string"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="stallnumber"
                        label="Stall No."
                        id="stallnumber"
                        v-model="stallnumber"
                        type="number"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout>
                    <v-flex xs12>
                      <v-btn
                        color="pink darken-1 white--text"
                        type="submit"
                        @click="addToApi"
                      >Add Book</v-btn>
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
      bookName: "",
      price: "",
      picture: "",
      authors: "",
      authorUsername: "",
      stallnumber: ""
    };
  },
  methods: {
    /* eslint-disable */
    addToApi() {
      var newBook = {
        bookName: this.bookName,
        price: this.price,
        picture: this.picture,
        authors: this.authors,
        authorUsername: this.authorUsername,
        stallnumber: this.stallnumber
      };
      console.log(newBook);
      axios
        .post("http://localhost:3000/api/addbook", newBook)
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
