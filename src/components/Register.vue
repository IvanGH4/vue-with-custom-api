<template>
  <div class="register">
    <h2>Register</h2>
    <form @submit.prevent="submitRegister">
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" v-model="username" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
        />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async submitRegister() {
      try {
        const res = await fetch(
          "https://test-api-sepia-one.vercel.app/api/register",
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET,PUT,POST,DELETE,PATCH,OPTIONS",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: {
              username: this.username,
              email: this.email,
              password: this.password,
            },
          }
        );
        const data = await res.json();
        console.log(data);
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>