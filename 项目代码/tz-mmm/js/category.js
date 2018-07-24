$(function () {
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getcategorytitle',
    type: 'get',
    dataType: 'json',
    success: function (info) {
      console.log(info);
      var htmlStr = template('mm-cateP', info);
      $('.mm-catetog').html(htmlStr)
    }
  })
  
  $('.mm-catetog').on('click', '.mm-toggle', function () {
    var id = $(this).data('id');
    var that = $(this);
    $.ajax({
      url: 'http://127.0.0.1:9090/api/getcategory',
      type: 'get',
      dataType: 'json',
      data: {titleid: id},
      success: function (info) {
        console.log(info);
        var htmlStr = template('mm-cateUl', info);
        $(that).find('.mm-clearfix').html (htmlStr)
      }
    })
  })
  
  $('.mm-catetog').on('click', '.mm-toggle p', function (){
    $(this).siblings().toggle(500);
    $(this).parent().siblings().find('ul').hide(500);
  })
})
