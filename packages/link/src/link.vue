<template>
  <div>
    <a :href="disabled ? null : href" :class="{disabled, nounderline}">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "LgLink",
  props: {
    href: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    nounderline: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.disabled {
  cursor: not-allowed;
}
.nounderline {
  text-decoration: none;
}
</style>
