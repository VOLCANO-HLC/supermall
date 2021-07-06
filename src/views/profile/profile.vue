<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <div slot="center">火山GO~</div>
    </nav-bar>
    <div class="pro-main">
      <user-set />
    </div>

    <user-message />
    <div class="pro-menu">
      <user-menu-first />
      <user-menu-second />
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import UserSet from "./childComps/userSet";
import UserMessage from "./childComps/UserMessage";
import UserMenuFirst from "./childComps/UserMenuFirst";
import UserMenuSecond from "./childComps/UserMenuSecond";
export default {
  name: "profile",
  data() {
    return {};
  },
  components: {
    NavBar,
    UserSet,
    UserMessage,
    UserMenuFirst,
    UserMenuSecond,
  },
  methods: {},
};
</script>

<style>
.profile {
  height: calc(100vh - 85px);
}
.profile-nav {
  background-color: salmon;
  color: aliceblue;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
}
.pro-main {
  margin-top: 40px;
  height: 150px;
  background-color: salmon;
}
.pro-menu {
  height: calc(100% - 250px);
  overflow: hidden;
  overflow-y: auto;
}
</style>