<template>
  <div class="home">
    <HeaderVue></HeaderVue>
    <el-container class="content">
      <MenuVue></MenuVue>
      <el-container>
        <el-main>
          <BreadcrumbVue></BreadcrumbVue>
          <div id="cont">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer><FooterVue></FooterVue></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import BreadcrumbVue from "./common/Breadcrumb .vue";
import HeaderVue from "./common/Header.vue";
import MenuVue from "./common/Menu.vue";
import FooterVue from "./common/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    BreadcrumbVue,
    HeaderVue,
    MenuVue,
    FooterVue,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  .content {
    position:  absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
    .cont {
      margin: 20px 0;
    }
  }
}
</style>
