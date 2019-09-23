<template>
  <div class="alert-windowSize postion-absolute"
      v-show="type.pin || type.signal">
    <div class="postion-absolute"
        style="top: 0.5rem;right: 1rem;"
        @click.stop="windowClose()">
      <Icon type="md-close" size="24"/>
    </div>
    <div v-show="type.pin">
      <p class="alert-title">验证用户身份</p>
      <div class="display-flex-column
                  display-flex-center">
        <p class="alert-center"
          style="margin-bottom:0.83rem;">预留手机号后4位</p>
        <p class="text-red
                  alert-center"
          style="margin-bottom:2.83rem;"
          :style="pinFlag ? 'opacity: 1;':'opacity: 0;'">数字错误，请重新输入</p>
        <div class="display-flex-row position-relative">
          <input type="number" ref="pin" v-model="pinCode"
                maxlength="4"
                style="opacity: 0;position: absolute;"
                v-show="pinCode.length !== 4"
                @click.stop="">
          <div class="display-flex-row" @click.stop="setPin()">
            <div class="pinCodeBox">
              <span v-show="pinCode.length > 0">*</span>
              <div class="pinCodeBox-input-icon"
                  v-show="pinCode.length === 0"></div>
            </div>
            <div class="pinCodeBox">
              <span v-show="pinCode.length > 1">*</span>
              <div class="pinCodeBox-input-icon"
                  v-show="pinCode.length === 1"></div>
            </div>
            <div class="pinCodeBox">
              <span v-show="pinCode.length > 2">*</span>
              <div class="pinCodeBox-input-icon"
                  v-show="pinCode.length === 2"></div>
            </div>
            <div class="pinCodeBox">
              <span v-show="pinCode.length > 3">*</span>
              <div class="pinCodeBox-input-icon"
                  v-show="pinCode.length === 3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="type.signal">
      <p class="alert-title">有未完成的订单</p>
      <div class="display-flex-column
                  display-flex-center">
        <p class="alert-center"
          style="margin-bottom:5.83rem;">您有未完成的订单，是否继续操作？</p>
        <div class="display-flex-row"
            style=" width: 100%;
                    justify-content: space-between;">
          <div class="display-flex-row
                      display-flex-center"
              style=" width:45%;
                      height:3rem;
                      background:rgba(255,255,255,1);
                      border:0.08rem solid #FF425D;">
            <span class="alert-center text-red">重新选择</span>
          </div>
          <div class="display-flex-row
                      display-flex-center"
              style=" width:45%;
                      height:3rem;
                      background:#FF425D;
                      border:0.08rem solid #FF425D;">
            <span class="alert-center text-white">确认</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pinCode: '',
      pinFlag: false,
    };
  },
  watch: {
    pinCode(value) {
      // console.log(value.length)
      if (value.length === 4) {
        // console.log('asd');1
        this.testApi();
      }
    },
  },
  computed: {
    type() {
      return this.$store.state.alert.prompt;
    },
  },
  methods: {
    setPin() {
      this.$refs.pin.focus();
    },
    testApi() {
      setTimeout(() => {
        this.pinCode = '';
        this.pinFlag = true;
        this.setPin();
      }, 2000);
    },
    windowClose() {
      // 关闭弹窗
      this.$store.commit('changeAlert');
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.setPin();
    });
  },
};
</script>

<style lang="stylus" scoped>
.pinCodeBox
  width:4.83rem;
  height:4.83rem;
  border-bottom: 0.08rem solid #EBECEF;
  margin-left: 1rem;
  display flex;
  flex-direction column;
  justify-content: center;
  align-items center;
  font-size:2.5rem;
  font-family:SFProText-Heavy;
  font-weight:800;
  color:rgba(42,45,55,1);
  line-height:4.83rem;
.pinCodeBox-input-icon
  width 0.083rem;
  height 3rem;
  background-color rgba(42,45,55,1);
  animation opacityFlash 1s infinite;
@keyframes opacityFlash
  0%
    opacity 0;
  100%
    opacity 1;
</style>
