/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */

const randomString = () =>
  Math.random().toString(36).substring(7).split('').join('.')

// /* #__PURE__ */ 是 terser 的注释，告诉 terser 后面代码是多余的，可以删掉

// 下面是其他注释含义
// /*@__INLINE__*/ - 强制将函数内联到某处。
// /*@__NOINLINE__*/ -确保被调用的函数没有内联到调用站点中。
// /*@__PURE__*/ - 将函数调用标记为纯函数。这意味着，它可以安全地被丢弃。

const ActionTypes = {
  INIT: `@@redux/INIT${/* #__PURE__ */ randomString()}`,
  REPLACE: `@@redux/REPLACE${/* #__PURE__ */ randomString()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
}

export default ActionTypes
