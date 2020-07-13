<template>
  <div class="vld-parent">
    <loading
      :active.sync="loading"
      :is-full-page="fullPage"
      background-color="#000"
      color="#fff"
    ></loading>
  </div>
</template>

<script>
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  props: ["loading"],
  data() {
    return {
      fullPage: true,
    };
  },
  components: {
    Loading,
  },
  methods: {},
};
</script>
