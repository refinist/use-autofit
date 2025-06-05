import type { AutofitOption } from 'autofit.js';
import type { MaybeRefOrGetter } from 'vue';
export type FitMode = 'widthFix' | 'fill' | 'none';
export type { AutofitOption };
export type WidthFixOptions = Pick<
  AutofitOption,
  'dw' | 'dh' | 'el' | 'delay'
> & {
  verticalAlign?: 'top' | 'center';
};
export type Options = AutofitOption & {
  fitMode?: MaybeRefOrGetter<FitMode>;
  verticalAlign?: WidthFixOptions['verticalAlign'];
  /**
   * 是否自动检测 fitMode，在生产环境中也许你不想要自动检测 fitMode
   *
   * 一般来说，你可能需要这样子配置：
   *
   * ```ts
   * useAutoFit({
   *   // other options...
   *   detectFitMode: import.meta.env.DEV
   * })
   * ```
   *
   * Default: true
   */
  detectFitMode?: boolean;
};
export interface AutoWidthFix {
  (options?: WidthFixOptions): void;
  resizeListener?: EventListenerOrEventListenerObject;
  timer?: number;
  dom?: HTMLElement | null;
  off: () => void;
}
