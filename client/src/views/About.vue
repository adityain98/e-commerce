<template>
  <div class="container-fluid p-0" style="background-color: #F7F7F7;">
    <Navbar/>
    <div class="container">
      <div class="row">
        <div class="col-sm-8" style="width: 100%">
          <img :src="product.image" alt="" style="width: 100%; object-fit: contain;">
        </div>
        <div class="col-sm-4 mb-4">
          <div class="mt-4" style="font-size: 200%">
            {{ product.name }}
          </div>
          <div class="d-flex justify-content-between">
            <div>
              Rp. {{ product.price }}
            </div>
            <small>
              Stock: {{ product.stock }}
            </small>
          </div>
          <hr>
          <small>
            {{ product.description }}
          </small>
          <hr>
          <div v-if="!$store.state.admin && isLogin">
            <div class="form-group">
              <label>Amount:</label>
              <select class="form-control" v-model="amount">
                <option v-for="num in product.stock" :key="num">{{ num }}</option>
              </select>
            </div>
            <button style="background-color: #222222; color: white; width: 100%" class="btn" @click.prevent="addCart(product._id)">+ Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Swal from 'sweetalert2'

export default {
  name: 'about',
  computed: {
    amount: {
      get(){
        return this.$store.state.defaultAmount
      },
      set(value){
        this.$store.commit('CHANGE_AMOUNT', value)
      }
    },
    product: {
      get(){
        return this.$store.state.product
      }
    },
    isLogin(){
      return this.$store.state.isLogin
    },
  },
  components: {
    Navbar
  },
  methods: {
    addCart(id){
      if(localStorage.getItem('token')){
        this.$store.dispatch('addToCart', {product_id: id})
        Swal.fire({
          title: 'Success added to cart',
          icon: 'success'
        })
      }
      else{
        this.$router.push('/login')
      }
    }
  },
  created(){
    this.$store.dispatch('fetchProduct', this.$route.params.id)
  }
}
</script>

<style>

</style>
