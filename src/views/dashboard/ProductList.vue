<template>
  <ul>
    <li v-for="p in products">


      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">{{ p.title }} </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">{{ p.price }}</div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">

            <el-button class="btn"
                       :disabled="!p.inventory"
                       @click="addToCart(p)">
              Add to cart
            </el-button>

          </div>
        </el-col>
      </el-row>


    </li>
  </ul>
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
