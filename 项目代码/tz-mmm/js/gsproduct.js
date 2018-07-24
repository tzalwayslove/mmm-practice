// var up = '&#xf016f';
// var down = '&#xf0170';
var id1;
var id2;
$.ajax({
  url:'http://127.0.0.1:9090/api/getgsshop',
  dataType:'json',
  type:'get',
  success:function (info) {
    var htmlStr = template('gs',info);
    $('.shopdown>ul').html(htmlStr);
    $('.shop').click(function () {
      $('.shopdown').toggle(500);
      $(this).find('i').eq(0).toggle();
      $(this).find('i').eq(1).toggle();
      // $(this).find('i').eq(0).text('&#xf0170');
     if($('.area').css('display')== 'block'){
       $('.area').css('display','none');
       $('.add').find('i').eq(1).css('display','none');
       $('.add').find('i').eq(0).css('display','inline-block')
     }
    });
    
    $('.shopdown').on('click','li',function () {
      id1 = $(this).data('id');
      $(this).addClass('now').siblings().removeClass('now');
      $('.shopdown').toggle(500);
      $('.shop').find('i').eq(1).toggle();
      $('.shop').find('i').eq(0).toggle();
      render(id1,id2)
    })
  }
})


$.ajax({
  url:'http://127.0.0.1:9090/api/getgsshoparea',
  dataType:'json',
  type:'get',
  success:function (info) {
    var htmlStr = template('hb',info);
    $('.area>ul').html(htmlStr);
    $('.add').click(function () {
      $('.area').toggle(500);
      $(this).find('i').eq(0).css('display','none');
      $(this).find('i').eq(1).css('display','inline-block')
      if($('.shopdown').css('display')== 'block'){
        $('.shopdown').css('display','none');
        $('.shop').find('i').eq(1).css('display','none');
        $('.shop').find('i').eq(0).css('display','inline-block')
      }
    });
    
    $('.area').on('click','li',function () {
      id2 = $(this).data('id');
      $(this).addClass('now').siblings().removeClass('now');
      $('.area').toggle(500);
      $('.add').find('i').eq(1).css('display','none');
      $('.add').find('i').eq(0).css('display','inline-block')
      render(id1,id2)
    })
    

    

    
    
  }
})


function render(id1,id2) {
  $.ajax({
    url:'http://127.0.0.1:9090/api/getgsproduct',
    dataType:'json',
    type:'get',
    data:{
      shopid:id1 || 0,
      areaid :id2 || 0
    },
    success:function(info){
      console.log(info);
      var htmlStr = template('co',info);
      $('section').html(htmlStr)
    }
  })
}
render();