
function lazyload(self){

    for(let i=self.num; i<self.$refs.img.length; i++) {
        // 用可视区域高度减去元素顶部距离可视区域顶部的高度
        let distance = window.innerHeight - self.$refs.img[i].getBoundingClientRect().top
        // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
        if(distance >= 0 ){
            // 给元素写入真实的src，展示图片
            self.$refs.img[i].src = self.$refs.img[i].getAttribute('data-src')
            // 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出
            self.num = i + 1;
        }
    }
}


function throttle(self) {
  // last为上一次触发回调的时间, timer是定时器
  let last = 0, timer = null, delay = 100;
  // 将throttle处理结果当作函数返回
  
  return function () { 
    // 记录本次触发回调的时间
    let now = +new Date()
    
    // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
    if (now - last < delay) {
    // 如果时间间隔小于我们设定的时间间隔阈值，则为本次触发操作设立一个新的定时器
       clearTimeout(timer)
       timer = setTimeout(function () {
          last = now
          // fn.apply(context, args)
          lazyload(self);
        }, delay)
    } else {
        // 如果时间间隔超出了我们设定的时间间隔阈值，那就不等了，无论如何要反馈给用户一次响应
        last = now
        lazyload(self);
    }
  }
}

export default throttle;
