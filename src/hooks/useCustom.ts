import { useEffect, useState } from "react";

// 一开始请求HOOKS
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

/**
 *  这里是对参数进行防抖 基本原理 设置新值 根据useEffect判断传入的值
 * @param {*} value 防抖的参数
 * @param {*} delay 防抖时间
 */
export const useDebounce = <T>(value: T, delay?: number) => {
  const [result, setResult] = useState(value);
  useEffect(() => {
    let timeout = setTimeout(() => {
      setResult(value);
    }, delay);
    // 清除缓存 在delay清除
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return result;
};
// 自我测试函数泛型
export const useArrary = <T>(value:T[]) => {
  const [state, setState] = useState(value);
  return {
    get: state,
    add: (item:T) => setState([...state, item]),
    deleteItem: (index:number) => {
      const reslut = [...state];
      reslut.splice(index, 1);
      setState(reslut);
    },
    clear: () => setState([])
  }
}