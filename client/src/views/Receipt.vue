<template>
  <div class="container-fluid mt-3">
    <b-card-group deck>
      <b-card header="Receipt of your purchaes">
        <b-list-group>
          <b-list-group-item
            href="#"
            v-for="el in receipt.products"
            :key="el.name"
          >
            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span class="font-weight-bold h5 text-wrap">{{ el.name }}</span>
              <span>Items: {{ el.items }} </span>
              <span class="font-italic">Price: {{ el.price }} </span>
            </div>
          </b-list-group-item>
        </b-list-group>

        <div
          class="
            d-flex
            flex-column
            justify-content-start
            align-items-start
            mt-2
          "
        >
          <span class="font-weight-bold"
            >Tax Sales : {{ receipt.salesTax }}</span
          >
          <br />
          <span class="font-weight-bolder h5"
            >Total Sales : {{ receipt.total }}</span
          >
        </div>
      </b-card>
    </b-card-group>
    <b-button variant="primary" @click="backHome">Back Home</b-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Receipt",
  computed: {
    ...mapState(["receipt"]),
  },
  methods: {
    backHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style>
</style>