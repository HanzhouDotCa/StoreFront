<template>
<div>
  <div class="well well-sm" style="margin-bottom: 2px">
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
            <button type="button" class="btn btn-default" @click="showOrderedVariation = !showOrderedVariation">{{quantity}}</button>
            <button type="button" class="btn btn-default" @click="addItem(item)">+</button>
          </div>
        </div>
      </div>
  </div>

  <variation v-if="showAddVariation" :item="item" @close="showAddVariation = false"></variation>
<!--
  <div v-if="showAddVariation" class="well well-sm" style="margin-bottom: 2px">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12" align="left">
        <ul v-for="(variation, variationIndex) in item.variations" class="list-unstyled">
        <li>
        &nbsp {{variation.name}}:
          <select v-model="variationChoice[variationIndex]">
            <option v-for="(option,optionIndex) in variation.options" :value="optionIndex">
              {{option.name}}: &nbsp + ${{option.price.toFixed(2)}}
            </option>
            </select>
          </li>
        </ul>
        <button class="btn btn-default" @click="addVariation()">+</button>
        <button type="button" class="close" @click="showAddVariation=false" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
      </div>
  </div>
  -->



</div>
</template>

<script>
import _ from 'lodash'
import variation from './variation'
export default {
  name: 'item',
  props: ['item'],
  components: { variation },
  data () {
    return {
      showAddVariation: false,
      showOrderedVariation: false,
      variationChoice: []
    }
  },
  computed: {
    quantity: function () {
      return this.$store.getters.quantity(this.item)
    },
    ordered: function () {
      return _.filter(this.$store.state.ordered, this.item)
    }
  },
  methods: {
    removeItem (item) {
      this.$store.commit('removeItem', item)
    },
    addItem (item) {
      if (item.variations.length > 0) {
        this.showAddVariation = true
      } else {
        this.$store.commit('addItem', item)
      }
    }
  }
}
</script>

<style scoped>
ul {
  display: inline-block;
}

</style>
