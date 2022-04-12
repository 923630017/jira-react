1. 状态提示 将组件子组件需要的状态 提升到父组件定义 一般用于层级少 用的组件是同一父组件的状态；
2. react 定义环境变量 process.env 必须以REACT_APP开头
3.qs 将对象参数序列话 例如 { name: '张三丰', age: 12 } => name='张三丰'&age=12
4.react 报错 React Uncaught ReferenceError: process is not defined；npm react-error-overlay@6.0.9版本 
将此添加到您的 package.json： 
    "resolutions": {
        "//": "See https://github.com/facebook/create-react-app/issues/11773",
        "react-error-overlay": "6.0.9"
    }
同时删除yarn.lockor或者package-lock.json，然后再次安装您的依赖项。

ts
1. Record<keyType,valueType> Record定义对象
   ketType: 对象键的类型
   valueType: value值得类型
2. 函数泛型 一般用于函数返回值相关 不一定是返回T类型
   返回T类型
   function g<T> = (a:T,b:T):T {
      return a + b
   }
   箭头函数函数 返回类型不定
   const a = <T>(a:T,b:T) => {
     return a + b  
   }