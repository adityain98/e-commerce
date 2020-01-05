<template>
  <div class="container-fluid p-0">
    <Jumbotron image="'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'"/>
    <div class="container">
      <div class="d-flex justify-content-center mt-4 mb-4">
        <div class="mr-3 ml-3" style="cursor: pointer" @click="getProducts()">
          New Arrivals
        </div>
        <div class="mr-3 ml-3" style="cursor: pointer" @click="getGender('men')">
          Mens
        </div>
        <div class="mr-3 ml-3" style="cursor: pointer" @click="getGender('women')">
          Womens
        </div>
      </div>
      <transition-group name="list" class="d-flex justify-content-center flex-wrap mb-4" mode="in-out">
        <Card v-for="product in products" :key="product._id"
          :product="product"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Jumbotron from '../components/Jumbotron.vue'
export default {
  name: 'home',
  components:{
    Card,
    Jumbotron
  },
  methods: {
    getGender(gender) {
      this.$store.dispatch('fetchProductsGender', gender)
    },
    getProducts() {
      this.$store.dispatch('fetchProducts')
    }
  },
  computed: {
    products: {
      get(){
        return this.$store.state.products
      },
      set(){

      }
    },
  },
  created(){
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style>

.list-enter-active,
.list-leave-active,
.list-move {
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
}

.list-enter {
  opacity: 0;
  transform: translateX(50px) scaleY(0.5);
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0) scaleY(1);
}

.list-leave-active {
  position: absolute;
}

.list-leave-to {
  opacity: 0;
  transform: scaleY(1);
  transform-origin: center top;
}

</style>
