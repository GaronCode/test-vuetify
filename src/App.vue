<template>
  <div id="app">
    <header-vue></header-vue>
    <main>
      <router-view />
    </main>
    <footer-vue></footer-vue>
  </div>
</template>

<script>
import HeaderVue from "./components/header.vue";
import FooterVue from "./components/footer.vue";
export default {
  name: "App",
  components: {
    HeaderVue,
    FooterVue,
  },
  data: () => ({
    //
  }),
  created() {
    this.$store.dispatch("loadFromLS");
  },
};
</script>
<style lang="scss">
@use "@/scss/colors.scss";
@import url("https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
li {
  list-style: none;
}
body {
  background-color: #f6f3f3;
  color: colors.$text-color;
  line-height: 150%;
  font-family: "Merriweather", "Arial", sans-serif;
  font-style: normal;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    flex-grow: 1;
  }
}

.wrapper {
  max-width: 1216px;
  margin: 0 auto;
}
</style>
