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
                        required="true"
                        :rules="bookNameRules"
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
                        :rules="priceRules"
                        required="true"
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
                        :rules="pictureRules"
                        required="true"
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
                        :rules="authorRules"
                        required
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
                        type="text"
                        :rules="authorUsernameRules"
                        required
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
                        :rules="stallnumberRules"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout>
                    <v-flex xs12>
                      <v-btn color="pink darken-1 white--text" @click="addToApi">Add Book</v-btn>
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
      stallnumber: "",

      bookNameRules: [
        bookName => !!bookName || "Book Name is required",
        bookName => bookName.length >= 6 || "Minimum Length is 6 character"
      ],
      priceRules: [
        price => !!price || "Price is required",
        price => price.length >= 1 || "Minimum Length is 1 character"
      ],
      pictureRules: [picture => !!picture || "Picture is required"],
      authorRules: [
        authors => !!authors || "Picture is required",
        authors => authors.length >= 4 || "Minimum Length is 4 character"
      ],
      authorUsernameRules: [
        authorsUsername => !!authorsUsername || "Username is required",
        authorsUsername =>
          authorsUsername.length >= 4 || "Minimum Length is 4 character"
      ],
      stallnumberRules: [
        stallnumber => !!stallnumber || "Picture is required",
        stallnumber =>
          stallnumber.length >= 1 || "Minimum Length is 1 character"
      ]
    };
  },
  methods: {
    /* eslint-disable */
    addToApi() {
      var newBook = {
        bookName: this.bookName,
        price: parseInt(this.price),
        picture: this.picture,
        authors: this.authors,
        authorUsername: this.authorUsername,
        stallnumber: this.stallnumber
      };
      console.log(newBook);
      axios
        .post("https://boimela-backend.herokuapp.com/api/addbook", {
          book: this.newBook
        })
        .then(response => {
          console.log(response.addToApi);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
