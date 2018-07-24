var id = location.search.slice(1).split("=")[1];
$.ajax({
  url:'http://127.0.0.1:9090/api/getbrand',
  dataType:'json',
  type:'get',
  data:{
    brandtitleid:id
  },
  success:function(info){
    console.log(info);
    var name = info.result[0].brandName.slice(-4)
    $('.rank').text(name+'哪家强，山东技工找蓝翔');
    $('.rank1').text(name+'销售强，遇到新东方厨师你就嫁了吧');
    $('.rank2').text(name+'排行榜，今年又是LPL最有希望的一年');
    var html = template('wh',info)
    $('.white ul').html(html)
  }
  
})

function render(page,id){
  $.ajax({
    url:'http://127.0.0.1:9090/api/getbrandproductlist',
    dataType:'json',
    type:'get',
    data:{
      brandtitleid:id,
      pagesize:page|| 4
    },
    success:function (info) {
      console.log(info);
      var html = template('se',info);
      $('section').html(html)
    }
  })
}
render(6,id);





$('section').on('click','.content',function () {
    var pid = $(this).data('id');
    // console.log(pid);
     var img = $(this).find('img').attr('src');
     $('.comtop>.fl img').attr('src',img)
     var word = $(this).find('h4').text();
      $('.comtop>.fr p').text(word)
    $('.comment').slideDown(200)
  // console.log(word);
  showya(pid)
})


function showya(pid){
  $.ajax({
    url:'http://127.0.0.1:9090/api/getproductcom',
    dataType:'json',
    type:'get',
    data:{
      productid:pid,
    },
    success:function (info) {
      console.log(info);
      var html = template('down',info)
      $('.comdownn').html(html)
    }
  })
}
