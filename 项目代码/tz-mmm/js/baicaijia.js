$(function () {
  $.ajax({
    url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
    type:'get',
    dataType:'json',
    success:function (info) {
      console.log(info);
      var htmlStr = template('mm-nav',info);
      $('.wrapper ul').html(htmlStr);
      
      var length = $('ul')[0].children.length;
      var width = $('ul >li').width();
      $('.wrapper ul').css('width',length*width+50)
      var myScroll = new IScroll('.wrapper', {
        mouseWheel: true,
        scrollbars: false,
        useTransition:true,
        HWCompositing:true,
        scrollX:true,
        // click:true
      });
      $('.wrapper ul>li').eq(0).addClass('current');
      
      $('.wrapper li').each(function(v,i){
        
        $(i).on('click',function(){
          $(this).addClass('current').siblings().removeClass('current');
          var id = $(this).data().id;
          
          render(id)
        })
      })
    }
  })

  function render(id) {
      $.ajax({
        url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
        type:'get',
        dataType:'json',
        data:{
          titleid:id||0,
        },
        success:function (info) {
          console.log(info);
          var htmlStr = template('mm-content',info);
          $('section').html(htmlStr)
        }
      })
  }
  render(0)

})
