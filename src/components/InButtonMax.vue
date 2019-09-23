<template>
  <a @click="getClick()" class="bg-red text-white"
    style="width:100%;
              text-align:center;
              height:3.67rem;
              cursor:pointer;
              display: block;
              box-shadow:0rem 0.5rem 0.83rem 0rem rgba(255,14,54,0.1)"
    :href="gotoUrl">
    <!-- <span style="font-size:1.25rem;
                font-family:SFProText-Heavy;
                font-weight:500;
                line-height:3.67rem;">{{buttonText}}</span> -->
    <span style="font-size:1.25rem;
                font-family:SFProText-Heavy;
                font-weight:500;
                line-height:3.67rem;
                color: #fff;"
        >{{buttonText}}</span>
  </a>
</template>
<script>
export default {
  props: ['buttonText', 'gotoUrl'],
  methods: {
    getClick() {
      // this.$emit('getClick');
    },
  },
};
</script>

<style lang="stylus" scoped>

</style>
