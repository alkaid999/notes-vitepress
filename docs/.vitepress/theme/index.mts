import DefaultTheme from "vitepress/theme";
// 使用插槽 backTop 组件
import { h } from 'vue'
import backTop from "./components/backTop.vue"
// 导入自定义样式
import './style/index.css';
// 导入图片放大插件
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';

export default {
  extends: DefaultTheme,
  // 返回顶部插件设置
  Layout() { 
    return h(DefaultTheme.Layout, null, {
      'doc-footer-before': () => h(backTop), // 使用doc-footer-before插槽
    })
  },
  // 图片放大插件
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};
