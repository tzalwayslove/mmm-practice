var id = location.search.split('=')[1];
$.ajax({
  url: 'http://127.0.0.1:9090/api/getproduct',
  data: {
    productid: id
  },
  dataType: 'json',
  type: 'get',
  success: function (info) {
    // console.log(info);
    var name = info.result[0]['productName'].split(' ')[0];
    var obj = {
      info:info,
      name:name
    }
    var htmlStr = template('mm-thmenu',obj);
    $('.three-menu-left').html(htmlStr);
    var comment =template('mm-section',info);
    $('section .top').html(comment);
  }
})



//评论
$.ajax({
  url:'http://127.0.0.1:9090/api/getproductcom',
  dataType:'json',
  type:'get',
  data:{
    productid: id
  },
  success:function (info) {
    console.log(info);
    var htmlStr = template('mm-content',info);
    $('.mm-comment').append(htmlStr)
  }
  
})