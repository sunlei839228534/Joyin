<template>
  <div @click="getClick()" class="bg-red text-white in-Button">
    <span style="font-size:1.25rem;
                font-family:PingFangSC-Medium;
                font-weight:500;
                line-height:3rem;">{{buttonText}}</span>
  </div>
</template>
<script>
export default {
  props: ['buttonText'],
  methods: {
    getClick() {
      this.$emit('getClick');
    },
  },
};
</script>


<style lang="stylus" scoped>
.in-Button
  width:100%;
  text-align:center;
  height:3rem;
  cursor:pointer;
  transition: box-shadow .2s;
  transition-timing-function: linear;
.in-Button:hover
  box-shadow:0rem 0.5rem 0.83rem 0rem rgba(255,14,54,0.1)
</style>
