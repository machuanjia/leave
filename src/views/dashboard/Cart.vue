<template>
  <div class="cart">
    <br/>
    <br/>
  <p>
    购物车
  </p>
    <br/>
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
        label="价格">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.price  * scope.row.quantity}}</span>
        </template>
      </el-table-column>
    </el-table>


    <!--<h2>Your Cart</h2>-->
    <!--<p v-show="!products.length"><i>Please add some products to cart.</i></p>-->
    <!--<ul>-->
      <!--<li v-for="p in products">-->
        <!--<el-row>-->

          <!--<el-col :span="6">-->
            <!--{{ p.title }}-->
          <!--</el-col>-->

          <!--<el-col :span="6">-->
            <!--{{ p.price }} x {{ p.quantity }}-->
          <!--</el-col>-->
        <!--</el-row>-->

      <!--</li>-->
    <!--</ul>-->
    <br/>
    <p>总价: {{ total }}</p>
    <br/>
    <p>
      <el-button :disabled="!products.length" @click="checkout(products)">Checkout</el-button>
    </p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    components: {},
    computed: {
      ...mapGetters({
        products: 'cartProducts',
        checkoutStatus: 'checkoutStatus'
      }),
      total() {
        return this.products.reduce((total, p) => {
          return total + p.price * p.quantity
        }, 0)
      }
    },
    methods: {
      checkout(products) {
        this.$store.dispatch('checkout', products)
      }
    }
  }
</script>
