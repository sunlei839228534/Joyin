<template>
  <div class="home display-flex-column">
    <!-- <div>
      <router-link to="ChooseReturn">ChooseReturn</router-link>
      <br />
      <router-link to="Details">Details</router-link>
      <br />
      <router-link to="Order">Order</router-link>
      <br />
      <router-link to="Payment">Payment</router-link>
    </div> -->
    <div>
      <div style="width: 100%;">
        <Carousel v-model="Carousel"
                :loop="bannerList.length > 1"
                :autoplay="true"
                :radius-dot="true"
                :autoplay-speed="3000"
                :arrow="'always'">
          <CarouselItem v-for="(banner, bannerIndex) in bannerList"
              :key="bannerIndex"
              >
              <div class="carousel-imgBox
                          display-flex-row
                          display-flex-center"
                  :style="`background: ${banner.color};`">
                <div class="carousel-img
                            display-flex-row
                            display-flex-center"
                    >
                  <img @click="gotoDetails(banner.goto)" :src="banner.url" alt="test" style="width:100%;">
                </div>
              </div>
          </CarouselItem>
        </Carousel>
      </div>
      <div style="margin: 1.67rem 1rem;">
        <p class="display-flex-row"
          style="align-items: center;">
          <span style="font-size:20px;
                      font-family:PingFangSC-Semibold;
                      font-weight:600;
                      line-height:28px;">热门应援</span>
          <span class="hot-background">HOT</span>
        </p>
        <div class="projectlist">
          <div @click="gotoDetails(project.type)"
              style="margin: 1rem;
                    box-shadow:0rem 0.83rem 2.5rem 0rem rgba(83,83,92,0.1);"
              v-for="(project, index) in projectList"
              :key="index+'A'">
            <div style="width: 100%;
                        line-height: 0px;
                        overflow: hidden;
                        position:relative"
                  v-for="poster in project.posters"
                  :key="poster.id"
                  v-if="poster.type === 'image'"
                >
              <div v-show="project.isEnd" style="position:absolute;width:100%;height:100%;z-index:1000;
              background-color: rgba(0, 2, 6, 0.58);
              color: rgb(255, 255, 255);
              line-height: 40rem;
              text-align: center;
              font-size: 4rem;">已结束</div>
              <img :src="poster.url"
                  style="width:100%;">
              <div style="padding: 1rem 1.17rem;">
                <p class="projectlist-title">{{project.title}}</p>
                <p class="projectlist-subtitle">{{project.intro}}</p>
                <div style="margin-top: 1.5rem;">
                  <p class="display-flex-row"
                  style="justify-content: space-between;
                  font-size:1.33rem;
                  font-family:SFProText-Heavy;
                  font-weight:800;
                  line-height:1.58rem;">
                  <span>
                    ￥ {{project.target}}
                  </span>
                  <span v-if="testYouZanList[project.type].flag">{{testYouZanList[project.type].percent}}%</span>
                  <span v-else>0%</span>
                </p>
                <Progress :percent="testYouZanList[project.type].flag ? getPercent(Number(testYouZanList[project.type].percent)): 0 "
                          :stroke-width="6" hide-info
                          status="active"/>
                <p class="display-flex-row"
                  style="justify-content: space-between;
                        font-size:1rem;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(23,27,67,1);
                        line-height:1.42rem;
                        margin-bottom: 1.08rem;
                        opacity: 0.8;">
                  <!-- <span>剩余{{project.version}}天</span> -->
                  <span v-if="testYouZanList[project.type].flag">剩余{{testYouZanList[project.type].remainDays}}天</span>
                  <span v-else>剩余{{project.version}}天</span>
                  <!-- <span>0人参与</span> -->
                  <span v-if="testYouZanList[project.type].flag">{{testYouZanList[project.type].participator}}人参与</span>
                  <span v-else>0人参与</span>
                </p>
              </div>
              </div>
              </div>
            </div>
            </div>
          </div>
          <!-- <div @click="gotoWang" style="margin: 1rem;
                    box-shadow:0rem 0.83rem 2.5rem 0rem rgba(83,83,92,0.1);">
            <div style="width: 100%;
                        line-height: 0px;
                        overflow: hidden;
                        background:rgba(88,88,88,1);">
              <img src="http://starmaker.joyin.online/wangmengyun/wang-01.png" alt=""
                  style="width:100%;">
            </div>
            <div style="padding: 1rem 1.17rem;">
              <p class="projectlist-title">福布斯女孩汪梦云首张环球旅行专辑项目</p>
              <p class="projectlist-subtitle">
                走遍了大半个地球的福布斯精英汪梦云，用写真专辑和面对面的神秘event回馈粉丝，满足你的一切好奇。
              </p>
              <div style="margin-top: 1.5rem;">
                <p class="display-flex-row"
                  style="justify-content: space-between;
                  font-size:1.33rem;
                  font-family:SFProText-Heavy;
                  font-weight:800;
                  line-height:1.58rem;">
                  <span>
                    ￥ *****
                  </span>
                  <span>
                    0%
                  </span>
                </p>
                <Progress :percent="0"
                          :stroke-width="6" hide-info
                          status="active"/>
                <p class="display-flex-row"
                  style="justify-content: space-between;
                        font-size:1rem;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(23,27,67,1);
                        line-height:1.42rem;
                        margin-bottom: 1.08rem;
                        opacity: 0.8;">
                  <span>暂未开启</span>
                  <span>0人参与</span>
                </p>
              </div>
            </div>
          </div> -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'home',
  data() {
    return {
      pageData: {},
      Carousel: 0,
      testYouZanList:{
        nawukere: {
          flag: false,
        },
        twinkle: {
          flag: false,
        },
        wangmengyun: {
          flag: false,
        },
        zhuyuntianzhuyunyi: {
          flag: false
        }
      },
    };
  },
  computed: {
    bannerList() {
      return this.$store.state.bannerList;
    },
    projectList() {
      return this.$store.state.project;
    },
  },
  methods: {
    getPercent(persent) {
      if(persent > 100) {
        return 100
      }else {
        return persent
      }
    },
    async getPageData() {
      this.pageData = await this.$API.projectList({
        pageSize: 10,
        pageCount: 1,
        oToken: 'asd123',
      });
    },
    gotoDetails(type) {
      this.$router.push({
        path: `Details/${type}`,
      });
    },
    gotoWang() {
      alert('活动暂未开启');
    },
    async testYouZan(project) {
      // console.log(project);
      const res = await axios({
        method: 'get',
        url: project.url,
        params: project.params,
      })
      if (res.data.code > 200) {
        return {
          percent: '0',
          current: 0,
          participator: '0',
          remainDays: 0,
        };
      }
      // console.log(res);
      return res.data.message;
    },
  },
  created() {
    this.getPageData();
    for (const type in this.projectList) {
      if (this.projectList.hasOwnProperty(type)) {
        const project = this.projectList[type];
        const youzan = {
          url: project.youzanUrl,
          type: project.type,
          params:{
            target: project.target,
            startAt: project.dateRange.startOn,
            endAt: project.dateRange.endOn,
          }
        };
        this.testYouZan(youzan).then((youzanData) => {
          this.testYouZanList[project.type] = youzanData;
          this.testYouZanList[project.type].flag = true;
        });
      }
    }
  },
};
</script>
<style lang="stylus" scoped>
.carousel-imgBox
  width: 100%;
  background:rgba(255,255,255,1);
.carousel-img
  // width:65.75rem;
  background:rgba(216,216,216,1);
.projectlist
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
.projectlist-title
  font-size:1.67rem;
  font-weight:600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height:2.33rem;
.projectlist-subtitle
  overflow: hidden;
  height: 3.67rem;
  font-size:1.17rem;
  font-weight:500;
  line-height:1.67rem;
  opacity: 0.8;
.projectlist > div
  width: 100%;
.hot-background
  display: block;
  padding 0.2rem 0.3rem;
  margin-left: 0.75rem;
  background:linear-gradient(90deg,rgba(155,11,255,1) 0%,rgba(255,13,223,1) 100%);
  font-size:12px;
  font-family:SFProText-Heavy;
  font-weight:800;
  color:rgba(255,255,255,1);
  line-height:14px;
@media screen and (min-width: 1020px)
  .carousel-imgBox
    height:43.83rem;
  .projectlist
    flex-direction: row;
    justify-content: space-between;
  .projectlist > div
    width: 48%;
    margin: 1rem 1rem 1rem 0rem !important;

</style>
