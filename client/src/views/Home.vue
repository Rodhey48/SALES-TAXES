<template>
  <div class="home">
    <div id="nav">
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/carts">Your Carts</router-link> |
        <a href="#" @click.prevent="logout">Logout</a>
      </div>
      <div class="mt-4 font-weight-bold text-center">
        <h2>List Of Products</h2>
      </div>
      <div class="container d-flex justify-content-start flex-wrap">
        <b-button variant="success" @click="addProduct">Add Product</b-button>
      </div>
      <div class="container py-5 bg-transparent">
        <div class="d-flex justify-content-center flex-wrap">
          <Card v-for="el in products" :key="el.id" :el="el"></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import Card from "../components/Card.vue";
export default {
  name: "Home",
  components: {
    Card,
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions(["getProducts"]),
    ...mapMutations(["ISLOGIN", "ISLOGOUT"]),
    logout() {
      this.ISLOGOUT();
      this.$router.push({ name: "Login" });
    },
    addProduct() {
      this.$router.push({ name: "AddProduct" });
    },
  },
  async created() {
    await this.getProducts();
    if (localStorage.getItem("token")) {
      this.ISLOGIN();
    }
  },
};
</script>
