var id = location.search.slice(1).split('=')[1];
$.ajax({
  url:'http://127.0.0.1:9090/api/getdiscountproduct',
  data:{
    productid:id
  },
  datatype:'json',
  type:'get',
  success:function (info) {
    console.log(info);
    var htmlStr = template('mm-article',info);
    $('.itc').html(htmlStr)
  }
})