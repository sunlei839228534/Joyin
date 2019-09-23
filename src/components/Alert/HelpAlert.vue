<template>
  <div class="alert-windowSize postion-absolute"
      v-show="type.waitPayment || type.paymentDoubt || type.paymentErr">
    <div v-show="type.waitPayment">
      <div class="display-flex-row"
          style="height:3.67rem;
                  padding: 0rem 1.33rem;
                  border-bottom:0.08rem solid #EBECEF;
                  justify-content: space-between;
                  align-items: center;">
        <div style="font-size:1.5rem;
                    font-family:PingFangSC-Semibold;
                    font-weight:600;
                    color:rgba(42,45,55,1);
                    line-height:2.08rem;">
          等待支付
        </div>
        <div style="font-size:1.17rem;
                    font-family:PingFangSC-Medium;
                    font-weight:600;
                    color:rgba(255,66,93,1);
                    line-height:1.67rem;
                    cursor:pointer"
            @click.stop="windowClose()">
          关闭
        </div>
      </div>
      <div style="padding: 0rem 1.33rem;
                  margin-top: 1.67rem;
                  margin-bottom: 3.33rem;">
        <p class="alert-center">请在打开的页面内完成支付。</p>
      </div>
      <div class="display-flex-row"
          style=" width: 100%;
                  justify-content: space-between;
                  padding: 0rem 1.33rem;
                  margin-bottom: 2.5rem;">
        <div class="display-flex-row
                    display-flex-center"
            style=" width:45%;
                    height:3rem;
                    background:#323844;
                    cursor:pointer"
            @click.stop="showBlock('paymentDoubt')">
          <span class="alert-center text-white"
                style="font-weight:400;">已完成支付</span>
        </div>
        <div class="display-flex-row
                    display-flex-center"
            style=" width:45%;
                    height:3rem;
                    background:#323844;
                    cursor:pointer"
            @click.stop="showBlock('paymentErr')">
          <span class="alert-center text-white"
                  style="font-weight:400;">支付出现问题？</span>
        </div>
      </div>
    </div>
    <div v-show="type.paymentDoubt">
      <div class="display-flex-row"
          style="height:3.67rem;
                  padding: 0rem 1.33rem;
                  border-bottom:0.08rem solid #EBECEF;
                  justify-content: space-between;
                  align-items: center;">
        <div style="font-size:1.5rem;
                    font-family:PingFangSC-Semibold;
                    font-weight:600;
                    color:rgba(42,45,55,1);
                    line-height:2.08rem;">
          已付款但是依然显示未支付?
        </div>
        <div style="font-size:1.17rem;
                    font-family:PingFangSC-Medium;
                    font-weight:600;
                    color:rgba(255,66,93,1);
                    line-height:1.67rem;
                    cursor:pointer"
            @click.stop="windowClose()">
          关闭
        </div>
      </div>
      <div style="padding: 0rem 1.33rem;
                  margin-top: 1.67rem;
                  margin-bottom: 3.33rem;">
        <p class="alert-center">运营商对支付的返回结果有延迟，请稍定并重新刷新订单结果，如果您已确认付款成功请勿重复付款! <br/><br/></p>
        <p class="alert-center">如依然显示未成功烦请添加客服: </p>
        <p class="alert-center">微信：zhuangzhuang </p>
        <p class="alert-center">QQ：123123 </p>
      </div>
      <div style=" width: 100%;
                  display: flex;
                  flex-direction: row-reverse;
                  justify-content: space-between;
                  padding: 0rem 1.33rem;
                  margin-bottom: 2.5rem;">
        <div class="display-flex-row
                    display-flex-center"
            style=" width:45%;
                    height:3rem;
                    background:#323844;">
          <span class="alert-center text-white"
                  style="font-weight:400;">刷新订单</span>
        </div>
      </div>
    </div>
    <div v-show="type.paymentErr">
      <div class="display-flex-row"
          style="height:3.67rem;
                  padding: 0rem 1.33rem;
                  border-bottom:0.08rem solid #EBECEF;
                  justify-content: space-between;
                  align-items: center;">
        <div style="font-size:1.5rem;
                    font-family:PingFangSC-Semibold;
                    font-weight:600;
                    color:rgba(42,45,55,1);
                    line-height:2.08rem;">
          支付问题
        </div>
        <div style="font-size:1.17rem;
                    font-family:PingFangSC-Medium;
                    font-weight:600;
                    color:rgba(255,66,93,1);
                    line-height:1.67rem;
                    cursor:pointer"
            @click.stop="windowClose()">
          关闭
        </div>
      </div>
      <div style="padding: 0rem 1.33rem;
                  margin-top: 1.67rem;
                  margin-bottom: 3.33rem;">
        <p class="alert-center">
          付款出现问题烦请添加客服: <br/>微信：zhuangzhuang <br/>QQ：123123。
        </p>
      </div>
      <div style=" width: 100%;
                  display: flex;
                  flex-direction: row-reverse;
                  justify-content: space-between;
                  padding: 0rem 1.33rem;
                  margin-bottom: 2.5rem;">
        <div class="display-flex-row
                    display-flex-center"
            style=" width:45%;
                    height:3rem;
                    background:#323844;">
          <span class="alert-center text-white"
                  style="font-weight:400;cursor:pointer;">我知道了</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    type() {
      return this.$store.state.alert.help;
    }
  },
  methods: {
    windowClose(){
      // 关闭弹窗
      this.$store.commit('changeAlert');
    },
    showBlock(type) {
      // 显示弹窗
      this.$store.commit('changeAlert',{
        name: 'help',
        type: type || 'waitPayment' ,
        flag: true,
      });
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>
