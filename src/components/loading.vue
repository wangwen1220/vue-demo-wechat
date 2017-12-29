<template>
  <transition name="fade">
    <div v-if="show" class="loading"></div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        show: true
      }
    },
    mounted() {
      setTimeout(() => {
        this.show = false
      }, 1000)
    }
  }
</script>

<style scoped>
  .loading {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: #000b16 url(../assets/images/launchimage.png) no-repeat center center;
    background-size: cover;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
