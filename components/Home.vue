<template>
<div class="home">
  <img class="home-image" src="../assets/_MG_5071.jpg">
  <!-- <img class="hero-image" v-bind="{menu: isPressed}" src="./assets/_MG_5071.jpg"> -->
</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  html, div, head {
    margin: 0px;
    padding: 0px;
  }

  html, div, body {
    margin: 0px;
    padding: 0px;
  }

  .home {
    display: block;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .home-image {
      margin-top: -10vh;
      width: 100%;
      height: auto;
    }
  }

  /*.hero-image.menu {
      -webkit-filter: blur(5px);
      -moz-filter: blur(5px);
      -o-filter: blur(5px);
      -ms-filter: blur(5px);
      filter: blur(5px);
  }*/
</style>
