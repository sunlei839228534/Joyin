<template>
  <div>
    <p class="in-title">{{pageData.title}}</p>
    <div class="Details-info">
      <div class="display-flex-column">
        <div class="in-cover">
          <video :src="pageData.posters[0].url" style="width:100%;"
                controls preload
                v-if="pageData.posters[0].type === 'video'"
                :poster="pageData.posters[0].cover"></video>
          <img :src="pageData.posters[0].url" alt=""
              v-if="pageData.posters[0].type === 'image'"
              style="width:100%;">
        </div>
        <div class="Details-content">
          <p style=" font-weight: bold;
                    font-size: 1.3rem;
                    margin-top:0.5rem;">
            {{pageData.intro}}
          </p>
          <p class="Details-content-title
                    display-flex-row"
              style="align-items: center;">
            <i class="icon-project-notice" style="width:1.5rem;height:1.5rem;margin-right:0.5rem;"> </i>
            <span>NOTICE</span>
          </p>
          <div class="display-flex-row"
              v-for="notice in pageData.noticeList"
              :key="notice.condition">
            <span class="Details-content-Subtitle text-black"
              style="font-weight: bold;">
              {{notice.condition}}&nbsp;&nbsp;
            </span>
            <span class="Details-content-Subtitle text-black">
              {{notice.reward}}
            </span>
          </div>
          <p class="Details-content-Subtitle text-black">
            <!-- <span>{{ this.pageData.title }}</span> -->
            <!-- <span>3. 300%追加  所有签名和感谢全部升级为1对1的专属感谢和签名</span> -->
          </p>
        </div>
      </div>
      <div class="Details-content-info position-relative">
        <div class="Details-carad position-relative display-flex-column">
          <div class="Details-carad-type">
            <span>{{stageText[this.pageData.stage]}}</span>
          </div>
          <div class="display-flex-row"
              style="justify-content: space-between;
                    align-items: flex-end;">
            <div class="display-flex-column">
              <p style="font-size:1.17rem;
                      font-family:PingFangSC-Semibold;
                      font-weight:600;
                      line-height:1.67rem;">目标金额</p>
              <p class="Details-carad-text-bold">
                <span>¥</span>
                <span>{{pageData.target}}</span>
                <!-- <span>{{ this.$resetAmount(this.pageData.target) }}</span> -->
                <!-- <span>120800</span> -->
              </p>
            </div>
            <p class="Details-carad-text-bold">
              <!-- <span>{{ resetNumber(this.pageData.percent) }}</span> -->
              <span>{{test.percent || 0}}</span>
              <span>%</span>
            </p>
          </div>
          <div style="margin-top:0rem;">
            <!-- <Progress :percent=" resetNumber(this.pageData.percent) "
                      :stroke-width="6" hide-info
                      status="active"/> -->
            <Progress :percent="getPercent(Number(test.percent))"
                      :stroke-width="6" hide-info
                      status="active"/>
          </div>
          <div class="display-flex-row"
              style="justify-content: space-between;
                    align-items: flex-end;
                    margin-top: 1.67rem;">
            <div class="display-flex-column">
              <p class="Details-carad-text-gray">已应援</p>
              <p class="Details-carad-text-bold">
                <span>¥</span>
                <!-- <span>{{this.$resetAmount(this.pageData.current)}}</span> -->
                <span>{{test.current || 0}}</span>
              </p>
            </div>
            <div class="display-flex-column">
              <p class="Details-carad-text-gray">剩余时间</p>
              <p class="Details-carad-text-bold"
                style="text-align: right;">
                <!-- <span>{{this.pageData.remainDays}}</span> -->
                <span>{{test.remainDays || 0}}</span>
                <span style="font-size:1rem;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:rgba(32,35,45,1);
                            line-height:1.42rem;">&nbsp;天</span>
              </p>
            </div>
          </div>
          <div class="display-flex-row"
              style="justify-content: space-between;
                    align-items: flex-end;
                    margin-top: 1.67rem;">
            <div class="display-flex-column">
              <p class="Details-carad-text-gray">参与人</p>
              <p class="Details-carad-text-bold">
                <!-- <span>{{ this.pageData.participator }}</span> -->
                <span>{{test.participator || 0}}</span>
                <span style="font-size:1rem;
                            font-family:PingFangSC-Regular;
                            font-weight:400;
                            color:rgba(32,35,45,1);
                            line-height:1.42rem;">&nbsp;人</span>
              </p>
            </div>
            <div class="display-flex-column">
              <p class="Details-carad-text-gray">
                <span>{{ this.pageData.dateRange.startOn }}</span>
                <span>&nbsp;~&nbsp;</span>
                <span>{{ this.pageData.dateRange.endOn }}</span>
              </p>
            </div>
          </div>
          <div style="margin-top:1.67rem;" ref="nowButton">
            <InButtonMax :buttonText="'INJOY NOW'"
                        :gotoUrl="pageData.stateUrl"
                          @getClick="gotoPage()"></InButtonMax>
          </div>
          <Divider />
          <div class="display-flex-row"
              style="justify-content: space-between;
                    align-items: center;">
            <div class="display-flex-row" style="align-items: center;"
                v-for="funder in pageData.funders"
                :key="funder.id">
              <div style="width: 3.33rem;
                          height: 3.33rem;
                          border-radius: 50%;
                          background: rgba(216,216,216,1);
                          overflow: hidden;
                          margin-right: 0.83rem;">
                <img :src="funder.avatarUrl.url" style="width:100%;"/>
              </div>
              <p class="Details-carad-text-bold" style="font-family:PingFangSC-Medium; font-weight:500;">
                <!-- <span>JOYIN娱乐</span> -->
                <span>{{funder.name}}</span>
              </p>
            </div>
            <p class="Details-carad-text-gray">发起者</p>
          </div>
        </div>
        <div class="postion-absolute in-package">
          <div style="width:22.9rem;
                      background:rgba(247,248,249,1);
                      border:0.08rem solid #EBECEF;
                      padding:1.67rem;
                      margin: 1rem 0rem;"
                      v-for="pack in pageData.parapacks"
                      :key="pack.id">
              <div class="display-flex-row"
                  style=" align-items: center;
                          justify-content: space-between;">
                <span style="font-size:1.5rem;
                            font-family:SFProText-Heavy;
                            font-weight:800;
                            color:rgba(32,35,45,1);
                            line-height:3rem;">￥&nbsp;{{pack.price}}</span>
                <a class="text-white"
                    style="width:6.7rem;
                            height:2.5rem;
                            background:rgba(255,66,93,1);
                            box-shadow:0rem 0.5rem 0.83rem 0rem rgba(255,14,54,0.1);
                            border-radius:1.5rem;
                            text-align: center"
                  :href="pageData.stateUrl">
                  <span style="font-size:1.2rem;
                              font-family:PingFangSC-Semibold;
                              font-weight:600;
                              color:rgba(255,255,255,1);
                              line-height:2.5rem;"
                      >支持</span>
                </a>
              </div>
              <Divider />
              <p style="font-size:1.2rem;
                        font-family:PingFangSC-Semibold;
                        font-weight:600;
                        color:rgba(42,45,55,1);
                        line-height:2.08rem;">{{pack.title}}</p>
              <p style="font-size:1.2rem;
                        font-family:PingFangSC-Semibold;
                        font-weight:600;
                        color:rgba(42,45,55,0.5);
                        line-height:2.08rem;"
                v-for="(text, index) in pack.list"
                :key="`${index}A`">{{`${(index+1)}. ${text}`}}</p>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top: 1.5rem; margin-bottom: 1.5rem;border-top: 1px solid rgb(220, 222, 226);">
      <Tabs value="name1">
          <TabPane label="详情" name="name1">
            <div class="position-relative" style="z-index: 1;">
              <div class="Details-detailsList"
                  v-for="img in pageData.detailItems" :key="img.id">
                <img :src="img.url" style="width:100%;">
              </div>
            </div>
            <div class="Details-set"
                v-for="(pack) in pageData.parapacks"
                :key="pack.id">
              <p class="bg-red
                        text-white
                        Details-set-title">{{pack.title}}</p>
              <p style="font-size:1.5rem;
                        font-family: SFProText-Heavy;
                        font-weight:600;
                        line-height:2.08rem;
                        margin-top: 0.5rem;
                        margin-bottom: 0.35rem;">￥ {{pack.price}}</p>
              <p style="font-size:1.2rem;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        line-height:1.42rem;
                        margin-top: 0.2rem;"
                v-for="(set, setIndex) in pack.list"
                :key="set+setIndex">
                <span>{{(setIndex + 1)}}.&nbsp;</span>
                <span>{{set}}</span>
              </p>

            </div>
          </TabPane>
          <!-- <TabPane :label="'更新(2)'" name="name2">
            <div class="position-relative">
              <div class="in-updateBox">
                <Timeline>
                    <!-- 详情 -->
                    <!-- <TimelineItem v-if="updateDetailsShow && updateDetailsContent.current">
                        <div slot="dot" class="in-timeline-icon">
                          <div></div>
                        </div>
                        <p class="in-timeline-title">{{updateDetailsContent.current.postOn}}</p>
                        <div class="in-timeline-content position-relative">
                          <img :src="updateDetailsContent.current.posterUrl"
                              :alt="updateDetailsContent.current.title"
                              style="width:100%;">
                          <p class="display-flex-row" style="align-items: center;">
                            <span>{{updateDetailsContent.current.title}}</span>
                            <span v-show="updateDetailsContent.number === 0"
                                  style="background:linear-gradient(90deg,rgba(37,233,1,1) 0%,rgba(0,212,185,1) 100%);
                                      padding: 0rem 0.5rem;
                                      display: block;
                                      font-size:1rem;
                                      font-family:SFProText-Heavy;
                                      font-weight:800;
                                      color:rgba(255,255,255,1);
                                      margin-left: 0.42rem;">
                              NEW
                            </span>
                          </p>
                          <p style="white-space: normal;">
                            <span>
                              {{updateDetailsContent.current.content}}
                            </span>
                          </p>
                          <Divider />
                          <div class="display-flex-row in-timeline-text-blue"
                              style=" justify-content: space-between;
                                      align-items: center;">
                            <div >
                              <p v-if="updateDetailsContent.previous.show"
                                 class="display-flex-row display-flex-center"
                                 @click="updateDetails((updateDetailsContent.number - 1))">
                                <Icon :size="12" type="ios-arrow-dropleft" :color="'#007AFF'"/>
                                <span>&nbsp;上一篇</span>
                              </p>
                            </div>
                            <div >
                              <p v-if="updateDetailsContent.next.show"
                                class="display-flex-row display-flex-center"
                                @click="updateDetails((updateDetailsContent.number + 1))">
                                <span>下一篇&nbsp;</span>
                                <Icon :size="12" type="ios-arrow-dropright" :color="'#007AFF'"/>
                              </p>

                            </div>
                          </div>
                          <div class="display-flex-row"
                              style=" justify-content: space-between;
                                      align-items: center;
                                      margin-top:0.83rem;">
                            <div>
                              <div v-if="updateDetailsContent.previous.show"
                                  class="display-flex-column display-flex-center">
                                <div style="width:10.83rem;
                                            height:7.25rem;
                                            background:rgba(216,216,216,1);">

                                </div>
                                <p class="in-timeline-row-hidden in-timeline-text-p-black"
                                    style="width:10.83rem;
                                          height:2.83rem;">
                                  {{updateDetailsContent.previous.intro}}
                                </p>
                              </div>
                            </div>
                            <div>
                              <div v-if="updateDetailsContent.next.show"
                                class="display-flex-column display-flex-center">
                                <div style="width:10.83rem;
                                            height:7.25rem;
                                            background:rgba(216,216,216,1);">

                                </div>
                                <p class="in-timeline-row-hidden in-timeline-text-p-black"
                                    style="width:10.83rem;
                                          height:2.83rem;">
                                  {{updateDetailsContent.next.intro}}
                                </p>
                              </div>
                            </div>

                          </div>
                          <div style="width:100%;
                                      height:3.67rem;
                                      margin-top: 2.17rem;
                                      background:rgba(247,248,249,1);
                                      border:0.08rem solid #EBECEF;
                                      line-height: 3.67rem;
                                      text-align: center;"
                              @click="updateDetailsShow = false">
                            <span class="in-timeline-text-blue">返回目录</span>
                          </div>
                        </div>
                    </TimelineItem> -->
                    <!-- 列表 -->
                    <!-- <TimelineItem v-show="!updateDetailsShow">
                      <div slot="dot" class="in-timeline-icon">
                        <div></div>
                      </div> -->
                      <!-- <p class="in-timeline-title">{{this.pageData.updates[0].postOn}}</p> -->
                      <!-- <div class="in-timeline-content position-relative"> -->
                        <!-- <div>
                          1
                        </div> -->
                        <!-- <img :src="this.pageData.updates[0].posterUrl" :alt="this.pageData.updates[0].title" style="width:100%;"> -->
                        <!-- <p class="display-flex-row" style="align-items: center;"> -->
                          <!-- <span>{{this.pageData.updates[0].title}}</span> -->
                          <!-- <span style="background:linear-gradient(90deg,rgba(37,233,1,1) 0%,rgba(0,212,185,1) 100%);
                                    padding: 0rem 0.5rem;
                                    display: block;
                                    font-size:1rem;
                                    font-family:SFProText-Heavy;
                                    font-weight:800;
                                    color: #fff;
                                    margin-left: 0.42rem;">
                            NEW
                          </span>
                        </p>
                        <p v-show="!updateDetailsShow" style="margin-bottom: 1rem;">
                          <span> -->
                            <!-- {{this.pageData.updates[0].intro}} -->
                          <!-- </span> -->
                        <!-- </p> -->
                        <!-- <a @click="updateDetails(0)" v-show="!updateDetailsShow">查看详情</a> -->
                      <!-- </div>
                    </TimelineItem> -->
                    <!-- <TimelineItem v-show="!updateDetailsShow && index !== 0"
                        v-for="(update,index) in this.pageData.updates"
                        :key="update.updateId">
                        <div slot="dot" class="in-timeline-icon">
                          <div></div>
                        </div>
                        <p class="in-timeline-title" style="font-size:1rem;">{{update.postOn}}</p>
                        <div class="in-timeline-content-min
                                    display-flex-row
                                    position-relative">
                          <img :src="update.posterUrl"
                              :alt="update.title"
                              style="width:100%;">
                          <div>
                            <p>
                              <span>{{update.title}}</span>
                            </p>
                            <p>
                              <span>
                                {{update.intro}}
                              </span>
                            </p>
                            <a href="" @click="updateDetails(index)">查看详情</a>
                          </div>
                        </div>
                    </TimelineItem> -->
                <!-- </Timeline>
              </div>
            </div> -->

          <!-- </TabPane> -->
      </Tabs>
    </div>
    <!-- 底部按钮 -->
    <div v-show="nowButtonBottom"
         class="postion-fixed
                display-flex-row
                display-flex-center"
         style="z-index:100;bottom:0px;left:0px;width: 100%;
                background:rgba(255,255,255,1);
                box-shadow:0rem -0.17rem 0.67rem 0rem rgba(0,0,0,0.1);">
      <div class="in-test"
          style="margin: 0rem 2.67rem;
                margin-top:1.17rem;
                margin-bottom: 2.5rem;
                width: 23rem;">
        <!-- <InButtonMax :buttonText="'INJOY NOW'"
                    @getClick="gotoPage()"></InButtonMax> -->
        <InButtonMax :buttonText="'INJOY NOW'"
                    :gotoUrl="pageData.stateUrl"></InButtonMax>
      </div>
    </div>
  </div>
