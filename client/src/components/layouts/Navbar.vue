<template>
  <v-app>
    <v-toolbar flat>
      <v-toolbar-title @click="goHome" style="cursor:pointer">বইমেলা</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="goSignin">Sign in</v-btn>
        <v-btn flat @click="goSignup">Sign Up</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-toolbar flat class="borderStyle">
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="goIndex">Home</v-btn>
        <v-btn flat @click="goAuthor">Authors</v-btn>
        <v-btn flat @click="goPublisher">Publishers</v-btn>
        <v-btn flat @click="goFair">Book Fair 2019</v-btn>
        <!-- <v-btn flat @click="go">Sign Up</v-btn> -->
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>

<script>
export default {
  methods: {
    goAuthor() {
      this.$router.push("/Author");
    },
    goPublisher() {
      this.$router.push("/Publisher");
    },
    goFair() {
      this.$router.push("/Fair");
    },
    goSignin() {
      this.$router.push("/Signin");
    },
    goSignup() {
      this.$router.push("/Signup");
    },
    goIndex() {
      this.$router.push("/Index");
    }
  }
};
</script>

<style scoped>
.borderStyle {
  border: 1px solid #000;
  text-transform: capitalize;
}
</style>
