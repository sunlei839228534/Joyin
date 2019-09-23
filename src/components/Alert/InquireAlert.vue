<template>
  <div class="inquire-size bg-white"
      v-show="windowFlag">
    <div class="display-flex-row position-relative inquire-title"
        style="">
      <p class="logo text-red">INJOY</p>
      <p style="font-size:1.17rem;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(255,66,93,1);
                line-height:2.33rem;
                cursor:pointer;"
          @click="windowClose()">关闭</p>
      <p  class="postion-absolute"
        style=" bottom: -0.3rem;
                left: -1rem;
                width: 200%;
                border-bottom: 0.083rem solid #EBECEF;"></p>
    </div>
    <div class="inquire-input" style="">
      <p style="font-size:1.5rem;
                font-family:PingFangSC-Semibold;
                font-weight:600;
                line-height:2.08rem;
                margin: 1.5rem 0rem;"
        class="text-black">订单查询</p>
      <div class="display-flex-row"
          style="align-items: center;">
        <input type="text">
        <div class="display-flex-column
                    display-flex-center
                    text-white
                    inquire-button"
            style="">
          <span style="font-size:1.08rem;
                      font-family:PingFangSC-Regular;
                      font-weight:400;
                      line-height:1.5rem;">查询</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      test:'',
    }
  },
  computed: {
    windowFlag () {
      return this.$store.state.alert.inquire.show;
    }
  },
  methods: {
    windowClose(){
      // 关闭弹窗
      this.$store.commit('changeAlert');
    },
  }
}
</script>

<style lang="stylus" scoped>
.inquire-size
  width 100%;
  padding-top 1rem;
  overflow: hidden;
.logo
  font-size:2.5rem;
  font-family:SFProText-Heavy;
  font-weight:800;
.inquire-title
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
.inquire-input
  padding: 0rem 1rem 1rem 1rem;

.inquire-button
  width:8.17rem;
  height:3rem;
  margin-left: 1rem;
  background:rgba(50,56,68,1);
@media screen and (min-width: 1020px)
  .inquire-size
    width 67vw;
  .inquire-input
    padding: 0rem 3rem 4rem 3rem;
  .inquire-title
    padding: 0rem 3rem;
  .inquire-button
    width:15.42rem;
    height:3.5rem;
    margin-left: 3.33rem;
  input[type="text"]
    height 3.5rem;
</style>
