//菜单
$.ajax({
  url:'http://127.0.0.1:9090/api/getindexmenu',
  dataType:'json',
  type:'get',
  success:function (info) {
    // console.log(info);
    var htmlStr =template('mm-menu',info)
    $('.mmindex-menu').html(htmlStr);
    $('.more').nextAll().slideUp();
  }
})
$('.mmindex-menu').on('click','.more',function (e) {
    $('.more').nextAll().slideToggle();
    // e.preventDefault();
})
//折扣
$.ajax({
  url:'http://127.0.0.1:9090/api/getmoneyctrl',
  dateType:'json',
  type:'get',
  success:function (info) {
    var htmlstr = template('mm-discount',info);
    $('.mm-discount .head').after(htmlstr);
  }
})


