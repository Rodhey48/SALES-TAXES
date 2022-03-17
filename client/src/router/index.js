import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Carts from "../views/Carts.vue";
import Receipt from "../views/Receipt.vue";
import AddProduct from "../views/AddProduct.vue";

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/carts',
    name: 'Carts',
    component: Carts
  },
  {
    path: '/receipt',
    name: 'Receipt',
    component: Receipt
  },
  {
    path: '/addproduct',
    name: 'AddProduct',
    component: AddProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const login = localStorage.getItem('token')
  if (!login && to.name === "Home") {
    next({
      name: "Login"
    })
  } else if (login && to.name === "Login") {
    next({
      name: "Home"
    })
  } else {
    next()
  }
})

export default router