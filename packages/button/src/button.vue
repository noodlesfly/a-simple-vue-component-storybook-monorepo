<template>
  <button @click="clickHandler($event)"><slot>按钮</slot></button>
</template>

<script>
export default {
  name: "lgbutton",

  methods: {
    clickHandler(e) {
      this.$emit("click", e);
      e.preventDefault();
    },
  },
};
</script>

<style></style>
