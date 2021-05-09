<template>
  <div class="container create">
    <h5 v-if="currentUser">{{ currentUser.username }}</h5>
    <h2>Create a new Post</h2>
    <div>
      <form @submit.prevent="savePost">
        <div>
          <label for="title">Title</label>
          <input type="text" name="title" v-model="title" />
        </div>
        <div>
          <label for="content">Content</label>
          <textarea
            name="content"
            cols="20"
            rows="5"
            v-model="content"
          ></textarea>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    async savePost() {
      try {
        await fetch("https://test-api-sepia-one.vercel.app/api/post", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Content-Type": "application/json",
            token: this.currentUser.token,
          },
          method: "POST",
          body: JSON.stringify({
            title: this.title,
            content: this.content,
            user: this.currentUser._id,
          }),
        });
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapState({
      currentUser: (state) => state.user,
    }),
  },
};
</script>

<style>
</style>