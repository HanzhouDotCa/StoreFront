<template>
  <div id="app">
      <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Brand</a>
          <checkoutButton></checkoutButton>
        </div>
      </div>
    </nav>

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

<style scoped>
/**
  * The following four css are for disabling the navbar auto-collapse on mobile device.
  * http://stackoverflow.com/questions/23535289/bootstrap-3-disable-navbar-collapse
  */
.navbar-collapse.collapse {
  display: block!important;
}
.navbar-nav>li, .navbar-nav {
  float: left !important;
}
.navbar-nav.navbar-right:last-child {
  margin-right: -15px !important;
}
.navbar-right {
  float: right!important;
}

</style>
