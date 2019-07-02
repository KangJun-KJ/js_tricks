function throttle(func, wait, options) {
  // options中的leading:false 表示禁用第一次执行
  // trailing:false 表示晋中停止触发的回调
  // 定时器  作用域 参数 结果
  var timeout, context, args, result;
  // 上一个时间
  var previous = 0;
  if (!options) options = {};

  var later = function () {
    // 
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function () {
    // 记录当前时间
    var now = new Date().getTime();
    // 如果是第一次进来，并且leading等于false,设置previous等于now,可以阻止事件立即执行
    if (!previous && options.leading === false) previous = now;
    // 触发func 剩余的时间，定时器的执行时间不一定准确
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    //  如果没有剩余的时间了或者你改了系统时间
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
      // 如果timeout不存在，后面后面的事件执行使用setTimeout,traniling=false表示事件停止调用后，不执行setTimeout的最后一次
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };

  throttled.cancel = function () {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  }

  return throttled;
}