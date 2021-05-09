<template>
  <div class="container">
    <h1>
      Welcome! <span v-if="currentUser">{{ currentUser.username }}</span>
    </h1>
    <h6 v-if="!currentUser">
      To start using this app you can either
      <router-link to="/login">Log in</router-link> or
      <router-link to="/register">Register</router-link>
    </h6>
    <h2>Posts</h2>
    <div v-if="posts.length === 0">
      <p>Loading posts...</p>
    </div>
    <div class="posts" v-else>
      <div class="post" v-for="post in posts" :key="post._id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const res = await fetch(
        "https://test-api-sepia-one.vercel.app/api/posts",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          method: "GET",
        }
      );
      const data = await res.json();
      this.posts = [...this.posts, ...data.posts];
    },
  },
  computed: {
    ...mapState({
      currentUser: (state) => state.user,
    }),
  },
};
</script>
