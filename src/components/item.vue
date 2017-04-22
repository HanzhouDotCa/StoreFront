<template>
<div class="well well-sm">
    <div class="row">
      <div class="col-xs-3 col-sm-3 col-md-3" align="middle">
        <img :src="item.imagePath" class="img-circle" height="75"></img>
      </div>
      <div class="col-xs-9 col-sm-9 col-md-9" align="right">
        {{item.name}}
        <br />
        ${{item.price.toFixed(2)}}
        <br />
        <div class="btn-group" role="group" aria-label="...">
          <button type="button" class="btn btn-default" @click="removeItem(item)">-</button>
          <button type="button" class="btn btn-default">{{this.$store.getters.quantity(item)}}</button>
          <button type="button" class="btn btn-default" @click="addItem(item)">+</button>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'item',
  props: ['item'],
  data () {
    return {
    }
  },
  methods: {
    removeItem (item) {
      this.$store.commit('removeItem', item)
    },
    addItem (item) {
      this.$store.commit('addItem', item)
    },
    addVariation (index) {
    },
    clearVariation (index, vci) {
    }
  }
}
</script>
