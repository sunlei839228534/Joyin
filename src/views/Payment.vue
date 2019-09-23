<template>
  <div style="padding: 0rem 1rem;">
    <div class="display-flex-row"
        style="width:100%;
              height:9.17rem;
              background:rgba(255,255,255,1);
              border:0.08rem solid #E6E6E6;
              align-items: center;">
      <div class="display-flex-row"
          v-show="payType === 'loading'"
          @click="setPayType('fail')">
        <div class="icon-loading"
             style="width:3.5rem;
                    height:3.5rem;
                    margin-left: 1rem;
                    margin-right: 1.67rem;">
        </div>
        <div>
          <p style="font-size:1.5rem;
                    font-family:PingFangSC-Semibold;
                    font-weight:600;
                    color:rgba(42,45,55,1);
                    line-height:2.08rem;">等待支付</p>
          <p style="font-size:1.08rem;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(42,45,55,0.4);
                    line-height:1.5rem;">
            <span>剩</span>
            <span class="Payment-time">&nbsp;14&nbsp;</span>
            <span>分</span>
            <span class="Payment-time">&nbsp;59&nbsp;</span>
            <span>秒&nbsp;</span>
            <span>订单自动关闭</span>
          </p>
        </div>
      </div>
      <div class="display-flex-row"
          v-show="payType === 'fail'"
          @click="setPayType('seccess')">
        <div class="icon-err"
            style="width:3.5rem;
                    height:3.5rem;
                    margin-left: 1rem;
                    margin-right: 1.67rem;">
        </div>
        <div>
          <p style="font-size:1.5rem;
                    font-family:PingFangSC-Semibold;
                    font-weight:600;
                    color:rgba(42,45,55,1);
                    line-height:2.08rem;">支付失败</p>
          <p style="font-size:1.08rem;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(42,45,55,0.4);
                    line-height:1.5rem;">
            <span>剩</span>
            <span class="Payment-time">&nbsp;14&nbsp;</span>
            <span>分</span>
            <span class="Payment-time">&nbsp;59&nbsp;</span>
            <span>秒&nbsp;</span>
            <span>订单自动关闭</span>
          </p>
          <p style="font-size:1rem;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(255,66,93,1);
                    line-height:1.42rem;">
            <span>*账户余额不足，请重试或选择其他方式支付</span>
          </p>
        </div>
      </div>
      <div class="display-flex-row
                  display-flex-center"
          style="width:100%;"
          v-show="payType === 'seccess'"
          @click="setPayType('loading')">
        <div class="icon-seccess"
            style="width:3.5rem;
                    height:3.5rem;
                    margin-left: 1rem;
                    margin-right: 1.67rem;">
        </div>
        <div>
          <p style="font-size:1.5rem;
                    font-family:PingFangSC-Semibold;
                    font-weight:600;
                    color:rgba(42,45,55,1);
                    line-height:2.08rem;">支付成功</p>
        </div>
      </div>
    </div>
    <div style="width:100%;height:7rem;"
        class="Payment-select">
      <div class="display-flex-row display-flex-center"
          style="cursor:pointer;"
          @click="getPaymentType(false)">
        <div class="display-flex-row
                  display-flex-center"
          style=" width:1.5rem;
                  height:1.5rem;
                  margin-right:1rem;
                  border:1px solid #E6E6E6;
                  border-radius: 50%;">
          <div style="width:1rem;
                      height:1rem;
                      border-radius: 50%;"
                :style="!paySelect ? 'background:rgba(255,66,93,1);':''">
          </div>
        </div>
        <div class="icon-zhifubao"
            style="width:10.17rem;height:2.83rem;">
        </div>
      </div>
      <div class="display-flex-row display-flex-center"
          style="cursor:pointer;"
          @click="getPaymentType(true)">
        <div class="display-flex-row
                  display-flex-center"
          style=" width:1.5rem;
                  height:1.5rem;
                  margin-right:1rem;
                  border:1px solid #E6E6E6;
                  border-radius: 50%;">
          <div style="width:1rem;
                      height:1rem;
                      border-radius: 50%;"
                :style="paySelect ? 'background:rgba(255,66,93,1);':''">
          </div>
        </div>
        <div class="icon-weixin"
            style="width:10.17rem;height:2.83rem;">
        </div>
      </div>
    </div>
    <div>
      <p style="font-size:1.5rem;
                font-family:PingFangSC-Semibold;
                font-weight:600;
                color:rgba(42,45,55,1);
                line-height:2.08rem;
                margin-bottom: 0.5rem;">订单信息</p>
      <div>
        <p class="display-flex-row
                  Payment-table"
          style="justify-content: space-between;
                align-items: center;">
          <span class="display-flex-row
                      display-flex-center">订单编号</span>
          <span>订1234567</span>
        </p>
        <p class="display-flex-row
                  Payment-table"
          style="justify-content: space-between;
                align-items: center;">
          <span class="display-flex-row
                      display-flex-center">订单日期</span>
          <span>订1234567</span>
        </p>
        <p class="display-flex-row
                  Payment-table"
          style="justify-content: space-between;
                align-items: center;">
          <span class="display-flex-row
                      display-flex-center">项目名称</span>
          <span>订1234567</span>
        </p>
        <p class="display-flex-row
                  Payment-table"
          style="justify-content: space-between;
                align-items: center;">
          <span class="display-flex-row
                      display-flex-center">项目回报</span>
          <span>订1234567</span>
        </p>
        <p class="display-flex-row
                  Payment-table"
          style="justify-content: space-between;
                align-items: center;">
          <span class="display-flex-row
                      display-flex-center">当前状态</span>
          <span>订1234567</span>
        </p>
        <p class="display-flex-row
                  Payment-table"
          style="justify-content: space-between;
                align-items: center;">
          <span class="display-flex-row
                      display-flex-center">付款方式</span>
          <span>订1234567</span>
        </p>
        <p class="display-flex-row
                  Payment-table"
          style="justify-content: space-between;
                align-items: center;">
          <span class="display-flex-row
                      display-flex-center">商品价格</span>
          <span>订1234567</span>
        </p>
        <p class="display-flex-row
                  Payment-table"
          style="justify-content: space-between;
                align-items: center;">
          <span class="display-flex-row
                      display-flex-center">运费</span>
          <span>订1234567</span>
        </p>
        <p class="display-flex-row
                  Payment-table"
          style="justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #f2f2f2;">
          <span class="display-flex-row
                      display-flex-center"
                style="border-bottom 1px solid #f2f2f2;">合计金额</span>
          <span>订1234567</span>
        </p>
      </div>
    </div>
    <div style="margin-top:1.67rem;">
      <p style="font-size:1.5rem;
                font-family:PingFangSC-Semibold;
                font-weight:600;
                color:rgba(42,45,55,1);
                line-height:2.08rem;
                margin-bottom: 0.5rem;">收货信息</p>
      <div>
        <p class="display-flex-row
                  Payment-table"
          style="justify-content: space-between;
                align-items: center;">
          <span class="display-flex-row
                      display-flex-center">收件人</span>
          <span>订1234567</span>
        </p>
        <p class="display-flex-row
                  Payment-table"
          style="justify-content: space-between;
                align-items: center;">
          <span class="display-flex-row
                      display-flex-center">详细地址</span>
          <span>订1234567</span>
        </p>
        <p class="display-flex-row
                  Payment-table"
          style="justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #f2f2f2;">
          <span class="display-flex-row
                      display-flex-center">
              邮箱
          </span>
          <span>订1234567</span>
        </p>
      </div>
    </div>
    <div style="margin-top: 1.5rem;
                margin-bottom: 12.5rem;
                width:100%;
                height:5.92rem;
                background:rgba(247,248,249,1);
                align-items: center;"
        class="display-flex-row">
      <div class="icon-doubt"
          style="width:2.58rem;
                  height:2.58rem;
                  margin-left:1.67rem;">
      </div>
      <div style="margin-left:1.75rem;">
        <p>如果对订单有问题或者需要修改收货信息</p>
        <p>添加客服微信: 10086</p>
      </div>
    </div>
    <div class="postion-fixed"
         style="z-index:100;bottom:0px;left:0px;width: 100%;
                background:rgba(255,255,255,1);
                box-shadow:0rem -0.17rem 0.67rem 0rem rgba(0,0,0,0.1);">
      <div style="margin: 1.17rem auto 2.5rem auto;
                  justify-content: space-between;"
          class="display-flex-row in-test Payment-bottomBar">
        <div class="display-flex-column">
          <p style="font-size:1rem;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(42,45,55,1);
                    line-height:1.42rem;">需支付金额</p>
          <p style="font-family:PingFangSC-Semibold;
                    font-weight:600;
                    color:rgba(255,66,93,1);
                    line-height:1.67rem;">
            <span style="font-size:1.17rem;">￥</span>
            <span style="font-size:1.5rem;">323.00</span>
          </p>
        </div>
        <div style="width:9.58rem;">
          <InButtonMin :buttonText="'立即支付'"
                      @getClick="test()"></InButtonMin>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InButtonMin from '@/components/InButtonMin.vue';

