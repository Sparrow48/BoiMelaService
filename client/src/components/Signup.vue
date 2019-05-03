<template>
  <div>
    <div></div>
    <v-container>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-text>
              <v-container class="text-center">
                <h3 class="display-1">Sign Up:</h3>
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
                        name="name"
                        label="Full Name"
                        id="name"
                        v-model="name"
                        type="name"
                        :rules="fullNameRules"
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

                  <v-layout row>
                    <v-flex xs12>
                      <v-text-field
                        name="email"
                        label="Email"
                        id="email"
                        v-model="email"
                        type="email"
                        required
                      ></v-text-field>
                    </v-flex>
                  </v-layout>

                  <v-layout>
                    <v-flex xs12>
                      <v-btn color="pink darken-1 white--text" type="submit">Sign Up</v-btn>
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
export default {
  data() {
    return {
      username: "",
      name: "",
      password: "",
      email: "",
      nameRules: [
        username => !!username || "Username is required",
        username => username.length >= 6 || "Minimum Length is 6 character"
      ],
      fullNameRules: [
        name => !!name || "Full Name is required",
        name => name.length >= 6 || "Minimum Length is 6 character"
      ],
      passRules: [
        password => !!password || "Full Name is required",
        password => password.length >= 6 || "Minimum Length is 6 character"
      ]
    };
  }
};
</script>