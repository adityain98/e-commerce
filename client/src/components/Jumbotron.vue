<template>
  <div>
    <div class="m-0" :style="style" id="jumbotron">
      <div class="container">
        <div class="d-flex pt-2 pb-2 align-items-center">
          <div style="font-size: 300%; cursor: pointer" @click="toHome()" id="title">
            Umonk
          </div>
          <div class="ml-4 mr-4 d-flex justify-content-around" id="gender-menu" >
            <small class="ml-2 mr-2" style="cursor: pointer;" @click="toMen()">
              Men
            </small>
            <small class="ml-2 mr-2" style="cursor: pointer;" @click="toWomen()">
              Women
            </small>
          </div>
          <small class="ml-auto d-flex justify-content-around align-items-center">
            <div class="ml-2 mr-2 d-flex align-items-center" @click.prevent="toCart()" style="cursor: pointer" v-if="isLogin && !$store.state.admin">
              <div href="#" class="badge badge-light">{{ cart.length }}</div>
              <img src="../../public/cart-black.png" style="width: 24px">
            </div>
            <div class="ml-2 mr-2" v-if="!isLogin"  @click.prevent="toLogin()" style="cursor: pointer">
              Login              
            </div>
            <div class="ml-2 mr-2" v-if="isLogin">
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span id="text-menu">Menu</span>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#" v-if="!admin" @click.prevent="toTransaction()">Transactions</a>
                  <a class="dropdown-item" href="#" v-if="admin" @click.prevent="toAdmin()">Admin</a>
                  <a class="dropdown-item" href="#" @click.prevent="logout()">Logout</a>
                </div>
              </div>
            </div>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toCart(){
      this.$router.push('/cart')
    },
    toAdmin(){
      this.$router.push('/admin/transaction')
    },
    toLogin(){
      this.$router.push('/login')
    },
    logout(){
      this.$store.dispatch('logout')
    },
    toTransaction(){
      this.$router.push('/transactions')
    },
    toHome(){
      this.$router.push('/')
    },
    toMen(){
      this.$router.push('/men')
    },
    toWomen(){
      this.$router.push('/women')
    }
  },
  computed: {
    cart(){
      return this.$store.state.loggedUser.cart
    },
    isLogin(){
      return this.$store.state.isLogin
    },
    admin(){
      return this.$store.state.admin
    },
    style(){
      if(this.$router.history.current.name == 'women') {
        return {
          "--background-image": `url(${this.image})`,
          "--position": 'center'
        }
      }
      else{
        return {
          "--background-image": `url(${this.image})`,
          "--position": 'top left'
        }
      }
    }
  },
  created(){
    if(localStorage.getItem('token')){
      this.$store.dispatch('fetchLoggedUser')
    }
  },
  props: [
    'image'
  ]
}
</script>

<style>
#jumbotron{
  background-image: var(--background-image);
  background-size: cover;
  height: 70vh;
  background-position: var(--position)
}

@media screen and (max-width: 870px) {
  #gender-menu {
    text-shadow: 2px 3px 6px rgba(255,255,255,0.92);
  }
  #text-menu {
    text-shadow: 2px 3px 6px rgba(255,255,255,0.92);
  }
}

@media screen and (max-width: 480px) {
  #gender-menu {
    display: none !important
  }
  #title {
    font-size: 250% !important
  }
}

</style>