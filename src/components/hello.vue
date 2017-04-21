<template>
<div class="hide">
</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  created () {
    console.log(this.$route.params.storeID)
    this.$store.commit('updateStoreID', this.$route.params.storeID)
    this.$store.commit('updateTableID', this.$route.params.tableID)
  },
  mounted () {
    this.$http.get('https://damp-shelf-11781.herokuapp.com/api/r/' + this.$store.state.storeID).then(res => {
      this.$store.commit('updateStore', res.body)
      this.$router.push('/menu')
    }, res => {
      console.log('err')
    })
  }
}
</script>
