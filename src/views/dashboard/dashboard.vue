<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>示例</el-breadcrumb-item>
      <el-breadcrumb-item>面板</el-breadcrumb-item>
    </el-breadcrumb>
    <product-list></product-list>
    <cart></cart>
  </div>
</template>

<script>
  import ProductList from './ProductList'
  import Cart from './Cart'

  export default {
    components: { ProductList, Cart }
  }
</script>
