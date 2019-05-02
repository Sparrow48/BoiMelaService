<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Navbar from "@/components/layouts/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>


<style scoped>
.application--wrap {
  min-height: 0;
}
</style>




