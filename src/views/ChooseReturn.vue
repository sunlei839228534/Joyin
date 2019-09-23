<template>
  <div class="ChooseReturn">
    <p class="in-title">{{packageTitle}}</p>
    <div style="margin-bottom:9rem;">
        <!-- <div class="in-Card position-relative"
            :class="setCardStyle(index)"
            :style="card.package.status ? '':'pointer-events:none;'"
            v-for="(card,index) in packagesData"
            :key="index"
            @click="getSelectCard(index)"> -->
        <div class="in-Card position-relative"
            :class="setCardStyle(index)"
            :style="card.package.status ? '':'pointer-events:none;'"
            v-for="(card,index) in packagesData"
            :key="(index+card.package.price)"
            @click="getSelectCard(index)">
          <div class="in-button postion-absolute">
            <div class="display-flex-row" style="align-items: center;">
              <div class="display-flex-row
                          display-flex-center"
                  :style="card.package.status ? '':'border:0.17rem solid #fff'"
                  style=" width:1.5rem;
                          height:1.5rem;
                          margin-right:4.08rem;
                          border:0.17rem solid #E6E6E6;
                          border-radius: 50%;">
                <div style="width:1rem;
                            height:1rem;
                            border-radius: 50%;"
                      :style="card.cardSelect ? 'background:rgba(255,66,93,1);':''">
                </div>
              </div>
              <span style="font-size: 1.5rem;
                          font-family: SFProText-Heavy;
                          font-weight: 800;"
                    :style="card.package.status ? '':'text-decoration:line-through;'">¥&nbsp;{{card.package.price}}</span>
            </div>
            <span v-show="card.package.status">剩余&nbsp;{{card.package.limitation.current}}/{{card.package.limitation.total}}</span>
          </div>
          <Card style="width:100%;" :bordered="false" dis-hover>
            <div class="in-Card-center">
              <div class="display-flex-row
                        in-Card-title"
                :style="card.package.status ? '':'text-decoration:line-through;'">
                <span >¥&nbsp;{{card.package.price}}</span>
                <span v-show="card.package.status">剩余&nbsp;{{card.package.limitation.current}}/{{card.package.limitation.total}}</span>
              </div>
              <div>
                <p style="font-weight:600;
                          margin-top:0.83rem;
                          margin-bottom:0.42rem;">
                  <span>{{card.package.title}}</span>
                </p>
                <p v-for="(text,index) in card.package.list"
                  :key="index">{{(index+1)}}.&nbsp;{{text}}</p>
              </div>
              <p v-show="!card.package.status"
                class="postion-absolute"
                style="height:2rem;
                      padding: 0rem 1rem;
                      display: block;
                      background:rgba(245,245,245,1);
                      font-size:1rem;
                      font-family:PingFangSC-Regular;
                      font-weight:400;
                      color:rgba(42,45,55,0.2);
                      line-height:2rem;
                      top: 1.4rem;
                      right: 0rem;">
                已售完
              </p>
            </div>
          </Card>
        </div>
          <!-- <Radio label="爪哇犀牛"></Radio>
          <Radio label="印度黑羚"></Radio> -->

    </div>
    <div v-show="bottomBarShow"
         class="postion-fixed
                in-paymentBar
                bg-white
                bottomBar">
      <div class="in-test"
          style="display: flex;
                flex-direction: row-reverse;
                align-items: center;">
        <div class="display-flex-row in-paymentBar-center">
          <div>
            <p class="in-Card-center-name">已选择</p>
            <p class="in-Card-center-number">{{selectPackage.title}}</p>
          </div>
          <div >
            <p class="in-Card-center-name">售价</p>
            <p class="in-Card-center-number">
              <span>¥</span>
              <span>&nbsp;{{selectPackage.price}}</span>
            </p>
          </div>
          <div style="width:10rem;">
            <InButtonMin :buttonText="'支持'"
                    @getClick="gotoPage()">
            </InButtonMin>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InButtonMin from '@/components/InButtonMin.vue';

