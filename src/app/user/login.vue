<template>
  <el-container>
    <el-header>
      <h3>主页</h3>
    </el-header>
    <el-main>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form:{
        username:'',
        password:''
      }
    }
  },
  methods: {
    login(){
      console.log(this.$moment().format('LLLL'));
    }
  }
}
</script>