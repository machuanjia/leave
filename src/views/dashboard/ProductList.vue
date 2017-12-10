<template>
<div style="margin-top: 20px">
  <el-table
    :data="products"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="title"
      label="名称">
    </el-table-column>
    <el-table-column
      fixed
      prop="price"
      label="价格">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="addToCart(scope.row)" :disabled="!scope.row.inventory" type="text" size="small">Add</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!--<ul>-->
    <!--<li v-for="p in products">-->


      <!--<el-row>-->
        <!--<el-col :span="4">-->
          <!--<div class="grid-content bg-purple">{{ p.title }} </div>-->
        <!--</el-col>-->
        <!--<el-col :span="4">-->
          <!--<div class="grid-content bg-purple-light">{{ p.price }}</div>-->
        <!--</el-col>-->
        <!--<el-col :span="4">-->
          <!--<div class="grid-content bg-purple-light">-->

            <!--<el-button class="btn"-->
                       <!--:disabled="!p.inventory"-->
                       <!--@click="addToCart(p)">-->
              <!--Add to cart-->
            <!--</el-button>-->

          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->


    <!--</li>-->
  <!--</ul>-->
</div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: mapGetters({
      products: 'allProducts'
    }),
    methods: mapActions([
      'addToCart'
    ]),
    created() {
      this.$store.dispatch('getAllProducts')
    }
  }
</script>
