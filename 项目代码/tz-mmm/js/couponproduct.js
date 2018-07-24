var id = location.search.slice(1).split('=')[1];
var arr = [];
var index;
$.ajax({
  url:'http://mmb.ittun.com/api/getcouponproduct',
  data:{
    couponid:id
  },
  dataType:'json',
  type:'get',
  success:function (info) {
    console.log(info);
    var htmlStr = template('mm-con',info);
    $('.se').append(htmlStr);
    var imgs = info.result;
    $(imgs).each(function (i,v) {
      var a = v.couponProductImg.split(" ")[1];
      a = a.replace('src="',"").replace('"',"");
      arr.push(a);
      //此时数组里已经有图片的地址了
    })
    $('.mm-haha').click(function () {
      //为什么打印57次
      index = $(this).data('id');
      console.log(index);
      $('.jump').css('display','block');
      $('.jump img').attr('src',arr[index])
    })
  }
})

$('.close').on('click',function(){
  $('.jump').css('display','none');
})


$('.left').on('click',function () {
  if(index<=0){
    index=0
  }
    index--;
  $('.jump img').attr('src',arr[index])
})
$('.right').on('click',function () {
  if(index>=arr.length-1){
    index=arr.length-1
  }
  index++;
  $('.jump img').attr('src',arr[index])
})


//
// $('.btn').click(setInterval(function(){
//   $('.right')[0].click();
// }),500)

//
// $('.btn').on('click',function(){
//   setInterval(function(){
//     $('.right')[0].click()
//   },500)
// })



$('.btn').on('click',function(){
  setInterval(function(){
    if(index>=arr.length-1){
      index=arr.length-1
    }
    index++;
    $('.jump img').attr('src',arr[index])
  },500)
})