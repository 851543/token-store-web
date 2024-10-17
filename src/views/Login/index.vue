<script setup lang="ts">
import { ref } from 'vue'
// 表单数据
const loginForm = ref({
  username: '',
  password: ''
})

// 校验表单函数
const rules = {
  username: [
    {
      required: true,
      message: '用户名不能为空'
    },
    {
      min: 3,
      max: 12,
      message: '用户名长度为3~12'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空'
    },
    {
      min: 3,
      max: 12,
      message: '密码长度为3~12'
    }
  ]
}

// 控制登陆按钮
const loading = ref(false)

// 表单实例对象
const formRef = ref(null)

// 登陆事件
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
const router = useRouter()
const useUser = useUserStore()
const login = async () => {
  ;(formRef as { value: any }).value.validate(async (valid: Boolean, fields: any) => {
    if (valid) {
      await useUser.getUserInfo(loginForm.value)
      router.replace({ path: '/' })
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <div class="login">
    <div class="login-box">
      <img src="@/assets/login/login.jpg" alt="" />
      <div class="login-form">
        <el-form ref="formRef" :model="loginForm" :rules="rules">
          <div class="login-form-title">
            <img src="@/assets/login/icon_logo.jpg" style="width: 149px; height: auto" alt="" />
            <!-- <span class="title-label">苍穹外卖</span> -->
          </div>
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              type="text"
              auto-complete="off"
              placeholder="账号"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" placeholder="密码" />
          </el-form-item>
          <el-form-item style="width: 100%">
            <el-button
              :loading="loading"
              class="login-btn"
              type="primary"
              @click="login"
              style="width: 100%"
            >
              <span v-if="!loading">登录</span>
              <span v-else>登录中...</span>
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  // background: #476dbe;
  background-color: $xtxColor;
}

.login-box {
  width: 1000px;
  height: 474.38px;
  border-radius: 8px;
  display: flex;
  img {
    width: 60%;
    height: auto;
    border-radius: 8px 0px 0px 8px;
  }
}

.title {
  margin: 0px auto 10px auto;
  text-align: left;
  color: #707070;
}

.login-form {
  background: #ffffff;
  width: 40%;
  border-radius: 0px 8px 8px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-form {
    width: 214px;
    height: 307px;
  }
  .el-form-item {
    margin-bottom: 30px;
  }
  .el-form-item.is-error .el-input__inner {
    border: 0 !important;
    border-bottom: 1px solid #fd7065 !important;
    background: #fff !important;
  }
  .input-icon {
    height: 32px;
    width: 18px;
    margin-left: -2px;
  }
  .el-input__inner {
    border: 0;
    border-bottom: 1px solid #e9e9e8;
    border-radius: 0;
    font-size: 12px;
    font-weight: 400;
    color: #333333;
    height: 32px;
    line-height: 32px;
  }
  .el-input__prefix {
    left: 0;
  }
  .el-input--prefix .el-input__inner {
    padding-left: 26px;
  }
  .el-input__inner::placeholder {
    color: #aeb5c4;
  }
  .el-form-item--medium .el-form-item__content {
    line-height: 32px;
  }
  .el-input--medium .el-input__icon {
    line-height: 32px;
  }
}

.login-btn {
  border-radius: 17px;
  padding: 11px 20px !important;
  margin-top: 10px;
  font-weight: 500;
  font-size: 12px;
  border: 0;
  font-weight: 500;
  color: #ffffff;
  // background: #09a57a;
  background-color: $xtxColor;
  &:hover,
  &:focus {
    // background: #09a57a;
    background-color: $xtxColor;
    color: #ffffff;
  }
}
.login-form-title {
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  .title-label {
    font-weight: 500;
    font-size: 20px;
    color: #333333;
    margin-left: 10px;
  }
}
</style>
