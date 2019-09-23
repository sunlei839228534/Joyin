<template>
  <div class="Order-table"
      style="margin: 0rem 1rem;">
    <div class="display-flex-row Order-infoBox-mobile">
      <div class="Order-title">

      </div>
      <div class="display-flex-column"
          style="justify-content: space-between;
                margin-left:0.83rem;">
        <p class="Order-table-title"
          style="">
          <span>{{packageInfo.package.title}}</span>
        </p>
        <div >
          <p style="font-size:1.17rem;
                    font-family:PingFangSC-Semibold;
                    font-weight:600;
                    color:rgba(42,45,55,1);
                    line-height:1.67rem;
                    margin-bottom:0.67rem;">SET</p>
          <p style="font-size:1.5rem;
                    font-family:SFProText-Heavy;
                    font-weight:800;
                    line-height:1.75rem;">
            <span>￥</span>
            <span>{{packageInfo.package.price}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="Order-infoBox-mobile" style="margin-top:1.67rem;">
      <p
        style="font-size:1.5rem;
                font-family:PingFangSC-Semibold;
                font-weight:600;
                line-height:2.08rem;">回报</p>
      <div style="font-size:1.17rem;
                  font-family:PingFangSC-Regular;
                  font-weight:400;
                  line-height:1.67rem;
                  margin-top:0.83rem;
                  padding-bottom:0.83rem;
                  border-bottom: 1px solid #E6E6E6;">
        <p v-for="(text, index) in packageInfo.package.list"
        :key="index+text">{{text}}</p>
      </div>
    </div>
    <div class="display-flex-row
                display-flex-center">
      <div class="display-flex-column"
          style="width:100%;">
        <div>
          <p style="font-size:1.5rem;
                    font-family:PingFangSC-Semibold;
                    font-weight:600;
                    line-height:2.08rem;
                    margin-top:1.67rem;">回报选项</p>
          <div class="Order-inputBox">
            <p>INJOY名</p>
            <input type="text"
                  :class="inputInfo.name.flag ? 'invalid':''"
                  :placeholder="inputInfo.name.flag ? `*${inputInfo.name.placeholder}`:inputInfo.name.placeholder"
                  v-model.trim="inputInfo.name.value"
                  @blur="checkName(inputInfo.name.value, 'name')"/>
          </div>
          <div class="Order-inputBox">
            <p>手机号</p>
            <input type="number"
                  :class="inputInfo.phoneNumber.flag ? 'invalid':''"
                  :placeholder="inputInfo.phoneNumber.flag ? `*${inputInfo.phoneNumber.placeholder}`:inputInfo.phoneNumber.placeholder"
                  v-model.trim.number="inputInfo.phoneNumber.value"
                  @blur="checkPhoneNumber(inputInfo.phoneNumber.value, 'phoneNumber')"/>
          </div>
          <div class="Order-inputBox">
            <p>验证码</p>
            <div class="display-flex-row">
              <input type="number"
                    :class="inputInfo.pinCode.flag ? 'invalid':''"
                    :placeholder="inputInfo.pinCode.flag ? `*${inputInfo.pinCode.placeholder}`:inputInfo.pinCode.placeholder"
                    v-model.trim.number="inputInfo.pinCode.value"
                    @blur="checkPinCode(inputInfo.pinCode.value, 'pinCode')"/>
              <p  class="display-flex-row
                        display-flex-center"
                  style="width:17.33rem;
                        height:3rem;
                        background:rgba(23, 27, 67, 1);
                        margin-left: 1rem;"
                  @click="countdown()"
                  v-show="!countdownFlag">
                <span style="font-size:1.08rem;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color: #fff;
                            line-height:1.5rem;
                            cursor:pointer;">获取验证码</span>
              </p>
              <p  class="display-flex-row
                        display-flex-center"
                  style="width:17.33rem;
                        height:3rem;
                        background:rgba(23, 27, 67, 1);
                        margin-left: 1rem;"
                  @click="countdown()"
                  v-show="countdownFlag">
                <span style="font-size:1.08rem;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color: #fff;
                            line-height:1.5rem;">{{time}}&nbsp;后重新发送</span>
              </p>
            </div>

          </div>
          <div class="Order-inputBox">
            <p>邮箱</p>
            <input type="text"
                  :class="inputInfo.email.flag ? 'invalid':''"
                  :placeholder="inputInfo.email.flag ? `*${inputInfo.email.placeholder}`:inputInfo.email.placeholder"
                  v-model.trim.number="inputInfo.email.value"
                  @blur="checkEmail(inputInfo.email.value, 'email')"/>
          </div>
        </div>
        <div>
          <p style="font-size:1.5rem;
                    font-family:PingFangSC-Semibold;
                    font-weight:600;
                    line-height:2.08rem;
                    margin-top:1.67rem;">收获信息</p>
          <div class="Order-inputBox">
            <p>收件人</p>
            <input type="text"
                  :class="inputInfo.receiver.flag ? 'invalid':''"
                  :placeholder="inputInfo.receiver.flag ? `*${inputInfo.receiver.placeholder}`:inputInfo.receiver.placeholder"
                  v-model.trim="inputInfo.receiver.value"
                  @blur="checkName(inputInfo.receiver.value, 'receiver')"/>
          </div>
          <div class="Order-inputBox">
            <p>收件人手机号</p>
            <input type="number"
                  :class="inputInfo.receiverPhoneNumber.flag ? 'invalid':''"
                  :placeholder="inputInfo.receiverPhoneNumber.flag ? `*${inputInfo.receiverPhoneNumber.placeholder}`:inputInfo.receiverPhoneNumber.placeholder"
                  v-model.trim.number="inputInfo.receiverPhoneNumber.value"
                  @blur="checkPhoneNumber(inputInfo.receiverPhoneNumber.value, 'receiverPhoneNumber')"/>
          </div>
          <div class="Order-inputBox">
            <p>省/市</p>
            <div class="display-flex-row position-relative"
                style="height: 3rem;">
              <v-distpicker @province="getProvince"
                            @city="getCity"
                            ref="distpicker"
                            class="postion-absolute"
                            hide-area></v-distpicker>
                <div style="width: 49%;left: 0rem;" class="postion-absolute">
                  <p style="height: 3.3rem;
                          background: #FAFAFA;
                          border: 1px solid #E6E6E6;
                          line-height: 3.3rem;
                          padding: 0rem 0.75rem;"
                  v-show="inputInfo.province.flag"
                  @click="inputInfo.province.flag = false"
                  class="text-red">{{inputInfo.province.placeholder}}</p>
                </div>
                <div style="width: 49%;right:0rem;" class="postion-absolute">
                  <p style="height: 3.3rem;
                            background: #FAFAFA;
                            border: 1px solid #E6E6E6;
                            line-height: 3.3rem;
                            padding: 0rem 0.75rem;"
                    v-show="inputInfo.city.flag"
                    @click="inputInfo.city.flag = false"
                    class="text-red">{{inputInfo.city.placeholder}}</p>
                </div>
            </div>

          </div>
          <div class="Order-inputBox">
            <p>地址</p>
            <input type="text"
                  :class="inputInfo.address.flag ? 'invalid':''"
                  :placeholder="inputInfo.address.flag ? `*${inputInfo.address.placeholder}`:inputInfo.address.placeholder"
                  v-model.trim="inputInfo.address.value"
                  @blur="checkAddress(inputInfo.address.value, 'address')"/>
          </div>
          <div class="Order-inputBox">
            <p>备注</p>
            <textarea rows="3" cols="30"
                    placeholder="请输入备注信息"
                    v-model.trim="inputInfo.remarks.value"></textarea>
          </div>
        </div>
        <div class="Order-inputBox">
          <p style="font-size:1.5rem;
              font-family:PingFangSC-Semibold;
              font-weight:600;
              line-height:2.08rem;
              margin-top:1.67rem;">订单金额</p>
          <div class="display-flex-row amount-text"
              style=" justify-content: space-between;
                align-items: center;
                margin-top:1rem;">
            <div class="display-flex-column"
                style="text-align: left;">
              <p>定价</p>
              <p>
                <span>￥</span>
                <span>{{packageInfo.package.price}}</span>
              </p>
            </div>
            <div class="display-flex-column"
                style="text-align: center;">
              <p>运费</p>
              <p>
                <span>￥</span>
                <span>{{freight}}</span>
              </p>
            </div>
            <div class="display-flex-column"
                style="text-align: right;">
              <p>合计</p>
              <p>
                <span>￥</span>
                <span>{{(packageInfo.package.price + freight)}}</span>
              </p>
            </div>
          </div>
          <Divider />
          <div class="display-flex-row"
              style=" justify-content: space-between;
                align-items: center;
                padding-bottom: 2rem;">
            <div class="display-flex-column">
              <p style="font-size:1rem;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        line-height:1.42rem;">需支付金额</p>
              <p style="font-family:PingFangSC-Semibold;
                        font-weight:600;
                        line-height:1.67rem;">
                <span style="font-size:1.17rem;">￥</span>
                <span style="font-size:1.5rem;">{{(packageInfo.package.price + freight)}}</span>
              </p>
            </div>
            <div class="display-flex-row"
                style="align-items: center;">
                <p style="font-size:1.08rem;
                          font-family:PingFangSC-Medium;
                          font-weight:500;
                          color:rgba(199,201,209,1);
                          line-height:1.5rem;
                          cursor:pointer;">取消</p>
                <p style="width:9.58rem;
                          height:3rem;
                          background:rgba(255,66,93,1);
                          text-align:center;
                          margin-left: 1.58rem;"
                    @click="checkFrom()">
                  <span style="font-size:1.08rem;
                              font-family:PingFangSC-Medium;
                              font-weight:500;
                              color:rgba(255,255,255,1);
                              line-height:3rem;
                              cursor:pointer;">提交订单</span>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VDistpicker from 'v-distpicker';

  export default {
    data () {
        return {
          country: '中国',
          countdownFlag: false,
          time:60,
          inputInfo:{
            name: {
              flag: false,
              placeholder: '请填写INJOY名，该名字会被用于制作证书。',
              value:'',
            },
            phoneNumber: {
              flag: false,
              placeholder: '请输入11位手机号',
              value:'',
            },
            pinCode: {
              flag: false,
              placeholder: '请输入验证码',
              value:'',
            },
            email:{
              flag: false,
              placeholder: '请输入邮箱',
              value:'',
            },
            receiver: {
              flag: false,
              placeholder: '请输入姓名',
              value:'',
            },
            receiverPhoneNumber: {
              flag: false,
              placeholder: '请输入11位手机号',
              value:'',
            },
            province: {
              flag: false,
              placeholder: '*选择省',
              value:'',
            },
            city: {
              flag: false,
              placeholder: '*选择市',
              value:'',
            },
            address: {
              flag: false,
              placeholder: '请输入详细地址',
              value:'',
            },
            remarks: {
              flag: false,
              placeholder: '请输入备注信息',
              value:'',
            },
          },
          from: {},
          freight: 0,
        }
    },
    components: {
      VDistpicker,
    },
    computed: {
    },
    props: ['projectId','packageInfo'],
    methods: {
      countdown() {
        const phoneNumber = this.inputInfo.phoneNumber.value;
        if (this.checkPhoneNumber(phoneNumber,'phoneNumber')) {
          return ;
        }
        this.$API.commonCode(phoneNumber);
        this.countdownFlag = true;
        const test = setInterval(() => {
          this.time -= 1;
          if (this.time === 0) {
            this.countdownFlag = false;
            clearInterval(test);
          }
        }, 1000);
      },
      getProvince(val) {
        this.inputInfo.province.value = val.value;
      },
      getCity(val) {
        this.inputInfo.city.value = val.value;
      },
      checkName(name,variable) {
        console.log(name.toString().length);
        if (name.toString().length > 30 || name.toString().length === 0) {
          this.inputInfo[variable].flag = true;
          this.inputInfo[variable].value = '';
          return this.inputInfo[variable].flag;
        }
        return this.inputInfo[variable].flag;
      },
      checkPhoneNumber(phone, variable) {
        if (phone.toString().length !== 11) {
          this.inputInfo[variable].flag = true;
          this.inputInfo[variable].value = '';
          return this.inputInfo[variable].flag;
        }
        return this.inputInfo[variable].flag;
      },
      checkPinCode(pin, variable) {
        if (pin.toString().length !== 4) {
          this.inputInfo[variable].flag = true;
          this.inputInfo[variable].value = '';
          return this.inputInfo[variable].flag;
        }
        return this.inputInfo[variable].flag;
      },
      checkAddress(address, variable) {
        if (address.toString().length === 0) {
          this.inputInfo[variable].flag = true;
          this.inputInfo[variable].value = '';
          return this.inputInfo[variable].flag;
        }
        return this.inputInfo[variable].flag;
      },
      checkEmail() {
        if (address.toString().length === 0) {
          this.inputInfo[variable].flag = true;
          this.inputInfo[variable].value = '';
          return this.inputInfo[variable].flag;
        } else if (false) {

        }
        return this.inputInfo[variable].flag;
      },
      checkFrom() {
        let noContentNumber = 0;
        Object.keys(this.inputInfo).forEach(element => {
          console.log(element);
          const number = this.inputInfo[element].value.toString().length;
          if (number === 0) {
            this.inputInfo[element].flag = true;
            this.inputInfo[element].value = '';
            noContentNumber += 1;
          }
        });
        if (noContentNumber === 0) {
          this.gotoPage();
        }
      },
      gotoPage() {
        this.$router.push({
          path: 'Payment',
          query: {
            projectId: this.projectId,
            packageId: this.packageInfo.package.packageId,
            from: this.from,
          }
        })
      },
    },
    async created () {
      await this.$API.projectPackages(this.projectId).then((value) => {
        this.packagesData = value.packages;
      });
    },
    mounted () {
      this.$nextTick(()=>{
        console.log(this.$refs.distpicker);
      })
    },
  }
</script>

<style lang="stylus" scoped>
.Order-table-title
  font-size:1.17rem;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  line-height:1.67rem;
.Order-inputBox
  width 100%;
  margin-top 1.5rem;
.Order-inputBox > p
  height:1.5rem;
  font-size:1.08rem;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  line-height:1.5rem;
  margin-bottom 0.5rem;
.Order-title
  width:12.5rem;
  height:8.33rem;
  background:rgba(216,216,216,1);
.amount-text
  font-size:1.08rem;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  line-height:1.5rem;

.invalid::-webkit-input-placeholder {
   color: rgba(255, 66, 93, 1);
}
// @media screen and (max-width: 1020px)
@media screen and (min-width: 1020px)
  .Order-title
    width:25rem;
    height:16.67rem;
    background:rgba(216,216,216,1);
  .Order-table
    padding: 0rem 15%;
  .Order-table-title
    font-size:1.5rem;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    color:rgba(42,45,55,1);
    line-height:2.08rem;
</style>
