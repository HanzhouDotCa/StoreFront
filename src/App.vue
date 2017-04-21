<template>
  <div id="app">
  <checkoutButton></checkoutButton>
    <router-view></router-view>
  </div>
</template>

<script>
import checkoutButton from './components/checkoutButton.vue'

export default {
  name: 'app',
  components: {checkoutButton},
  data () {
    return {
      items: '',
      storeID: '58e482d44e108d09fbb4ee05'
    }
  }
}
</script>
