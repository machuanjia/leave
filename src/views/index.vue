<template>
    <el-container class="app-container">
        <app-nav></app-nav>
        <el-container class="main" :class="isCollapse?'main-collapsed':''">
            <el-header class="main-header">
                <app-header></app-header>
            </el-header>
            <el-main class="main-body">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import AppHeader from 'components/app-header'
import AppNav from 'components/app-nav'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'layout',
  computed: {
    ...mapGetters({
      isCollapse: 'isCollapse'
    })
  },
  components: {
      AppHeader,
      AppNav
  }
}
</script>
