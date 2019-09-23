<template>
  <div class="postion-fixed
              display-flex-column
              display-flex-center"
      style="top:0rem;
            right:0rem;
            width:100vw;
            height:100vh;
            padding-bottom: 10rem;
            background:rgba(0,0,0,0.7);
            z-index: 100;"
      @click="windowClose()"
      v-show="windowFlag">
    <prompt-alert></prompt-alert>
    <help-alert></help-alert>
  </div>
</template>
<script>
import HelpAlert from '@/components/Alert/HelpAlert.vue'
import promptAlert from '@/components/Alert/promptAlert.vue'


export default {
  components: {
    HelpAlert,
    promptAlert,
  },
  computed: {
    windowFlag () {
      return this.$store.state.alert.flag;
    }
  },
  methods: {
    windowClose(){
      // 关闭弹窗
      this.$store.commit('changeAlert');
    }
  },
  mounted () {
    this.$nextTick(()=>{
      // console.log(this.$store.state.alert);
    })
  }
}
</script>

<style lang="stylus">
.alert-windowSize
  width:90%;
  background:rgba(255,255,255,1);
  padding 1.67rem;
.alert-title
  text-align center;
  font-size:1.5rem;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  color:rgba(42,45,55,1);
  line-height:2.08rem;
  margin-bottom 2.5rem;
.alert-center
  font-size:1.08rem;
  font-family:PingFangSC-Medium;
  font-weight:600;
  line-height:1.5rem;
  align-items center;

@media screen and (min-width: 1020px)
  .alert-windowSize
    width 28vw;

</style>
