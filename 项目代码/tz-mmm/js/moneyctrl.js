var total;
var page = 0;
function render(page) {
  $.ajax({
    url:'http://127.0.0.1:9090/api/getmoneyctrl',
    type:'get',
    data:{
      pageid:page || 0,
    },
    success:function (info) {
      console.log(info);
      total  = Math.ceil(info.totalCount/info.pagesize);
      info.page = page;
      info.total = total;
      console.log(info);
      var htmlStr = template('mm-discount',info);
      $('.mm-discount').html(htmlStr)
      var pagenation = template('mm-pagenation',info);
      $('.mm-pagination').html(pagenation);
  
      $("select option").each(function() {
        var val = $(this).val();
        if($("select option[value='" + val + "']").length > 1){
          $("select option[value='" + val + "']:gt(0)").remove();
        
        }
      });
    }
  })
}


$('.mm-pagination').on('click','.mm-pre',function () {
  page--;
  console.log(page);
  if(page<0){
    page=0
    return;
  }
  render(page)
  
})
$('.mm-pagination').on('click','.mm-next',function () {
  page++
  console.log(page);
  
  if(page>=total){
    page=total-1
    return;
  }
  render(page)
})

$(document).on('change','select',function () {
  var option=$("select option:selected");
  var val = option.val();
  page =val-1;
  render(page)
})

render(page);