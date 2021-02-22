<template>
  <div class="container">
    <div class="topnav-banner">
      <div class="top-bar">
        <div class="logo">
          <svg class="icon logo-xin" aria-hidden="true">
            <use xlink:href="#icon-logo-xin"></use>
          </svg>
        </div>
        <ul>
          <li class="active">
            <router-link to="/doc">首页</router-link>
          </li>
          <li>
            <router-link to="/doc">文档</router-link>
          </li>
          <li>
            <router-link to="/doc">码云</router-link>
          </li>
          <li>
            <router-link to="/doc">UI</router-link>
          </li>
        </ul>
      </div>

      <div class="banner">
        <h1>轱辘UI</h1>
        <h2>一个厉害的UI组件库</h2>
        <p class="actions">
          <a href="">Github</a>
          <router-link to="/doc">开始</router-link>
        </p>
        <p></p>
      </div>
    </div>
    <main class="textd">
      <!-- <img src="./p.png" alt="" /> -->
      <div class="vue3">
        <svg class="icon icon-vue" aria-hidden="true">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <div class="text-container">
          <h4>这是基于Vue3</h4>
          <p>这是基于Vue3编写的UI组件库</p>
        </div>
      </div>
      <div class="js3">
        <svg class="icon icon-js" aria-hidden="true">
          <use xlink:href="#icon-js"></use>
        </svg>
        <div class="text-container">
          <h4>这是基于JS</h4>
          <p>这是基于JS编写的UI组件库</p>
        </div>
      </div>
      <div class="ts3">
        <svg class="icon icon-ts" aria-hidden="true">
          <use xlink:href="#icon-typescript"></use>
        </svg>
        <div class="text-container">
          <h4>这是基于TS</h4>
          <p>这是基于TS编写的UI组件库</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import TopNav from "../components/Topnav.vue";
import Button from "../lib/Button.vue";
// import imgp from "@/assets/p.png"
export default {
  components: {
    TopNav,
  },
};
</script>

<style lang="scss" scoped>
$border-radius: 4px;
$text-color: #ced0f4;

.container {
  // background: #ecf4fc;
  height: 100%;
  .topnav-banner {
    // background: linear-gradient(140deg, rgba(227, 255, 253, 1) 0%,
    //         rgba(183, 233, 230, 1) 100%,
    //         rgba(0, 212, 255, 1) 100%);
    background: #1f39d8;
    clip-path: ellipse(81% 60% at 50% 40%);
    height: 560px;

    .top-bar {
      height: 60px;
      display: flex;
      top: 10px;
      color: #ced0f4;
      align-items: center;
      // width: 600px;
      justify-content: center;
      margin: 0 auto;
      // border: 1px solid red;
      .logo {
        // position: relative;
        margin-left: 20px;

        .icon {
          height: 20px;
          width: 20px;
        }
      }
      ul {
        display: flex;
        margin-block-start: 0em;
        margin-block-end: 0em;
        li {
          list-style: none;
          padding: 15px 10px;
          margin: 0 20px;
          box-sizing: border-box;
          &:hover {
            a {
              color: #fff !important;
            }
          }
          &.active {
            a {
              color: #fff !important;
            }
            border-bottom: 2px solid #2ceb85;
          }
        }
      }
      a {
        font-size: 16px;
        text-decoration: none;
        color: #ced0f4;
      }
    }

    .banner {
      padding: 100px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      // position: absolute;
      // left: 50px;
      // top: 200px;
      color: #fff;
      // text-align: left;
      // font-size: 0;
      // line-height: 0;
      // width: 600px;

      h1 {
        color: #fff;
        margin-bottom: 10px;
      }

      h2 {
        margin-block-start: 0px;
        color: #fff;
      }

      h4 {
        margin-block-start: 0em;
        margin-block-end: 0em;
      }

      > .actions {
        margin-block-start: 0px;

        padding: 0px 0;

        a {
          color: white;
          margin: 0 8px;
          background: linear-gradient(119deg, #00b2bd 11%, #2ceb85 55%);
          display: inline-block;
          $h: 28px;
          height: $h;
          line-height: $h;
          border-radius: $h/2;
          padding: 0 8px;
          text-decoration: none;
          border-radius: $border-radius;

          &:hover {
            text-decoration: underline;
          }

          &:active {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    .textd {
      display: block;
    }
  }

  .textd {
    margin-top: 100px;
    display: flex;
    justify-content: center;

    p {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }

    .icon {
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
      margin-left: 20px;
    }

    .vue3 {
      display: flex;

      .text-container {
        margin-top: 4px;

        h4 {
          margin-block-start: 0em;
          margin-block-end: 0em;
        }
      }

      .icon-vue {
        width: 50px;
        height: 50px;
        margin-right: 5px;
      }
    }

    .js3 {
      display: flex;

      .text-container {
        margin-top: 4px;

        h4 {
          margin-block-start: 0em;
          margin-block-end: 0em;
        }
      }

      .icon-js {
        width: 50px;
        height: 50px;
        margin-right: 5px;
      }
    }

    .ts3 {
      display: flex;

      .text-container {
        margin-top: 4px;

        h4 {
          margin-block-start: 0em;
          margin-block-end: 0em;
        }
      }

      .icon-ts {
        width: 50px;
        height: 50px;
        margin-right: 5px;
      }
    }
  }
}
</style>
