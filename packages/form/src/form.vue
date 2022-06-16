<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "lgform",
  props: {
    model: {
      type: Object,
    },
    rules: {
      type: Object,
    },
  },
  provide() {
    return {
      form: this,
    };
  },
  methods: {
    validate(cb) {
      let tasks = this.$children
        .filter((item) => item.$options.name === "lgformitem" && item.prop)
        .map((item) => item.validate());
      console.log(tasks);
      Promise.all(tasks)
        .then(() => {
          cb(true);
        })
        .catch((err) => {
          cb(false);
        });
    },
  },
};
</script>

<style></style>
