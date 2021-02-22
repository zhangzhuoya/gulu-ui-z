<template>
  <div>
    <top-nav></top-nav>
    <div class="content">
      <aside v-if="menuVisible">
        <h2 style="margin-left: 22px; margin-bottom: 9px">文档</h2>
        <ul>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
        </ul>
        <h2 style="margin-left: 22px; margin-bottom: 9px">组件列表</h2>
        <ul>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
          <!-- <li>
            <router-link to="/doc/select">Select组件</router-link>
          </li> -->
        </ul>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/Topnav.vue";
import { Ref, inject } from "vue";
export default {
  components: {
    TopNav,
  },
  setup() {
    const menuVisible = inject<Ref<Boolean>>("menuVisible"); //get
    console.log(menuVisible.value);
    return {
      menuVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    position: fixed;

    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;
  margin-top: 48px;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 16px;
    margin-left: 200px;
  }
}

aside {
  background: white;
  width: 180px;
  padding: 20px 0px 16px;
  height: 100%;
  border-right: 1px solid #e5e5e5;
  position: fixed;
  box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
    z-index: 1;
    transition: .4s cubic-bezier(.68,.18,.53,.18) .1s;

  ul {
    padding-inline-start: 0px;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-right: -1px;
    padding-left: 15px;

    li {
      list-style: none;
      margin-bottom: 10px;
      // &:hover{
      //   background: rgba($color: , $alpha: 1.0);
      // }

      a {
        text-decoration: none;
        color: black;
        display: block;
        padding: 4px 16px;
        // 设置a标签的宽高需要变成块盒
      }

      .router-link-active {
        color: #1f39d8;
        border-right: 3px solid #1f39d8;
        // transition: all .2s linear;
      }
    }
  }

  > h4 {
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-left: 20px;
    margin-bottom: 10px;
  }

  aside {
    padding: 4px 0;
  }
}

main {
  overflow: auto;
}
</style>
