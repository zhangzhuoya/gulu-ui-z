import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import SelectDemo from "./components/SelectDemo.vue";

import Markdown from "./components/Markdown.vue"
import TabsDemo from "./components/TabDemo.vue";
import Intro from "./components/Intro.vue";
import Install from "./components/Install.vue";

// import Install from "./components/Install.vue";
// import { h } from "vue";
// const md =(path)=>h(Markdown,{path:`../markdown/${path}.md`})
const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/Doc",
      component: Doc,
      children: [
        { path: "", redirect:"/doc/intro" },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
        { path: "intro", component:Intro},
        { path: "install", component:Install},
        { path: "select", component:SelectDemo},



        // { path: "install", component:h(Markdown,{path:"../markdown/install.md",key:"2"})},

        // { path: "install", component: Install },
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});