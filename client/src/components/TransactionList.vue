<template>
  <div>
    <CardTransaction v-for="(transaction, index) in transactions" :key="transaction._id" :transaction="transaction" :index="index">
      <small>{{ transaction.user_id.username }}</small>
    </CardTransaction>
  </div>
</template>

<script>
import CardTransaction from '../components/CardTransaction.vue'

export default {
  computed: {
    transactions: {
      get(){
        return this.$store.state.adminTransactions
      },
      set(){

      }
    }
  },
  created(){
    if(localStorage.getItem('token')){
      this.$store.dispatch('fetchAdminTransaction')
    }
    console.log(this.transactions)
  },
  components: {
    CardTransaction
  }
}
</script>

<style>

</style>