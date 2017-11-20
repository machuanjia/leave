<template>
    <el-container class="app-container">
        <app-nav></app-nav>
        <el-container class="main">
            <el-header class="main-header"></el-header>
            <el-main class="main-body">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import AppHeader from 'components/app-header'
import AppNav from 'components/app-nav'

export default {
  name: 'layout',
  components: {
      AppHeader,
      AppNav
  }
}
</script>
