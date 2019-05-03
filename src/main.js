import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/normalize-min.css'
import '~/assets/css/global.scss'

export default function (Vue) {
  Vue.component('Layout', DefaultLayout)
}
