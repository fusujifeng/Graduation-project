import Vue from 'vue'
import App from './App.vue'
//引入elementUI组件库
//引入elementUI全部样式
import 'element-ui/lib/theme-chalk/index.css';

//关闭vue的生产提示
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { Button,Row,DatePicker} from 'element-ui';
// import button from "element-ui/packages/button";

Vue.use(ElementUI)
Vue.component('atguigu-button', Button);
Vue.component('atguigu-row', Row);
Vue.component('atguigu-date-picker', DatePicker);

new Vue({
  render: h => h(App),
}).$mount('#app')
