$.ajax({
  url:'http://127.0.0.1:9090/api/getsitenav',
  type:'get',
  dataType:'json',
  success:function(info){
    var htmlStr = template('sitnav',info)
    $('section').html(htmlStr)
  }
})