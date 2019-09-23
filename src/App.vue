<template>
  <div id="app" class="text-black">
    <Layout>
        <Header>
          <InHeader></InHeader>
        </Header>
        <Content>
          <div style="margin-top: 1.67rem;"
              class="in-test">
            <router-view/>
          </div>
        </Content>
         <Footer>
           <!-- <div class="footer-nav in-test">
            <div class="footer-nav-select">
              <div class="footer-textBox">
                <p class="footer-title">关于</p>
                <p class="footer-content">关于项目</p>
                <p class="footer-content">关于INJOY</p>
              </div>
              <div class="footer-textBox">
                <p class="footer-title">关于</p>
                <p class="footer-content">关于项目</p>
                <p class="footer-content">关于INJOY</p>
              </div>
              <div class="footer-textBox">
                <p class="footer-title">关于</p>
                <p class="footer-content">关于项目</p>
                <p class="footer-content">关于INJOY</p>
              </div>
            </div>
            <div class="display-flex-row">
              <div class="display-flex-column
                          display-flex-center"
                  style="margin-right:2rem;">
                <p style="width:5.33rem;
                          height:5.33rem;
                          background:rgba(255,255,255,1);
                          margin-bottom:1rem;"></p>
                <p class="footer-content">客服微信</p>
              </div>
              <div class="display-flex-column
                          display-flex-center">
                <p style="width:5.33rem;
                          height:5.33rem;
                          background:rgba(255,255,255,1);
                          margin-bottom:1rem;"></p>
                <p class="footer-content">客服微信</p>
              </div>
            </div>
           </div> -->
           <p style="text-align: center;
                    font-size:1rem;
                    margin-bottom:6.9rem;"
              class="footer-content">Copyright &#169; 2014-2018 卓莹上海网络科技有限公司 版权所有 | 沪ICP备12349586号 - 2</p>
         </Footer>
    </Layout>
    <alert-box></alert-box>
  </div>
</template>
<script>
import InHeader from '@/components/InHeader.vue';
import AlertBox from '@/components/Alert/AlertBox.vue';

export default {
  components: {
    InHeader,
    AlertBox,
  },
  data () {
    return {
      test: {},
    }
  },
  created () {
  }
};
</script>

<style lang="stylus">
@import 'assets/styles/main'
@import 'assets/styles/layout'
@import 'assets/styles/helpers'
@import 'assets/styles/icon'
@import 'assets/styles/color'
</style>

<style lang="stylus" scoped>
.ivu-layout-header
  padding 0px;
  background #ffffff;
.ivu-layout
  background #ffffff;
.ivu-layout-footer
  padding: 2rem 2.2rem;
.footer-textBox
  margin-bottom 2rem;
.footer-title
  font-size:1.6rem;
  font-family:PingFangSC-Semibold;
  font-weight:600;
  color:rgba(32,35,45,0.6);
  line-height:3.5rem;
.footer-content
  font-size:1.2rem;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(42,45,55,0.6);
  line-height:2.08rem;
.footer-nav
  display flex;
  flex-direction column;
  margin-bottom:5.5rem;
  justify-content: space-between;

.footer-nav-select
  display flex;
  flex-direction column;
  margin-bottom 2rem;

@media screen and (min-width: 1020px)
  .footer-nav
    flex-direction row;
    align-items: center;
  .footer-nav-select
    flex-direction row;
    margin-bottom 0rem;
  .footer-title
    margin-bottom 0rem;
  .footer-textBox
    margin-right 8rem;
    margin-bottom 0rem;
</style>
