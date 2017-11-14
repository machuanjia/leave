<template>
  <div class="app">
      <app-header></app-header>
      <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from 'components/header'

export default {
  name: 'full',
  components: {
      AppHeader
  }
}
</script>
