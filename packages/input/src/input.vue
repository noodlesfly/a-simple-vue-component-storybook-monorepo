<template>
  <input
    :type="type"
    :value="value"
    @input="inputHandler($event)"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  props: {
    name: "lginput",
    type: {
      type: String,
      default: "text",
    },
    inheritAttrs: false,
    value: {
      type: String,
    },
  },
  methods: {
    inputHandler(e) {
      this.$emit("change", e.target.value);
      // 触发formitem验证机制
      const findParent = (parent) => {
        while (parent) {
          if (parent.$options && parent.$options.name === "lgformitem") {
            break;
          } else {
            parent = parent.$parent;
          }
        }
        return parent;
      };
      const parent = findParent(this.$parent);
      if (parent) {
        parent.$emit("validate");
      }
    },
  },
};
</script>

<style></style>
