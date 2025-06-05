import type { AutoWidthFix, WidthFixOptions } from './types';

export const autoWidthFix: AutoWidthFix = function ({
  dw = 1920,
  dh = 1080,
  el = 'body',
  delay = 100,
  verticalAlign = 'center'
}: WidthFixOptions = {}) {
  calc();
  autoWidthFix.resizeListener = () => {
    clearTimeout(autoWidthFix.timer);
    autoWidthFix.timer = window.setTimeout(calc, delay);
  };
  window.addEventListener('resize', autoWidthFix.resizeListener);

  function calc() {
    const dom = (autoWidthFix.dom = document.querySelector<HTMLElement>(el));
    if (dom) {
      // ❌ clientWidth 不包含滚动条的宽度，导致计算结果不准确
      // const viewportWidth = document.documentElement.clientWidth;
      // const viewportHeight = document.documentElement.clientHeight;
      // ✅ 使用 window 的宽高避免滚动条影响到计算
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      // 缩放比例
      const scale = viewportWidth / dw;
      // 缩放后的高度
      const scaledHeight = dh * scale;
      // 如果缩放后高度超过视口，则贴顶显示，否则居中
      const topValue =
        scaledHeight > viewportHeight ? 0 : (viewportHeight - scaledHeight) / 2;

      // absolute 避免出现没有必要出现的滚动条
      dom.style.position = 'absolute';
      dom.style.overflowX = 'hidden';
      dom.style.height = `${dh}px`;
      dom.style.width = `${dw}px`;
      dom.style.transform = `translateZ(0) scale(${scale})`;
      dom.style.transformOrigin = '0 0';
      if (verticalAlign === 'center') {
        dom.style.top = `${topValue}px`;
      }
    }
  }
};

autoWidthFix.off = function () {
  if (autoWidthFix.dom) autoWidthFix.dom.style.cssText = '';
  if (autoWidthFix.resizeListener)
    window.removeEventListener('resize', autoWidthFix.resizeListener);
};
