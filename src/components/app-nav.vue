<template>
    <aside class="nav-container" :class="isCollapse?'nav-container-collapsed':''">
        <el-header class="nav-header">
            <!--LOGO "{{ www }}"-->
            <img src="../assets/image/logo.png" class="nav-logo"/>
            <span class="nav-title" v-if="!isCollapse">云际天创</span>
        </el-header>
        <el-main class="nav-body">
            <el-menu
                    default-active="1-1"
                    background-color="#2f323a"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    :default-active="$route.path"
                    router
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    :collapse="isCollapse">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">{{$t('nav.group_one')}}</span>
                    </template>
                    <el-menu-item-group>
                        <!--<span slot="title">分组一</span>-->
                        <el-menu-item index="/dashboard">{{$t('nav.dashboard')}}</el-menu-item>
                        <el-menu-item index="/demo">{{$t('nav.demo')}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>

        </el-main>
    </aside>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'nav',
    computed: {
      ...mapGetters({
        isCollapse: 'isCollapse'
      })
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>