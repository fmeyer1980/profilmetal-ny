<template>
  <div class="layout">
    <TheHeader />

        <main>
          <slot />
        </main>

  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'

export default {
  metaInfo: {
    title: 'About us'
  },
  components: {
    TheHeader
  }
}
</script>

<style scoped>

.fade-enter-active {
  transition: opacity .3s ease-in;
}

.fade-enter {
  opacity: 0;
}



</style>
