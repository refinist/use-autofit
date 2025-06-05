import type { FitMode } from './types';
const keyName = { value: 'fit-mode' };

// 优先级：传入的 fitMode > url 参数 > cookie > localStorage
export function getFitMode(): FitMode {
  const key = keyName.value;

  const urlParams = new URLSearchParams(window.location.search);
  const queryValue = urlParams.get(key);
  if (queryValue) return queryValue as FitMode;

  const cookieValue = document.cookie
    .split('; ')
    .find(_ => _.startsWith(`${key}=`))
    ?.split('=')[1];
  if (cookieValue) return cookieValue as FitMode;

  const localStorageValue = localStorage.getItem(key);
  if (localStorageValue) return localStorageValue as FitMode;

  return 'fill';
}

export function setKeyName(name: string) {
  keyName.value = name;
}
