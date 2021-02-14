<template>
<div>
  <div
    class="account-body login-wrap login-start account-anonymous"
    v-show="!loginFailure"
  >
    <div class="account-body-tabs">
      <ul class="tab-start">
        <li
          class="account-tab-phone"
          v-bind:class="{ on: registerMode }"
          @click="registab()"
        >
          注册
        </li>
        <li
          class="account-tab-account"
          v-bind:class="{ on: !registerMode }"
          @click="logintab()"
        >
          登录
        </li>
      </ul>
    </div>
    <div class="account-tabcon-start">
      <div class="account-form">
        <div class="account-form-error"><span class="hide"></span></div>

        <div class="account-form-raw">
          <label class="account-form-label">账号：</label>
          <div class="account-form-field account-form-field-phone">
            <span class="icon clear-input hide"></span>
            <input
              type="phone"
              name="phone"
              maxlength="13"
              class="account-form-input"
              placeholder="账号"
              v-model="id"
              @blur="queryID()"
            />
            <div class="account-form-field-area-code"></div>
          </div>
        </div>
        <span v-show="IDExits">账号已存在</span><br />
        <div class="account-form-raw">
          <label class="account-form-label">密码：</label>
          <div class="account-form-field account-form-codes">
            <input
              id="code"
              type="text"
              name="code"
              maxlength="6"
              class="account-form-input"
              placeholder="密码"
              v-model="passward"
              autocomplete="off"
              @input="isBtnActive()"
            />
          </div>
        </div>

        <div class="account-form-field-submit ">
          <a
            href="javascript:;"
            class="btn btn-phone"
            v-bind:class="{ btnactive: btnActive }"
            v-show="registerMode"
            @click="register()"
            >注册豆瓣</a
          >
          <a
            href="javascript:;"
            class="btn btn-phone"
            v-bind:class="{ btnactive: btnActive }"
            v-show="!registerMode"
            @click="login()"
            >登录豆瓣</a
          >
        </div>
      </div>
    </div>
  </div>
  <span v-show="loginFailure">登录失败</span>
  </div>
</template>

<script>
import store from "../store.js"
export default {
  name: "Login",
  data() {
    return {
      dataList: null,
      loginFailure: false,
      message: "",
      registerMode: false,
      IDExits: false,
      id: "",
      passward: "",
      btnActive: false,
      sharedState: store.state,
    };
  },
  mounted() {},
  methods: {
    registab: function(params) {
      this.registerMode = true;
    },
    logintab: function() {
      this.registerMode = false;
    },
    login: function() {
      this.$axios
        .post("http://localhost:8081/login/", {
          id: this.id,
          passward: this.passward,
        })
        .then((response) => {
          let success = response.data.success;
          if (success) {
            console.log("success");
            this.sharedState.id = this.id;
            this.$router.push("/mobile");
          } else {
            this.loginFail();
          }
          // this.ready = true;
        });
    },
    register: function() {
      this.$axios
        .post("http://localhost:8081/register/", {
          id: this.id,
          passward: this.passward,
        })
        .then((response) => {
          let success = response.data.success;
          if (success) {
            console.log("success");
          }
        });
    },
    queryID: function() {
      if (this.registerMode && this.id.length > 0) {
        this.$axios
          .get("http://localhost:8081/queryID/" + this.id, {
            responseType: "json",
          })
          .then((response) => {
            let success = response.data;
            console.log(success);
            this.IDExits = response.data.success;
          });
      }
    },
    isBtnActive: function() {
      if (this.registerMode && this.id.length > 0) {
        this.btnActive = !this.IDExits && this.passward.length > 0;
      } else {
        this.btnActive = this.id.length > 0 && this.passward.length > 0;
      }
    },
    loginFail: function() {
      this.loginFailure = true;
      setTimeout(() => {
        this.loginFailure = false;
      }, 3000);
    },
  },
};
</script>
<style scoped>
.tab-start {
  display: flex;
}
.account-anonymous .account-body-tabs ul {
  border-bottom: 1px solid #ececec;
}
.account-anonymous .account-body-tabs ul li.on {
  border-bottom: 1px solid #494949;
}
.account-body-tabs ul li {
  display: inline-block;
  width: 50%;
  font-size: 18px;
  line-height: 2;
  text-align: center;
  cursor: pointer;
}
.account-anonymous .account-form-field input {
  width: 99%;
  padding-top: 8px;
  padding-bottom: 8px;
  box-shadow: none;
  background: #fff;
}
.account-form-input {
  width: 280px;
  font-size: 13px;
  padding: 10px;
  border-radius: 3px;
  box-sizing: border-box;
  border: 1px solid #e4e6e5;
}
.account-anonymous .account-form-tips {
  margin-bottom: 10px;
  font-size: 12px;
}
.account-form-tips {
  color: #9b9b9b;
}
.account-anonymous .account-form-field-submit .btn {
  height: 34px;
  line-height: 34px;
  font-weight: 400;
}

.account-form .btn {
  display: block;
  height: 36px;
  padding: 0 35px;
  border-radius: 3px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 36px;
  text-align: center;
  outline: 0;
  cursor: pointer;
  background-color: rgba(66, 189, 86, 0.5);
}
.account-form .btnactive {
  cursor: pointer;
  background-color: #41ac52;
}
</style>
