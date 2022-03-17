<template>
  <div>
    <div class="home" id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/carts">Your Carts</router-link>
    </div>

    <div class="container py-5 bg-transparent">
      <h2>List Of Carts</h2>
      <div class="d-flex justify-content-center flex-wrap mt-4">
        <b-list-group class="col-10">
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
            v-for="el in carts"
            :key="el.id"
          >
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span class="font-weight-bold h5 text-wrap">{{
                el.Product.name
              }}</span>
              <span class="font-italic"
                >Price: {{ el.Product.price }}
                <span
                  v-if="el.Product.import || el.Product.Category.tax"
                  class="text-danger"
                >
                  + tax</span
                ></span
              >
              <a href="#" @click="deleteList(el.id)">
                <span class="text-danger">remove</span>
              </a>
            </div>

            <b-badge variant="info" pill
              ><span class="h5 p-1">{{ el.items }}</span></b-badge
            >
          </b-list-group-item>
        </b-list-group>
      </div>
      <div
        class="
          d-flex
          flex-column
          justify-content-start
          align-items-start
          ml-5
          px-2
          mt-2
        "
      >
        <b-button variant="success" @click="buyProduct">Buy Product</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Carts",
  computed: {
    ...mapState(["carts"]),
  },
  methods: {
    ...mapActions(["getCarts", "postBuyProduct", "deleteChart"]),
    async buyProduct() {
      let payload = [];
      this.carts.forEach((el) => {
        payload.push(el.id);
      });
      // console.log(payload);
      await this.postBuyProduct(payload);
      this.$router.push({ name: "Receipt" });
    },
    async deleteList(id) {
      await this.deleteChart(id);
      await this.getCarts();
      // console.log(id);
    },
  },
  async created() {
    await this.getCarts();
  },
};
</script>

<style>
</style>