</template>
<script>
import InButtonMax from '@/components/InButtonMax.vue';
import axios from 'axios';

export default {
  data() {
    return {
      updateDetailsShow: false,
      updateDetailsContent: {},
      nowButtonDom: {},
      nowButtonBottom: false,
      test:{
        percent: '0.02',
        current: 38.4,
        participator: '2',
        remainDays: 26
      },
      pageType: this.$route.params.type,
    };
  },
  props: ['projectId'],
  methods: {
    getPercent(persent) {
      if(persent > 100) {
        return 100
      }else {
        return persent
      }
    },
    async testYouZan(project) {
      const res = await axios({
        method: 'get',
        url: project.url,
        params: project.params,
      })
      if (res.data.code > 200) {
        return ;
      }
      this.test = res.data.message;
    },
    async updateDetails(index) {
      const {projectId, updateId} = this.pageData.updates[index];
      // console.log(projectId, updateId);
      let current = {};
      let previous = {};
      let next = {};
      let listNum = this.pageData.updates.length;
      // this.$API.projectUpdate(projectId, updateId).then((value) => {
      //   current = value;
      // })
      await this.$API.projectUpdate(122, 12).then((value) => {
        current = value;
      })
      this.updateDetailsShow = true;
      console.log(listNum);
      if ((index-1) >= 0) {
        previous = this.pageData.updates[(index - 1)];
        previous.show = true;
      } else {
        previous.show = false;
      }
      if ((index + 1) < listNum) {
        console.log('123');
        next = this.pageData.updates[(index + 1)];
        next.show = true;
      } else {
        next.show = false;
      }
      this.updateDetailsContent = {
        current: current,
        previous: previous,
        next: next,
        number: index,
      }
    },
    gotoPage() {
      this.$router.push({
        path: 'ChooseReturn',
        query: {
          projectId: this.pageData.projectId,
          packageTitle: this.pageData.title,
        }
      })
    },
    handleScroll () {
      this.nowButtonDom = this.$refs.nowButton.getBoundingClientRect();
      if(!this.nowButtonDom){
        return;
      }
      if(this.nowButtonDom.bottom < 0){
        this.nowButtonBottom = true;
      }else{
        this.nowButtonBottom = false;
      }
    },
    resetNumber(num) {
      if (num) {
        return Number(num) ;
      } else {
        return 0;
      }
    },
    testPackList() {
      this.pageData.parapacks.map((pack) => {
        pack
      })
    }
  },
  components: {
    InButtonMax,
  },
  computed: {
    infoBarFixedTop() {
      const style= `
        position: fixed;
        top: ${this.infoBaroffsetTop}px;
      `;
      return style;
    },
    stageText() {
      return this.$store.state.stageText;
    },
    pageData() {
      const type = this.$route.params.type
      console.log(type)
      return this.$store.state.project[type];
    }
  },
  async created () {
    this.testYouZan({
      url: this.pageData.youzanUrl,
      type: this.pageData.type,
      params:{
        target: this.pageData.target,
        startAt: this.pageData.dateRange.startOn,
        endAt: this.pageData.dateRange.endOn,
      }
    });
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
    console.log('asd');
  }
};
</script>

