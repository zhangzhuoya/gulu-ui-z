import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Frank from "./components/Frank.vue"
import Frank2 from "./components/Frank2.vue"
import Home from "./components/Home.vue"
import Doc from "./components/Doc.vue"
const history = createWebHashHistory()
const router =  createRouter({
    history: history,
    routes:[
        // {path:"/",component:Frank},
        {path:"/xxx",component:Frank2},
        {path:"/",component:Home},
        {path:"/Doc",component:Doc}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
