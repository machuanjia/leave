<template>
    <div class="header-container">
        <div class="header-bread" @click="toggleCollapse()"><i class="fa fa-align-justify"></i></div>
        <div class="heander-content flex-se1">
        <!--<el-button type="success" @click="changeLocale('zh-cn')">zh</el-button>-->
        <!--<el-button type="success" @click="changeLocale('en-us')">en</el-button>-->
        </div>
        <div class="heander-setting">
            <el-dropdown trigger="click" @command="handleDashBoard">
                  <span class="el-dropdown-link">
                    <i class="fa fa-cog"></i>
                  </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item style="width: 120px" command="zh-cn">zh</el-dropdown-item>
                    <el-dropdown-item command="en-us">en</el-dropdown-item>
                    <el-dropdown-item command="logout">logout</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'header',
    computed: mapGetters({
      isCollapse:'isCollapse'
    }),
    methods: {
      changeLocale(locale) {
        this.$i18n.locale = locale
      },
      toggleCollapse(){
        this.$store.dispatch('toggleCollapse',{
          isCollapse:!this.isCollapse
        });
      },
      handleDashBoard(command){
        if(command === 'logout'){
          window.location = '/login'
        }else{
          this.changeLocale(command)
        }
      }
    }
  }
</script>