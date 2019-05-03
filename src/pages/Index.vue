<template>
  <Layout>
    <Hero />
    <Categories />
    <Offers />
    <Products />
  </Layout>
</template>


<script>
import Hero from '~/components/Hero.vue'
import Categories from '~/components/Categories.vue'
import Offers from '~/components/Offers.vue'
import Products from '~/components/Products.vue'

export default {
  components: {
    Hero,
    Categories,
    Offers,
    Products
  },
  metaInfo: {
    title: 'Welcome to my blog'
  }
}
</script>
