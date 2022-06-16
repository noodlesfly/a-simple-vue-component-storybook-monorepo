import lgform from "../index";
import lgformitem from "../../formitem/index";
import lgbutton from "../../button/index";
import lginput from "../../input/index";

export default {
  title: "form",
  component: lgform,
};

export const login = () => ({
  template: `    <lgform :model="user" :rules="rules" ref="form">
    <lgformitem label="用户名" prop="username">
      <lginput
        @change="user.username = $event"
        :value="user.username"
        placeholder="请输入用户名"
      ></lginput>
    </lgformitem>
    <lgformitem label="密码" prop="password">
      <lginput
        type="password"
        @change="user.password = $event"
        :value="user.password"
        placeholder="请输入密码"
      ></lginput>
    </lgformitem>
    <lgbutton @click="login">登录</lgbutton>
  </lgform>`,
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "请您输入用户名",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
          },
          {
            min: 6,
            max: 12,
            message: "请输入6-12位密码",
          },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert("验证成功");
        } else {
          alert("验证失败");
        }
      });
    },
  },
  components: {
    lgform,
    lgformitem,
    lgbutton,
    lginput,
  },
});
