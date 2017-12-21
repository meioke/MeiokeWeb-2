import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/components/Home'

Vue.use(Router)

const NotFound = { template: '<p>Page not found</p>' }
// const About = { template: '<p>about page</p>' }

const routes = {
  '/': Home
  // '/about': About
}

export default new Router({
  routes: {
    mode: 'history',
    path: '/',
    el: '#app',
    data: {
      currentRoute: location.pathname // window.location.pathname
    },
    computed: {
      ViewComponent () {
        return routes[this.currentRoute] || NotFound
      }
    },
    render (h) { return h(this.ViewComponent) }
  }

  /* routes: [
    {
      path: '/',
      name: 'Home', // 'Hello',
      component: Home // Hello
    }] */
})