<style lang="stylus" scoped>
.Details-info
  display flex;
  flex-direction column;
.Details-content
  padding 0rem 1rem;
.Details-content-title
  font-size:1.67rem;
  font-family:SFProText-Heavy;
  font-weight:600;
  color:rgba(255,66,93,1);
  line-height:2.33rem;
  margin-top: 0.83rem;
.Details-content-info
  padding 0rem 1rem;
  width:100%;
.Details-content-Subtitle
  font-size:1.2rem;
  font-family:PingFangSC-Regular;
  font-weight:400;
  line-height:1.67rem;
  margin-top: 0.5rem;
  opacity: 0.8;
.Details-carad
  width 100%;
  height 32.5rem;
  background #F7F8F9;
  margin-top 1.5rem;
  box-sizing border-box;
  padding-top 3.33rem;
  padding-left 1.67rem;
  padding-right 1.67rem;
.Details-carad-type
  padding-left: 1.25rem;
  padding-right: 1rem;
  background:linear-gradient(90deg,rgba(233,8,255,1) 0%,rgba(255,5,78,1) 100%);
  font-size:1rem;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  color:rgba(255,255,255,1);
  line-height:1.5rem;
  position absolute;
  right -0.5rem;
  top 1.5rem;
.Details-detailsList
  width:100%;
  padding: 0rem 1rem;

