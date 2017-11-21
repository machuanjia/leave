<template>
    <el-aside width="200px" class="nav-container">
        <el-header class="nav-header">
        </el-header>
        <el-main class="nav-body">
            <el-menu background-color="#2f323a"
                     text-color="#fff"
                     active-text-color="#ffd04b"
                     :default-active="$route.path"
                     router
            >
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>{{$t('nav.group_one')}}</template>
                    <el-menu-item index="/dashboard">{{$t('nav.dashboard')}}</el-menu-item>
                    <el-menu-item index="/demo">{{$t('nav.demo')}}</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-main>
    </el-aside>
</template>
<script>
    export default {
        name: 'nav'
    }
</script>