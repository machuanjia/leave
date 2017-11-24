<template>
    <aside class="nav-container" :class="isCollapse?'nav-container-collapsed':''">
        <el-header class="nav-header">
            <!--LOGO "{{ www }}"-->
            <img src="../assets/image/logo.png" class="nav-logo"/>
            <span class="nav-title" v-if="!isCollapse">云际天创</span>
        </el-header>
        <div class="nav-body">
            <!--<el-menu-->
            <!--default-active="1-1"-->
            <!--background-color="#2f323a"-->
            <!--text-color="#fff"-->
            <!--active-text-color="#ffd04b"-->
            <!--:default-active="$route.path"-->
            <!--router-->
            <!--class="el-menu-vertical-demo"-->
            <!--@open="handleOpen"-->
            <!--@close="handleClose"-->
            <!--unique-opened-->
            <!--v-show="!isCollapse">-->
            <!--<el-submenu index="1">-->
            <!--<template slot="title">-->
            <!--<i class="el-icon-location"></i>-->
            <!--<span slot="title">{{$t('nav.group_one')}}</span>-->
            <!--</template>-->
            <!--<el-menu-item-group>-->
            <!--&lt;!&ndash;<span slot="title">分组一</span>&ndash;&gt;-->
            <!--<el-menu-item index="/dashboard">{{$t('nav.dashboard')}}</el-menu-item>-->
            <!--<el-menu-item index="/demo">{{$t('nav.demo')}}</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--</el-submenu>-->
            <!--</el-menu>-->


            <el-menu :default-active="$route.path" @open="handleopen" @close="handleclose"
                     style="width: 100%"
                     background-color="#2f323a"
                     text-color="#fff"
                     active-text-color="#ffd04b"
                     router
                     @select="handleselect"
                     unique-opened router v-show="!isCollapse">
                <template v-for="(item,index) in menus" v-if="!item.hidden">
                    <el-submenu :index="index+''" v-if="!item.leaf">
                        <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                        <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path"
                                      v-if="!child.hidden">{{child.name}}
                        </el-menu-item>
                    </el-submenu>
                    <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i
                            :class="item.iconCls"></i>{{item.children[0].name}}
                    </el-menu-item>
                </template>
            </el-menu>


            <!--导航菜单-折叠后-->
            <ul class="el-menu nav-collapse" style="background: #2f323a" v-show="isCollapse" ref="menuCollapsed">
                <li v-for="(item,index) in menus" v-if="!item.hidden" class="el-submenu item">
                    <template v-if="!item.leaf">
                        <div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)"
                             @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
                        <ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)"
                            @mouseout="showMenu(index,false)">
                            <li v-for="child in item.children" v-if="!child.hidden" :key="child.path"
                                class="el-menu-item" style="padding-left: 40px;"
                                :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">
                                {{child.name}}
                            </li>
                        </ul>
                    </template>
                    <template v-else>
                <li class="el-submenu">
                    <div class="el-submenu__title el-menu-item"
                         style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;"
                         :class="$route.path==item.children[0].path?'is-active':''"
                         @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
                </li>
</template>
</li>
</ul>

</div>
</aside>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: 'nav',
    data(){
      return {
        menus:[{
          name:'导航',
          iconCls:'fa fa-tachometer',
          children:[{
            name:'dashboard',
            path:'/dashboard',
            iconCls:'fa fa-tachometer'
          },{
            name:'demo',
            path:'/demo',
            iconCls:'fa fa-tachometer'
          }]
        }]
      }
    },
    computed: {
      ...mapGetters({
        isCollapse: 'isCollapse'
      })
    },
    methods: {
      handleopen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleclose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleselect(){

      },
      showMenu(i,status){
        this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
      }
    }
  }
</script>
<style>
    .item{
        position: relative;
    }
    .submenu{
        position:absolute;
        top:0px;
        left:64px;
        z-index:99999;
        height:auto;
        display:none;
    }

</style>