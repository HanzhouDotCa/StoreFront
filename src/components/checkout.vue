<template>
<div>
  <transition name="modal">
  <div class="modal fade in show" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" @click="$emit('close')" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        Order
      </div>

      <div class="modal-body">
        <div v-if="this.$store.state.ordered.length>0">
          <table class="table table-striped">
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
            <tr v-for="item in ordered">
              <td>{{item.name}}</td>
              <td>{{$store.getters.quantity(item)}}</td>
              <td>${{item.price}}</td>
              <td align="middle"><button class="btn btn-danger btn-sm" @click="$emit('clear',item.index)">x</button></td>
            </tr>
          </table>

          <div align="right">
          <table>
            <tr><td align="right"><b>Subtotal: &nbsp &nbsp</b></td><td>${{this.$store.getters.subtotal.toFixed(2)}}</td></tr>
            <tr><td align="right"><b>GST:  &nbsp &nbsp</b></td><td>${{(this.$store.getters.subtotal*0.05).toFixed(2)}}</td></tr>
            <tr><td align="right"><b>Total:  &nbsp &nbsp</b></td><td>${{(this.$store.getters.subtotal*1.05).toFixed(2)}}</td></tr>
          </table>
          </div>
        </div>
        <div v-else>Cart is Empty</div>
      </div>

      <div class="modal-footer">
        <button class="btn btn-default" @click="$emit('close')">Cancel</button>
        <button class="btn btn-primary" @click="submitOrder">Submit</button>
      </div>
    </div>
    </div>
  </div>
  </transition>

</div>

</template>

<script>
import _ from 'lodash'

export default {
  name: 'checkout',
  props: ['items'],
  data () {
    return {
    }
  },
  computed: {
    ordered: function () {
      return _.uniq(this.$store.state.ordered)
    }
  },
  methods: {
    submitOrder () {
      this.$http.post('https://damp-shelf-11781.herokuapp.com/api/order/', {'storeID': this.$store.state.storeID, 'tableId': this.$store.state.tableID, 'items': this.$store.state.ordered}).then(response => {
        this.$store.commit('clearOrdered')
        this.$emit('close')
      }, response => {
        console.log('err')
      })
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
