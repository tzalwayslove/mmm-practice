//返回顶部


window.onscroll = function () {
  //每次移动滚动条的时候都给leader赋值，模拟leader获取距离顶部的距离
  leader = $(document).scrollTop();
}
//3.缓动跳转到页面最顶端（利用我们的缓动动画）
var timer = null;
var target = 0; //目标位置
var leader = 0; //显示区域自身的位置
$('footer .list a:nth-child(3)').on('click',function (e) {
    e.preventDefault();
    //技术点：window.scrollTo(0,0);
    //要用定时器，先清定时器
    clearInterval(timer);
    timer = setInterval(function () {
      //获取步长
      var step = (target-leader)/10;
      //二次处理步长
      step = step>0?Math.ceil(step):Math.floor(step);
      leader = leader +step;
      //显示区域移动
      window.scrollTo(0,leader);
      //清除定时器
      if(leader === 0){
        clearInterval(timer);
      }
    },25);
  }
)