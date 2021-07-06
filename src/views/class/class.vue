<template>
  <div class="classse">
    <nav-bar class="class-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="cate-content">
      <div class="tab-menu">
        <tab-menu :classList="categoryList" @cateItem="cateItem" />
      </div>
      <div class="class-main">
        <better-scroll
          ref="scroll"
          class="class-scroll"
          :pullUpLoad="true"
          :probeType="3"
        >
          <class-sub :subList="showSubcategory" />
          <tab-control
            :titles="['综合', '新品', '销量']"
            @goodsList="getTitle"
          ></tab-control>

          <goods-list
            :goods="showCategoryDetail"
            @imageLoad="imageLoad"
          ></goods-list>
          <li class="faker">1hh</li>
        </better-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import TabMenu from "./childComps/TabMenu";
import TabControl from "components/content/tabControl/TabControl.vue";
import ClassSub from "./childComps/ClassSub";
import GoodsList from "components/content/Goods/GoodsList.vue";
import BetterScroll from "components/common/betterscroll/BetterScroll.vue";
import { getClass, getSubcategory, getCategoryDetail } from "network/class.js";
export default {
  name: "class",
  data() {
    return {
      categoryList: [],
      categoryData: [],
      currentIndex: -1,
      tabConIndex: 0,
    };
  },
  components: {
    NavBar,
    TabMenu,
    ClassSub,
    TabControl,
    GoodsList,
    BetterScroll,
  },
  created() {
    this.getClasses();
  },
  computed: {
    showSubcategory() {
      // console.log(this.currentIndex);
      // console.log(this.categoryData[this.currentIndex].subcategories);
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].subcategories;
    },
    showCategoryDetail() {
      switch (this.tabConIndex) {
        case 0:
          return this.categoryData[this.currentIndex].categoryDetail.pop;
        case 1:
          return this.categoryData[this.currentIndex].categoryDetail.new;
        case 2:
          return this.categoryData[this.currentIndex].categoryDetail.sell;
      }
    },
  },
  methods: {
    getClasses() {
      getClass().then((res) => {
        console.log(res);
        this.categoryList = res.data.category.list;
        for (let i = 0; i < this.categoryList.length; i++) {
          this.categoryData[i] = {
            subcategories: [],
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }

        this.getSubcategories(0);
      });
    },
    cateItem(index) {
      // this.currentIndex = index;
      this.getSubcategories(index);
      // console.log(index);
    },
    getSubcategories(index) {
      this.currentIndex = index;
      getSubcategory(this.categoryList[index].maitKey).then((res) => {
        this.categoryData[index].subcategories = res.data.list;
        this.categoryData = { ...this.categoryData };
        console.log(this.categoryData[index].subcategories);
        this._getCategoryDetail("pop");
        this._getCategoryDetail("new");
        this._getCategoryDetail("sell");
      });
    },
    _getCategoryDetail(type) {
      const miniWallkey = this.categoryList[this.currentIndex].miniWallkey;
      getCategoryDetail(miniWallkey, type).then((res) => {
        // console.log(res);
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = { ...this.categoryData };
        // console.log(this.categoryData[this.currentIndex].categoryDetail[type]);
      });
    },
    getTitle(item, index) {
      this.tabConIndex = index;
      this.$refs.scroll.refresh();
    },
    imageLoad() {
      this.$refs.scroll.scroll.refresh();
      // this.$refs.scroll.scrollToto(0, -10000);
      // this.$refs.scroll.scroll.scrollerHeight = 10000;
      console.log(this.$refs.scroll.scroll);
    },
  },
};
</script>

<style>
.classse {
  height: 100vh;
}
.class-nav {
  background-color: salmon;
  color: aliceblue;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
}
/* .tab-menu {
  margin-top: 44px;
} */

.cate-content {
  width: 100vw;
  height: 100vh;
  margin-top: 30px;
  display: flex;
  overflow: hidden;
  margin-bottom: 50px;
}
.tab-menu {
  height: calc(100% - 72px);
  overflow: hidden;
  overflow-y: auto;
}
.class-main {
  flex: 1;
  width: calc(100% - 80px);
}
.class-scroll {
  height: calc(100% - 75px);
  overflow: hidden;
}
.faker {
  color: white;
  font-size: 2px;
}
</style>