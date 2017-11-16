<template>
  <div class="login">
    <el-row>
      <el-col :span='24'>
        <div class="content">
          <el-form label-position="left" label-width="0px" class="login-form card-box "
                   v-loading="login_status.disabled"
                   :element-loading-text="'正在登录'"
                   :model='form'
                   :rules="rule_data"
                   ref='form'>
            <h3 class="title">
              <span>系统登录</span>
            </h3>

            <el-form-item prop='username'>
              <el-input type="text" auto-complete="off" placeholder="账号" v-model='form.username'></el-input>
            </el-form-item>

            <el-form-item prop='password'>
              <el-input type="password" auto-complete="off" placeholder="密码" v-model='form.password'
                        @keyup.native.enter="onLogin('form')"></el-input>
            </el-form-item>

            <el-form-item style="width:100%;">
              <el-button type="primary" @click='onLogin("form")'>登录</el-button>
              <el-button @click='resetForm("form")'>重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
  import {validator} from 'common/utils'

  export default {
    name: 'login',
    data() {
      return {
        login_status: {
          disabled: false
        },
        form: {
          username: '',
          password: ''
        },
        rule_data: {
          username: [{
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请输入用户名'))
              } else {
                if (validator.username(value)) {
                  callback()
                } else {
                  callback(new Error('用户名至少6位,由大小写字母和数字,-,_组成'))
                }
              }
            },
            trigger: 'blur'
          }],
          password: [{
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请输入密码'))
              } else {
                if (!validator.password(value)) {
                  callback(new Error('密码至少6位,由大小写字母和数字,-,_组成'))
                } else {
                  callback()
                }
              }
            },
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      onLogin(ref) {
        this.$refs[ref].validate((valid) => {
          if (valid) {
            this.login_status.disabled = true
            this.$$api.user_login({
              data: this.form,
              fn: (data) => {
                console.log('登录成功' + data);
              },
              errFn: (err) => {
                this.$message.error(err.msg)
                this.login_status.disabled = false
              }
            })
          }
        })
      },

      resetForm(ref) {
        this.$refs[ref].resetFields()
      }
    },
    created() {

    }
  }
</script>
<style lang="scss">
  .login {
    height: 100%;
    background: #1F2D3D;
    .login-form {
      width: 350px;
      padding: 35px 35px 15px 35px;
      margin: 0 auto;
      margin-top: 150px;
    }
    .card-box {
      box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
      -webkit-border-radius: 5px;
      border-radius: 5px;
      -moz-border-radius: 5px;
      background-clip: padding-box;
      margin-bottom: 20px;
      background-color: #F9FAFC;
      border: 2px solid #8492A6;
    }
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
      font-weight: normal;
      font-size: 16px;
      span {
        cursor: pointer;
        &.active {
          font-weight: bold;
          font-size: 18px;
        }
      }
    }
  }
</style>
