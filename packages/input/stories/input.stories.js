import Input from "../index.js";

export default {
  title: "inputcomp",
  component: Input,
};

export const text = () => ({
  components: {
    Input,
  },
  data() {
    return {
      msg: "lalallal",
    };
  },
  template: `<input v-model="msg" placeholder="请输入用户名"></input>`,
});

export const password = () => ({
  components: {
    Input,
  },
  data() {
    return {
      msg: "1234",
    };
  },
  template: `<input type="password" v-model="msg" placeholder="请输入密码"></input>`,
});
