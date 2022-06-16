<template>
  <div>
    <label for="">{{ label }}</label>
    <slot></slot>
    <p v-if="errMessage">{{ errMessage }}</p>
  </div>
</template>

<script>
import AsyncValidator from "async-validator";
export default {
  name: "lgformitem",
  props: {
    label: {
      type: String,
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      errMessage: "",
    };
  },
  inject: ["form"],
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      if (!this.form.model.hasOwnProperty(this.prop)) return;
      const value = this.form.model[this.prop];
      const rule = this.form.rules[this.prop];
      const validator = new AsyncValidator({ [this.prop]: rule });
      return validator.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          this.errMessage = errors[0].message;
        } else {
          this.errMessage = "";
        }
      });
    },
  },
};
</script>

<style></style>
