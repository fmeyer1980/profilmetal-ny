<template>
  <div class="layout">
    <TheHeader />

          <slot />

  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>

<style lang="scss">


.fade-enter-active {
  transition: opacity .3s ease-in;
}

.fade-enter {
  opacity: 0;
}




</style>
