$.ajax({
  url:'http://127.0.0.1:9090/api/getbrandtitle',
  dataType:'json',
  type:'get',
  success:function (info) {
    console.log(info)
    var htmlStr = template('brand',info);
    $('section ul').html(htmlStr)
  }
})