export default {
  data() {
    return {
      packagesData: [
        {
          cardSelect: false,
          "package": {
            "packageId": "#3gP",
            "price": "pL9NAP",
            "title": "kxk#",
            "list": [
              "RKsymE"
            ],
            "package.status": false,
            "limitation": {
              "total": 88,
              "current": 85
            }
          },
          "inputFields": [
            {
              "required": true,
              "key": "2Cb#!",
              "value": "M)P",
              "title": "KrWs3",
              "hint": "G1S18A",
              "type": "^LxV4",
              "selection": [
                "d4mnQn"
              ]
            }
          ],
          "address": false
        }
      ],
      bottomBarShow: false,
      selectPackage: {
        title: '',
        price: '',
        num: 0,
      }
    };
  },
  props: ['projectId','packageTitle'],
  components: {
    InButtonMin,
  },
  computed: {

  },
  async created () {
    await this.$API.projectPackages(this.projectId).then((value) => {
      this.packagesData = value.packages;
      this.packagesData.forEach((element) => {
        element.cardSelect = false;
      });
    });
  },
  methods: {
    gotoPage() {
      this.$router.push({
        path: 'Order',
        query: {
          projectId: this.projectId,
          packageInfo: this.packagesData[this.selectPackage.num],
        }
      })
    },
    getSelectCard(index) {
      const cardSelect = this.packagesData[index].cardSelect;
      this.packagesData[index].cardSelect = !cardSelect;
      this.bottomBarShow = !cardSelect;
      this.selectPackage.title = this.packagesData[index].package.title;
      this.selectPackage.price = this.packagesData[index].package.price;
      this.selectPackage.num = index;
      for (let i = 0; i < this.packagesData.length; i += 1) {
        if (i !== index && this.packagesData[i].package.status && this.packagesData[i].cardSelect) {
          this.packagesData[i].cardSelect = false;
        }
      }
    },
    setCardStyle(index) {
      let style = '';
      if (!this.packagesData[index].package.status) {
        style = 'in-Card-Over';
      }
      if (this.packagesData[index].cardSelect) {
        style = 'in-Card-select';
      }
      return style;
    },
  },
};

</script>

<style lang="stylus" scoped>
.ChooseReturn
  padding 0rem 1rem;
.bottomBar > div > p:nth-child(1)

.bottomBar > div > p:nth-child(2)

.in-title
  font-size:1.67rem;
  font-family:PingFangSC-Semibold;
  font-weight:600;
.in-Card-Over
  color:#BBBCBF
  background-color #E6E6E6;
  border 1px solid #E6E6E6 !important;
.in-Card
  margin-top 1rem;
  font-size 1.17rem;
  font-family PingFangSC-Regular;
  font-weight 400;
  margin-bottom 1rem;
  border 2px solid #2a2d37;
.in-Card-select
  border 2px solid rgba(255,66,93,1);
  color rgba(255,66,93,1);
.in-Card-title
  justify-content space-between;
  align-items center;
.in-Card-title > span:nth-child(1)
  font-size:1.5rem;
  font-family:SFProText-Heavy;
  font-weight:800;
.in-Card-title > span:nth-child(2)
  font-size:1rem;
  font-family:PingFangSC-Regular;
  font-weight:400;
.in-paymentBar
  z-index:100;
  bottom:0px;
  left:0px;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding-top 0.75rem;
  padding-bottom 3.42rem;
  box-shadow: 0rem 0.17rem 1.67rem rgba(0, 0, 0, 0.1);
.in-paymentBar-center
  width 100%;
  justify-content space-between
  padding 0rem 1rem;
.in-button
  width: 100%;
  right: 0rem;
  top: 50%;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 3.42rem;
.in-button > span:nth-child(1)
  font-size:1.5rem;
  font-family:SFProText-Heavy;
  font-weight:800;
  color:rgba(32,35,45,1);
  line-height:1.75rem;
.in-Card-center
  display: flex;
  flex-direction: row;
  justify-content: center;
  width 100%;
.in-Card-center-name
  font-size:1rem;
  font-family:PingFangSC-Regular;
  font-weight:400;
.in-Card-center-number
  font-size:1.33rem;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  color:rgba(255,66,93,1);

.ivu-card
  border-radius 0px;


@media screen and (min-width: 1020px)
  .in-Card-select:hover
    border 2px solid rgba(255,66,93,1);
  .in-Card:hover
    border 2px solid rgba(255,66,93,1);
  .in-title
    font-size:2.5rem;
    font-family:PingFangSC-Semibold;
    font-weight:600;
    line-height:3.5rem;
    text-align center;
    margin-top: 5.32rem;
    margin-bottom: 4.17rem;
  .in-Card-title
    display none;
  .in-paymentBar-center
    width 32rem;
@media screen and (max-width: 1020px)
  .in-button
    display none;
  .in-Card-center
    flex-direction column;
</style>
