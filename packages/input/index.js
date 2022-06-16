import lginput from "./src/input.vue";

lginput.install = (Vue) => {
  Vue.component(lginput.name, lginput);
};

export default lginput;
