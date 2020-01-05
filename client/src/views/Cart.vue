<template>
  <div>
    <Navbar/>
    <div class="container">
      <div class="d-flex justify-content-center" style="font-size: 250%">
        Your Cart
      </div>
      <hr>
      <!-- items -->
      <CartCard v-for="item in cart" :key="item._id"
        :item="item"
      />

      <div class="d-flex justify-content-between mb-3" style="font-size: 200%" id="subtotal">
        <div>
          Subtotal:
        </div>
        <div>
          Rp. {{ animatedNumber }}
        </div>
      </div>

      <div>
        <button class="btn mb-4" style="background-color: #222222; color: white;" @click.prevent="checkout()" id="btn-checkout" >Checkout <img src="../../public/arrow.png" alt="" style="width: 24px"></button>
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import CartCard from '../components/CartCard.vue'

export default {
  data() {
    return {
      number: 0
    }
  },
  components: {
    Navbar,
    CartCard
  },
  methods: {
    checkout(){
      this.$store.dispatch('checkout')
    }
  },
  computed: {
    cart: {
      get(){
        return this.$store.state.loggedUser.cart
      }
    },
    subtotal(){
      let totalPrice = 0
      this.cart.forEach(item=>{
        totalPrice += item.amount * item.product_id.price
      })
      return totalPrice
    },
    animatedNumber() {
      return this.number.toFixed(0);
    }
  },
  watch: {
    subtotal(newValue) {
      TweenLite.to(this.$data, 0.2, { number: newValue });
    }
  },
  created() {
    this.number = this.subtotal
  }
}
</script>

<style>
@media screen and (max-width: 425px) {
  #btn-checkout {
    width: 100% !important
  }
}

@media screen and (max-width: 350px) {
  #subtotal {
    font-size: 150% !important
  }
}

</style>