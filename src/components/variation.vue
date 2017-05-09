<template>
<div>
  <transition name="modal">
  <div class="modal fade in show " role="dialog">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" @click="$emit('close')" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        Customization
      </div>

      <div class="modal-body">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12" align="left">
          <table>
            <tr v-for="(variation, variationIndex) in item.variations" class="list-unstyled">
            <td>
            {{variation.name}}: &nbsp &nbsp 
            </td><td>
              <select v-model="variationChoice[variationIndex]">
                <option v-for="(option,optionIndex) in variation.options" :value="optionIndex">
                  {{option.name}}: &nbsp + ${{option.price.toFixed(2)}}
                </option>
                </select>
              </td>
            </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-default" @click="$emit('close')">Cancel</button>
        <button class="btn btn-primary" @click="addItem()">Add to Cart</button>
      </div>
    </div>
    </div>
  </div>
  </transition>

</div>

</template>

<script>
export default {
  name: 'variation',
  props: ['item'],
  data () {
    return {
      variationChoice: []
    }
  },
  created () {
    // default variation choice to the first one
    this.clearVariation()
  },
  methods: {
    addItem () {
      var newItem = JSON.parse(JSON.stringify(this.item))
      newItem.variationChoice = JSON.parse(JSON.stringify(this.variationChoice))
      this.$store.commit('addItem', newItem)
      this.clearVariation()
      this.$emit('close')
    },
    clearVariation () {
      for (var i = 0; i < this.item.variations.length; i++) {
        this.variationChoice[i] = 0
      }
    }
  }
}
</script>

<style scoped>

 .modal-enter {
   opacity: 0;
   }

   .modal-leave-active {
 opacity: 0;
 }

 .modal-enter .modal-container,
 .modal-leave-active .modal-container {
   -webkit-transform: scale(1.1);
 transform: scale(1.1);
 }
</style>
