<template>
  <Layout>
    <Hero />
    <Categories />
    <Offers />
    <Products />
  </Layout>
</template>


<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'
import Hero from '~/components/Hero.vue'
import Categories from '~/components/Categories.vue'
import Offers from '~/components/Offers.vue'
import Products from '~/components/Products.vue'

export default {
  components: {
    Pager,
    Post,
    Hero,
    Categories,
    Offers,
    Products
  },
  metaInfo: {
    title: 'Welcome to my blog :)'
  }
}
</script>
