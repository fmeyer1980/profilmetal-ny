<template>
    <g-link class="btn" :class="btnType" :to="path">
      {{ text }}
    </g-link>
</template>

<script>
export default {
  props: {
    text: String,
    path: String,
    btnType: {
        type: Array,
        default: ['primary', 'secondary']
    }
  }
}
</script>

<style lang="scss">

.btn{
    padding: .4em 1.8em;
    color: $white;
    display: inline-block;
}

.primary{
    background-color: $primary;
}



</style>