.Details-carad-type:before
  content ' ';
  width: 1.45rem;
  height: 1.45rem;
  position absolute;
  left: -1rem;
  top: 0rem;
  transform:rotate(45deg);
  // border 1rem solid #00ff00
  background-color rgb(247, 248, 249);
.Details-carad-type:after
  content ' ';
  width: 0.5rem;
  height: 0.5rem;
  position absolute;
  right: 0rem;
  bottom: -0.5rem;
  background: linear-gradient(-45deg,rgba(255,255,255,1) 0%,
                                    rgba(255,255,255,1) 50%,
                                    rgba(211, 0, 49, 1) 50.1%,
                                    rgba(211, 0, 49, 1) 100%);
.Details-carad-text-bold
  font-size:1.33rem;
  font-family:SFProText-Heavy;
  font-weight:800;
  line-height:1.58rem;
.Details-carad-text-gray
  font-size:1.08rem;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(32,35,45,0.5);
  line-height:1.5rem;
.Details-set
  padding: 0rem 1rem;
  margin-top: 2rem;
.Details-set-title
  width:6.5rem;
  height:2rem;
  font-size:1.33rem;
  font-family:SFProText-Heavy;
  font-weight:800;
  padding-left:1rem;
  position: relative;
  overflow: hidden;
.Details-set-title::before
  content:'';
  width: 1rem;
  height: 4rem;
  background: white;
  position: absolute;
  right: 0rem;
  transform:rotate(24deg);
  z-index: 10;
