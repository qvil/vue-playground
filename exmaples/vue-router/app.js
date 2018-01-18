import Vue from 'vue'
// import Router from 'vue-router'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>Bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/Bar', component: Bar },
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')