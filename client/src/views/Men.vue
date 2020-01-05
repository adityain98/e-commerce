<template>
  <div>
    <Jumbotron image="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
    <div class="d-flex justify-content-center flex-wrap mb-4 mt-4">
      <Card v-for="product in products" :key="product._id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import Jumbotron from '../components/Jumbotron'
import Card from '../components/Card'

export default {
  components: {
    Jumbotron,
    Card
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  created() {
    this.$store.dispatch('fetchProductsGender', 'men')    
  }
}
</script>

<style>

</style>