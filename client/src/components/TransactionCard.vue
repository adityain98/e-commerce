<template>
  <div>
    <div class="border p-3 mb-4" style="width: 100%" >
      <div class="d-flex justify-content-between">
        <div>Transaction Id: {{ transaction._id }}</div>
        <div v-if="!transaction.status">
          <button class="btn" style="background-color: #B80F0B; color: white" @click.prevent="delivered(transaction._id)" id="btn-delivered"> Delivered? </button>
        </div>
      </div>
      <div class="container">
        <hr>
        <!-- loop -->
        <div v-for="product in transaction.products" :key="product._id">
          <div class="d-flex">
            <div style="width: 80px">
              <img :src="product.product_id.image" alt="" style="width: 100%; object-fit: cover;">
            </div>
            <div class="ml-3 d-flex flex-column">
              <div>
                {{ product.product_id.name }}
              </div>
              <small>
                Amount: {{ product.amount }}
              </small>
            </div>
            <div class="ml-auto">
              Total: Rp. {{ product.amount * product.product_id.price }}
            </div>
          </div>
          <hr>
        </div>

        <div class="d-flex justify-content-between">
          <div>
            Status: <span style="color: green" v-if="transaction.status">Delivered</span> <span style="color: red" v-else>On process</span>
          </div>
          <div style="font-size: 150%" id="total-price">
            Rp. {{ totalPrice }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  props: ['transaction'],
  computed: {
    totalPrice(){
      let total = 0
      this.transaction.products.forEach(product=>{
        total += product.amount * product.product_id.price
      })
      return total
    }
  },
  methods: {
    delivered(id){
      Swal.fire({
        title: 'Are you sure this items are delivered?',
        text: "You can't change once it confirmed",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Yes, it's already delivered!"
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch('transactionDone', id)
        }
      })
    }
  }
}
</script>

<style>
@media screen and (max-width: 480px) {
  #btn-delivered {
    font-size: 80%
  }
  #total-price {
    font-size: 100% !important
  }
}

</style>