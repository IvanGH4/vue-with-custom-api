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
    <p v-if="posts.length === 0">Loading...</p>
    <div class="posts" v-else>
      <div class="post" v-for="post in posts" :key="post._id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <div class="like-post-box">
          <button @click="likePost(post._id)">
            <template v-if="currentUser">
              <i
                v-if="post.likes.some((like) => like === currentUser._id)"
                class="fas fa-heart red"
              ></i>
              <i v-else class="far fa-heart"></i>
            </template>
            <i v-else class="far fa-heart"></i>
          </button>
        </div>
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
    setTimeout(() => {
      console.log(this.posts);
    }, 1000);
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
    async likePost(postId) {
      if (this.currentUser) {
        const res = await fetch(
          "https://test-api-sepia-one.vercel.app/api/post/like",
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET,PUT,POST,DELETE,PATCH,OPTIONS",
              "Content-Type": "application/json",
              token: this.currentUser.token,
            },
            method: "PATCH",
            body: JSON.stringify({
              postId: postId,
              userId: this.currentUser._id,
            }),
          }
        );
        const data = await res.json();
        this.posts = data.posts;
      } else {
        this.$router.push("/login");
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
