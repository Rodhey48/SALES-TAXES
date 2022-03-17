<template>
  <div class="col-05 m-2">
    <b-card
      :title="el.name"
      tag="article"
      style="max-width: 30rem; min-width: 20rem; min-height: 15rem"
      class="mb-2"
    >
      <b-card-text>
        <p>Price : {{ el.price }}</p>
        <p>Stock : {{ el.stock }}</p>
        <p class="text-danger" v-if="el.import">Import</p>
      </b-card-text>

      <b-button href="#" variant="success" @click.prevent="postAddCart(el.id)"
        >Add Cart</b-button
      >
    </b-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Card",
  props: ["el"],
  methods: {
    ...mapActions(["postAddCart"]),
  },
};
</script>

<style>
</style>