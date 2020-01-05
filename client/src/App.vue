<template>
  <div>
    <transition name="slide-fade">
      <router-view style="min-height: 90vh"/>
    </transition>
    <div style="height: 10vh; background-color: black; color: white" class="d-flex justify-content-center align-items-center">
      Umonk, created with ❤️
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
  },
  created () {
    if(localStorage.getItem('token')){
      this.$store.commit('LOGIN_CHECKER', true)
      this.$store.dispatch('fetchLoggedUser')
    }
  }
}
</script>

<style>

.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
