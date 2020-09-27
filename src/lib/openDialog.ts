import { createApp, h } from 'vue';
import Dialog from "./Dialog.vue"
export const openDialog = (options) => {
    const { text, content,cancel,ok } = options
    const div = document.createElement('div');
    document.body.appendChild(div)
    const close = ()=>{
        app.unmount(div)
        div.remove()
    }
    const app = createApp({

        render() {
            return h(Dialog,{visable:true,
                'onUpdate:visible': (newVisible) => {
                    if (newVisible === false) {
                       close()
                    }

                }//newVisible最新的值
                ,cancel,ok ,
            },{ text, content })//参数1 挂载的组件名,参数2的所有属性都会被单做Dialog的属性
        }
    })
    app.mount(div)
}