.in-title
  font-size:2rem;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  padding 0rem 1rem;
.in-cover
  width 100%;
  // height 20.8rem;
  height: auto;
  background #D8D8D8;
  margin 0.5rem 0rem;
  overflow: hidden;
  line-height: 0rem;
.in-updateBox
  padding: 0rem 1rem;
  padding-left: 0.20rem;
.in-timeline-icon
  width 100%;
  display flex;
  flex-direction row;
  justify-content center;
  align-items center;
.in-timeline-icon > div
  border: 3px solid #ff425d;
  width: 0rem;
  height: 0rem;
.in-timeline-title
  font-size:1.17rem;
  font-family:SFProText-Semibold;
  font-weight:600;
  line-height:1.33rem;
.in-timeline-content
  margin-top 1rem;
.in-timeline-content > div:nth-child(1)
  width 100%;
  height 18.8rem;
  background-color #D8D8D8;
.in-timeline-content > p:nth-child(2)
  font-size:1.33rem;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  margin 1rem 0rem;
.in-timeline-content > p:nth-child(3)
  max-width 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size:1.17rem;
  font-family:PingFangSC-Regular;
  font-weight:400;
.in-timeline-content > a
  position absolute;
  bottom 0.15rem;
  right 0rem;
  color #007aff
  font-size:1.2rem;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(0,122,255,1);
  line-height:1.42rem;

