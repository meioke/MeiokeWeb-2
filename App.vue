<template>
<div id="app">
  <!-- <header class="header">Meiji Univercity Symphony Orchestra</header> -->
  <Menu :items="links">
    <h1>Meiji Univercity Symphony Orchestra</h1>
    <!-- <button class="menu-button" v-bind="{active: isPressed}" v-on:click="pressMenu"><p>MENU</p></button> -->
    <!-- <p>This button above is pressed: {{ isPressed }}</p> -->
    <router-view></router-view>
    <footer>
      copyright Meiji Univercity Symphony Orchestra
    </footer>
  </Menu>
</div>
</template>

<script>
import Menu from './main'
export default {
  name: 'app',
  component () {
    Menu
  },
  data () {
    return {
      links: [
        { name: 'Home', routerlink: '/' },
        { name: 'About', routerlink: '/about' },
        { name: 'Concert', routerlink: '/concert' },
        { name: 'Contact', routerlink: '/contact' }
      ]
    }
  }
  /* data () {
    return {
      isPressed: false
    }
  },
  methods: {
    pressMenu: function () {
      // this.isPressed = !this.isPressed
    }
  } */
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;//60px;
}

/* .menu-button {
  display: block;
  width: 100%;
  background: white;
  .active {
    background: black;
    color: white;
  }
} */

/* .menu {
  display: block;
} */

/*.hero-image.menu {
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
  }*/
</style>
