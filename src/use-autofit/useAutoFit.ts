import { toValue, watch } from 'vue';
import autofit, { elRectification } from 'autofit.js';
import type { Options } from './types';
import { autoWidthFix } from './autoWidthFix';
import { getFitMode } from './getFitMode';

export function useAutoFit(options: Options = {}): {
  autofit: typeof autofit;
  elRectification: typeof elRectification;
} {
  const { el, detectFitMode = true } = options;
  watch(
    () => toValue(options.fitMode),
    val => {
      val = val ?? (detectFitMode ? getFitMode() : 'fill');
      // check fitMode
      if (!['widthFix', 'fill', 'none'].includes(val)) val = 'fill';
      if (val === 'widthFix') {
        autofit.off(el);
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
      } else {
        autoWidthFix.off();
        autofit.off(el);
      }
    },
    { immediate: true }
  );
  return { autofit, elRectification };
}
