<template>
  <div
    class="
      container-fluid
      d-flex
      justify-content-center justify-align-center
      flex-wrap
      mt-3
    "
  >
    <div class="ms-1">
      <section class="section" id="form-add">
        <div class="card col-12">
          <div
            class="card-header"
            style="font-size: x-large; font-weight: bold"
            id="formHeader"
          >
            Add Product
          </div>
          <div class="card-body">
            <form class="row g-3" action="#" id="form-add">
              <div class="col-md-10">
                <label for="name" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Name"
                  v-model="formProduct.name"
                />
              </div>
              <div class="col-md-10 mt-2">
                <label for="description" class="form-label">Stock</label>
                <input
                  type="number"
                  class="form-control"
                  id="description"
                  placeholder="Description"
                  v-model="formProduct.stock"
                />
              </div>
              <div class="col-md-10 mt-2">
                <label for="price" class="form-label">Price</label>
                <input
                  type="number"
                  class="form-control"
                  id="price"
                  placeholder="Price"
                  v-model="formProduct.price"
                />
              </div>
              <div class="col-md-10 mt-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  v-model="formProduct.import"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Product Import
                </label>
              </div>

              <div class="col-md-10 mt-2">
                <label for="category" class="form-label"
                  >Category Product</label
                >
                <br />
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="category"
                  v-model="formProduct.categoryId"
                >
                  <!--ini category-->
                  <option selected value="0">select Category...</option>
                  <option v-for="el in categories" :key="el.id" :value="el.id">
                    {{ el.name }}
                  </option>
                </select>
              </div>
              <div class="col-11 mt-5" id="buttonFormSubmit">
                <Button name="Add product" @buttonClick="submitForm"></Button>
                <Button
                  name="Back"
                  class="ml-2"
                  @buttonClick="backHome"
                ></Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "AddProduct",
  components: { Button },
  computed: {
    ...mapState(["categories"]),
  },
  data() {
    return {
      formProduct: {
        name: "",
        stock: "",
        price: "",
        import: "",
        categoryId: "0",
      },
    };
  },
  methods: {
    ...mapActions(["getCategories", "postAddProduct"]),
    async submitForm() {
      await this.postAddProduct(this.formProduct);
      this.$router.push({ name: "Home" });
    },
    backHome() {
      this.$router.push({ name: "Home" });
    },
  },
  async created() {
    this.getCategories();
  },
};
</script>

<style>
</style>