
// 将请求参数去除空的情况
export const clearParamObject = (params: object) => {
  let result = { ...params };
  Object.keys(result).forEach((key) => {
     // @ts-ignore
     if(!result[key] && result[key] !== 0) {
        // @ts-ignore
        delete result[key]
     }
  })
  return result
};
