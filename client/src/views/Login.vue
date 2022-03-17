<template>
  <section
    class="container-fluid d-flex justify-content-center align-self-center mt-5"
    id="loginpage"
  >
    <div class="card col-11 align-self-center">
      <div
        class="card-header mx-auto bg-transparent font-weight-bold"
        style="font-size: x-large; font-weight: bold"
      >
        <h3 class="font-weight-bold">Login</h3>
      </div>
      <div class="card-body">
        <form action="" id="login-form">
          <div class="mb-3">
            <label for="loginemail" class="form-label">Email : </label>
            <input
              type="email"
              class="form-control"
              id="loginemail"
              placeholder="Email"
              v-model="formLogin.email"
            />
          </div>
          <div class="mb-3">
            <label for="Password" class="form-label">Password : </label>
            <input
              type="password"
              class="form-control"
              id="loginpassword"
              placeholder="Password"
              v-model="formLogin.password"
            />
          </div>
          <div class="col-12 text-center">
            <Button name="Login" @buttonClick="login"></Button>
          </div>
          <br />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
// import GoogleLogin from "vue-google-login";
import Button from "../components/Button.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "LoginPage",
  components: { Button },
  data() {
    return {
      formLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["postLogin", "postGoogleLogin"]),
    toRegister: function () {
      this.$router.push({ name: "Register" });
    },
    async login() {
      await this.postLogin(this.formLogin);
      if (this.isLogin) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  computed: {
    ...mapState(["isLogin"]),
  },
};
</script>

<style>
</style>