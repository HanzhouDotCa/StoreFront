<template>
<div class="nav navbar-nav navbar-right">
  <span class="navbar-text">Total: </span>
  <button class="navbar-btn" @click="showModal=true"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Order </button>
  <br />

</div>
</template>

<script>
export default {
  name: 'checkoutButton',
  props: ['items'],
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
