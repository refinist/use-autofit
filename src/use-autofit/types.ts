import type { AutofitOption } from 'autofit.js';
import type { MaybeRefOrGetter } from 'vue';
export type FitMode = 'widthFix' | 'fill';
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
};
export interface AutoWidthFix {
  (options?: WidthFixOptions): void;
  resizeListener?: EventListenerOrEventListenerObject;
  timer?: number;
  dom?: HTMLElement | null;
  off: () => void;
}
