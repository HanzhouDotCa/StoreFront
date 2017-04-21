<template>
<div>
<router-link :to="{ name: 'nav' }" class="btn btn-default btn-sm">Main View</router-link>
<ul v-for="item in $store.state.s.menu" :key="item._id" class="list-unstyled">
<li v-if="item.category==$route.params.categoryName">
<item :item="item"></item>
</li>
</ul>

</div>
</template>

<script>
import item from './item.vue'

export default {
  name: 'category',
  components: { item },
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
