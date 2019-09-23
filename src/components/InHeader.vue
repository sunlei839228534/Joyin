<template>
  <div class="in-Header">
    <div class="display-flex-row in-test"
        style="justify-content: space-between;
              align-items: center;">
      <div class="in-logo">
        <router-link to="/home">INJOY</router-link>
      </div>
      <!-- <div class="display-flex-row">
        <div class="in-iconBox display-flex-row display-flex-center"
            >
          <Badge dot>
            <div class="icon-notice" style="width:2.33rem;height:2.33rem;"> </div>
          </Badge>
          <span class="in-iconBox-text">待支付</span>
        </div>
        <div class="in-iconBox display-flex-row display-flex-center"
            @click="showInfo()">
          <Badge dot>
            <div class="icon-inquire" style="width:2.33rem;height:2.33rem;"> </div>
          </Badge>
          <span class="in-iconBox-text">订单查询</span>
        </div>
      </div> -->
    </div>
    <div class="postion-fixed inquire"
        v-show="windowFlag">
      <inquire-alert></inquire-alert>
    </div>
  </div>
</template>
<script>
import InquireAlert from '@/components/Alert/InquireAlert.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    InquireAlert,
  },
  computed: {
    windowFlag () {
      return this.$store.state.alert.inquire.show;
    }
  },
  methods: {
    showInfo() {
      // 显示弹窗
      this.$store.commit('changeAlert',{
        name: 'inquire',
        type: 'show' ,
        flag: true,
      });
    },
  }
}
</script>

<style lang="stylus" scoped>
.in-Header
  height:5.67rem;
  padding 0 1rem;
  background #ffffff;
  border-bottom 1px solid #EBECEF;
  margin-top 1rem;
.in-logo
  font-size:2.5rem;
  font-family:SFProText-Heavy;
  font-weight:800;
.in-iconBox
  margin-right: 1rem;
  cursor:pointer;
.in-iconBox-text
  font-size:1.17rem;
  font-family:PingFangSC-Medium;
  font-weight:bold;
  line-height:1.67rem;
.inquire
  top: 0rem;
  left:0rem;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index:150;

@media screen and (max-width: 1020px)
  .in-iconBox > .in-iconBox-text
    display none;
@media screen and (min-width: 1020px)
  .in-iconBox
    margin-right: 3.33rem;
  .inquire
    display flex;
    flex-direction column;
    justify-content center;
    align-items center;
    padding-bottom 10rem;
</style>
