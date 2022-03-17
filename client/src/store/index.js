import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import Swal from 'sweetalert2'

const baseUrl = "http://localhost:3000";
// const baseUrl = "https://sales-taxes-rodhey.herokuapp.com";

const Toast = Swal.mixin({
  toast: true,
  position: "center",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    isRegister: false,
    userLogin: '',

    products: [],
    categories: [],
    carts: [],
    receipt: {
      products: [],
      salesTax: "0",
      total: "0"
    }

  },
  mutations: {
    LOGIN(state, payload) {
      state.isLogin = true
      state.userLogin = payload.username
      localStorage.setItem("token", payload.access_token)
      localStorage.setItem("User", payload.username)
    },
    ISLOGIN(state) {
      state.isLogin = true
      state.userLogin = localStorage.getItem('User')
    },
    GET_PRODUCT(state, payload) {
      state.products = payload
    },
    GET_CATEGORIES(state, payload) {
      state.categories = payload
    },
    GET_CARTS(state, payload) {
      state.carts = payload
    },
    GET_RECEIPT(state, payload) {
      state.receipt = payload
    },
    ISLOGOUT(state) {
      localStorage.clear();
      state.isLogin = false
    },
  },
  actions: {
    async postLogin(context, payload) {
      try {
        const respone = await axios({
          method: "post",
          url: `${baseUrl}/login`,
          data: payload,
        });
        context.commit('LOGIN', respone.data)
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });
      }
    },

    async getProducts(context) {
      try {
        const respone = await axios({
          method: "get",
          url: `${baseUrl}/products`,
          headers: {
            access_token: localStorage.getItem("token")
          }
        });
        context.commit("GET_PRODUCT", respone.data)
      } catch (err) {
        console.log(err)
      }
    },

    async getCategories(context) {
      try {
        const respone = await axios({
          method: "get",
          url: `${baseUrl}/categories`,
          headers: {
            access_token: localStorage.getItem("token")
          }
        });
        context.commit("GET_CATEGORIES", respone.data)
      } catch (err) {
        console.log(err)
      }
    },

    async getCarts(context) {
      try {
        const respone = await axios({
          method: "get",
          url: `${baseUrl}/bucket`,
          headers: {
            access_token: localStorage.getItem("token")
          }
        });
        context.commit("GET_CARTS", respone.data)
      } catch (err) {
        console.log(err)
      }
    },

    async postAddCart(context, payload) {
      try {
        const respone = await axios({
          method: "post",
          url: `${baseUrl}/bucket/add/${payload}`,
          headers: {
            access_token: localStorage.getItem("token")
          },
        });
        respone.status
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Product Add To cart',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Can't Add to Cart",
        });
      }
    },

    async postBuyProduct(context, payload) {
      try {
        const respone = await axios({
          method: "post",
          url: `${baseUrl}/bucket/buy`,
          data: {
            idBucket: payload
          },
          headers: {
            access_token: localStorage.getItem("token")
          },
        });
        context.commit("GET_RECEIPT", respone.data)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Succes buy product',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Can't buy product",
        });
      }
    },

    async deleteChart(context, payload) {
      try {
        const respone = await axios({
          method: "delete",
          url: `${baseUrl}/bucket/${payload}`,
          headers: {
            access_token: localStorage.getItem("token")
          },
        });
        respone.status
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Delete from cart',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (err) {
        console.log(err)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Can't delete from Cart",
        });
      }
    },

    async postAddProduct(context, payload) {
      try {
        const respone = await axios({
          method: "post",
          url: `${baseUrl}/products`,
          data: payload,
          headers: {
            access_token: localStorage.getItem("token")
          },
        });
        respone.status
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Succes add product',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Can't add Product",
        });
      }
    }
  },
  modules: {}
})