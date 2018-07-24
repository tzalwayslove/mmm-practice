  var img;
$.ajax({
  url:'http://127.0.0.1:9090/api/getinlanddiscount',
  type:'get',
  dataType:'json',
  success:function (info) {
    console.log(info);
    var htmlStr = template('dis',info)
    $('section').append(htmlStr)
    
    //懒加载
    $(info.result).each(function (i) {
      img = info.result[i].productImg.split(" ")[1]+">";
      img = img.replace("<","").replace(">","").replace("src=","").replace("\"",'').replace('\"','');
      // console.log(img);
      $('.dis-con img').eq(i).attr('data-original',img);
      console.log($('.dis-con img'))
    })
    $('.dis-con img').addClass('lazy');
    $('.dis-con img').addClass('lazy');

    // $('.dis-con img').attr('src'," ");
    $('.dis-con img').attr('width','500');
    $('.dis-con img').attr('height','600');
    $("img.lazy").lazyload({
      effect : 'fadeIn',
      threshold : 200,
    });
  }
})
  


