<template>
<div class="nav navbar-nav navbar-right">
  <span class="navbar-text">Total: ${{this.$store.getters.subtotal.toFixed(2)}}</span>
  <button class="navbar-btn" @click="showModal=true"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Order </button>
  <br />

  <checkout v-if="showModal" @close="showModal = false"></checkout>

</div>
</template>

<script>
import checkout from './checkout'
export default {
  name: 'checkoutButton',
  props: ['items'],
  components: { checkout },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
  }
}
</script>


<style scoped>
.navbar-btn {
  margin-right: 15px
}
</style>
