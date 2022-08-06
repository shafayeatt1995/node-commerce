<template>
  <div>
    <Header />
    <Nuxt />
    <Newsletter />
  </div>
</template>
<script>
import Header from "./Header.vue";
import Newsletter from "./Newsletter.vue";
export default {
  name: "Frontend",
  components: { Newsletter, Header },
  head() {
    return {
      title: ` - ${this.appName}`,
      link: [
        {
          rel: "stylesheet",
          href: `/css/app.min.css`,
        },
        {
          rel: "stylesheet",
          href: `/css/style.css`,
        },
      ],
    };
  },
};
</script>
