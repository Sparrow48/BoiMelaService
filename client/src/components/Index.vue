<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 sm6 lg12 xl12>
        <v-carousel>
          <v-carousel-item v-for="slider in sliders" :src="slider.imageUrl" :key="slider.id"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-container>
      <v-layout row wrap>
        <v-flex md4 lg3>
          <v-card>
            <v-img>src</v-img>
            <v-card-text>
              <div class="subheading">{{}}</div>
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
      sliders: [
        {
          imageUrl:
            "https://www.sipri.org/sites/default/files/styles/body_embedded/public/2018-01/dsc_0155_1.jpg?itok=S1ACqEI_",
          id: "1",
          title: "Library"
        },
        {
          imageUrl:
            "https://images.unsplash.com/photo-1529007196863-d07650a3f0ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          id: "2",
          title: "Library"
        },
        {
          imageUrl:
            "https://www.meijigakuin.ac.jp/library/images/sp/cover7.jpg",
          id: "3",
          title: "Library"
        }
      ],
      team: [
          imgUrl: ''
      ]
    };
  }
};
</script>

<style scoped>
.carW {
  margin: 20px;
}
</style>
