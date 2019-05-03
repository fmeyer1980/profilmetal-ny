import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/normalize-min.css'
import '~/assets/global.scss'

export default function (Vue) {
  Vue.component('Layout', DefaultLayout)
}