.in-timeline-content-min
  margin-top 1rem;
.in-timeline-content-min > div:nth-child(1)
  min-width:14.08rem;
  max-width: 14.085rem;
  height:9.42rem;
  background-color #D8D8D8;
.in-timeline-content-min > div:nth-child(2)
  display flex;
  flex-direction column;
  margin-left 0.67rem;
.in-timeline-content-min > div:nth-child(2) > p:nth-child(1)
  width 13.6rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size:1.17rem;
  font-family:PingFangSC-Semibold;
  font-weight:bold;
  color:rgba(42,45,55,1);
  line-height:1.67rem;
  margin-bottom 0.83rem;
.in-timeline-content-min > div:nth-child(2) > p
  font-size:1.17rem;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(32,35,45,1);
  line-height:1.42rem;
  margin-bottom 1.45rem;
.in-timeline-content-min > div:nth-child(2) > a
  position absolute;
  bottom 0rem;
  right 0rem;
  color #007aff
  font-size:1.2rem;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(0,122,255,1);
  line-height:1.42rem;

.in-timeline-text-blue
  font-size:1.17rem;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  color:rgba(0,122,255,1);
  line-height:1.67rem;
.in-timeline-text-p-black
  font-size:1rem;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(42,45,55,1);
  line-height:1.42rem;
.in-timeline-row-hidden
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
.in-package
  display: none;
  top:0rem;
  right:1.6rem;


.ivu-timeline-item
  padding: 0rem;
@media screen and (max-width: 320px)
  .in-timeline-content > p
    max-width: 83%;
  .in-timeline-content-min > div:nth-child(2) > p:nth-child(1)
    width 42%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  .in-timeline-content-min > div:nth-child(2) > p
    width 42%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
@media screen and (min-width: 1020px)
  .Details-detailsList
    padding-right: 31.5%;
  .Details-content-title
    font-size: 2rem;
    font-weight:600;
    color:rgba(255,66,93,1);
    line-height:4.67rem;
  .Details-content-Subtitle
    font-size:1.3rem;
    font-weight:300;
    line-height:1.67rem;
    opacity: 0.8;
  .Details-info
    flex-direction row;
  .Details-content-info
    padding 0rem 1rem;
    height:43.92rem;
  .Details-carad
    margin-top 0.5rem;
    height: inherit;
  .in-cover
    width:55.75rem;
    // height:43.83rem;
    height: auto;
    background:rgba(216,216,216,1);
  .in-updateBox
    padding-right: 26rem;
    // border-left: 7rem solid #fff;
  .in-package
    top: 133%;
    // bottom: -26rem;
    right:1.6rem;
    display: block;
    z-index: 100;
</style>
