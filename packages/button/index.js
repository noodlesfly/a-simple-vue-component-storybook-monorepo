import lgbutton from "./src/button.vue";

lgbutton.install = (Vue) => {
  Vue.component(lgbutton.name, lgbutton);
};

export default lgbutton;
