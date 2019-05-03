<template>
  <div>
    <v-toolbar flat border-bottom="1px solid #000">
      <v-toolbar-title @click="goIndex" style="cursor:pointer">বইমেলা</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="goSignin" class="indigo darken-4 white--text text-capitalize">Sign in</v-btn>
        <v-btn flat @click="goSignup">Sign Up</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-toolbar flat>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down text-capitalize">
        <v-text-field prepend-icon="search"></v-text-field>
        <v-btn flat @click="goNewBooks">Add Books</v-btn>
        <v-btn flat @click="goAuthor">Authors</v-btn>
        <v-btn flat @click="goPublisher">Publishers</v-btn>
        <v-btn flat @click="goFair">Book Fair 2019</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
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
    },
    goNewBooks() {
      this.$router.push("/NewBooks");
    }
  }
};
</script>

<style scoped>
/* .borderStyle {
  border: 1px solid rgb(15, 15, 15);
} */
</style>
