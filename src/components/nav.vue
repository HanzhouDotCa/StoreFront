<template>
<div class="navigator">
<h2>{{this.$store.state.s.name}}</h2>
<ul v-for="category in $store.state.s.category" class="list-unstyled">
  <li>
    <router-link :to="{ name: 'category', params: { categoryName: category.routeName }}">
      <img v-bind:src="category.imagePath" height="100" width="400">
    </router-link>
  </li>
</ul>
</div>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
    }
  },
  mounted () {
    if (this.$store.state.s === '') {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.navigator {
  padding-top: 50px
}
</style>