export default {
  components: {
    InButtonMin,
  },
  data() {
    return {
      // payType-value: seccess, fail, loading
      pageData: {},
      payType: 'loading',
      paySelect: false, // false为支付宝 true为微信
    };
  },
  props: ['projectId', 'packageId', 'from'],
  methods: {
    setPayType(value) {
      this.payType = value;
    },
    getPaymentType(value) {
      this.paySelect = value;
    },
    test() {
      // 显示弹窗
      this.$store.commit('changeAlert', {
        name: 'help',
        type: 'waitPayment',
        flag: true,
      });
    },
  },
  async created() {
    await this.$API.project('05b69ca3-12d2-403e-b7e3-471b7b0b134b').then((value) => {
      this.pageData = value;
    });
  },
};
</script>

<style lang="stylus" scoped>
.Payment-time
  font-size:1.08rem;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  color:rgba(42,45,55,1);
  line-height:1.5rem;
.Payment-table
  font-size:1.08rem;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(42,45,55,1);
  line-height:1.5rem;
  width 100%;
  height 2.67rem;
  border-top 1px solid #f2f2f2;
.Payment-table > span:nth-child(1)
  font-weight:500;
  font-family:PingFangSC-Medium;
  width 6rem;
  height 2.58rem;
  background:rgba(247,248,249,1);
.Payment-table > span:nth-child(2)
  // color red;
  margin-right 1rem;
.Payment-select
  width 100%;
  display flex;
  flex-direction row;
  justify-content center;
  align-items center;
.Payment-select > div
  width 100%;
  display flex;
  flex-direction row;
  align-items center;
.Payment-bottomBar
  padding: 0rem 1.5rem;
@media screen and (min-width: 1020px)
  .Payment-bottomBar
    padding: 0rem 3rem;
</style>
