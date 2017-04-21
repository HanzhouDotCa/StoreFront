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
        <div v-if="ordered.count>0">
          <table class="table table-striped">
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
            <tr v-for="item in ordered.items">
              <td>{{item.item.name}}
              <ul v-for="vc in item.item.variationChoices" class="list-unstyled">
                 <li>
                  <ul v-for="(vcc, vcci) in vc"><li>{{item.item.variations[vcci].name}}: &nbsp {{item.item.variations[vcci].options[vcc].name}}</li></ul>
                </li>
            </ul>

              </td>
              <td>{{item.item.quantity}}</td>
              <!--<td>${{item.item.price*item.item.quantity}}</td>-->
              <td>${{getTotal(item.index)}}</td>
              <td align="middle"><button class="btn btn-danger btn-sm" @click="$emit('clear',item.index)">x</button></td>
            </tr>
          </table>
          <div align="right">
          <table>
            <tr><td align="right"><b>Subtotal: &nbsp &nbsp</b></td><td>${{ordered.subtotal.toFixed(2)}}</td></tr>
            <tr><td align="right"><b>GST:  &nbsp &nbsp</b></td><td>${{ordered.tax.toFixed(2)}}</td></tr>
            <tr><td align="right"><b>Total:  &nbsp &nbsp</b></td><td>${{ordered.total.toFixed(2) }}</td></tr>
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


export default {
  name: 'checkout',
  props: ['items'],
  data () {
    return {
    }
  },
  computed: {
    ordered: function () {
      var items = []
      var count = 0
      var subtotal = 0
      var tax = 0
      var total = 0
      for (var i = 0; this.items && i < this.items.length; ++i) {
        if (this.items[i].quantity > 0) {
          items.push({item: this.items[i], index: i})
          count += 1
          subtotal += this.getTotal(i)
        }
      }
      tax = subtotal * 0.05
      total = subtotal * 1.05
      return {
        items: items,
        count: count,
        subtotal: subtotal,
        tax: tax,
        total: total
      }
    }
  },
  methods: {
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
