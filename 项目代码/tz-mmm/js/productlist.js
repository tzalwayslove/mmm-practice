$(function () {
  var page =1;
  var id = location.search.split('=')[1];
  var total;
  console.log(id);
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getcategorybyid',
    data: {
      categoryid: id
    },
    dataType: 'json',
    type: 'get',
    success: function (info) {
      // console.log(info);
      var obj = {
        o: info,
      }
      var htmlStr = template('mm-thmenu', obj);
      $('.three-menu-left').html(htmlStr)
    }
  })
  render(page);
  function render(page) {
    $.ajax({
      url: 'http://127.0.0.1:9090/api/getproductlist',
      data: {
        categoryid: id,
        pageid: page || 1,
      },
      type: 'get',
      dateType: 'json',
      success: function (info) {
        console.log(info);
        total  = Math.ceil(info.totalCount/info.pagesize);
        info.total = total;
        info.page = page;
        var htmlStr = template('mm-list',info);
        var pagenation = template('mm-pagenation',info);
        $('.mm-prolist ul').html(htmlStr);
        $('.mm-pagination').html(pagenation);
  
        $("select option").each(function() {
          text = $(this).text();
          if($("select option:contains("+text+")").length > 1){
            $("select option:contains("+text+"):gt(0)").remove();
          }
          
        });
        
      },
      
    })
  }
  
  
  $('.mm-pagination').on('click','.mm-pre',function () {
    page--;
    console.log(page);
    if(page<1){
      page=1
      return;
    }
    render(page)

  })
  $('.mm-pagination').on('click','.mm-next',function () {
    page++
    console.log(page);
    
    if(page>total){
      page=total
      return;
    }
    render(page)
  })
  
$(document).on('change','select',function () {
  var option=$("select option:selected");
  var val = option.val();
  render(val)
})
  
})