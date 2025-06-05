import { toValue, watch } from 'vue';
import autofit, { elRectification } from 'autofit.js';
import type { Options } from './types';
import { autoWidthFix } from './autoWidthFix';
import { getFitMode } from './getFitMode';

// 定义返回类型接口

export function useAutoFit(options: Options = {}): {
  autofit: typeof autofit;
  elRectification: typeof elRectification;
} {
  watch(
    () => toValue(options.fitMode),
    val => {
      val = val ?? getFitMode();
      // check fitMode
      if (!['widthFix', 'fill'].includes(val)) val = 'fill';
      if (val === 'widthFix') {
        autofit.off(options.el);
        autoWidthFix(options);
      } else if (val === 'fill') {
        autoWidthFix.off();
        autofit.init(
          {
            ...options,
            delay: 100
          },
          false
        );
      }
    },
    { immediate: true }
  );
  return { autofit, elRectification };
}
