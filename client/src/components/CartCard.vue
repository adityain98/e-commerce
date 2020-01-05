<template>
  <div>
    <div class="d-flex">
      <!-- img -->
      <div style="width: 200px">
        <img :src="item.product_id.image" alt="" style="width: 100%; object-fit: cover;">
      </div>
      <div class="ml-4" style="font-size: 150%" id="product-name">
        {{ item.product_id.name }}
      </div>
      <div class="ml-auto d-flex flex-column justify-content-between">
        <div class="d-flex align-items-center">
          <button class="btn" @click.prevent="subtract(item.product_id._id)">-</button>
          <div>
            {{ item.amount }}
          </div>
          <button class="btn" @click.prevent="addCart(item.product_id._id)">+</button>
        </div>
        <div id="total-price">
          Rp. {{ totalPrice }}
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    subtract(id){
      this.$store.dispatch('subtractCart', id)
    },
    addCart(id){
      this.$store.dispatch('addToCart', {product_id: id, amount: 1})
    }
  },
  computed: {
    totalPrice(){
      return this.item.amount * this.item.product_id.price
    }
  }
}
</script>

<style>
@media screen and (max-width: 420px) {
  #product-name {
    font-size: 100% !important
  }
  #total-price {
    font-size: 80%
  }
}

</style>