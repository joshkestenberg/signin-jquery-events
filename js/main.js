$(function(){

  $(".signin").on('click', function(){
    $(".modal").fadeIn('500');
  });

  // $(".close").on('click', function(){
  //   $(".modal").fadeOut('300');
  // });

  $('.submit').on('click', function(){
    var isAllFilled = true;

    $('.getstarted input').each(function(index, input){
      if ($(input).val() === ""){
        $(input).addClass('error');
        $(input).attr('placeholder', 'Fill in this field!');
        isAllFilled = false;
      }
    });
    if (isAllFilled) {
      $(".modal").fadeOut('300');
    }
    event.stopPropagation();
  });

  $('.getstarted input').on('click', function(){
    $('.getstarted input').each(function(index, input){
      $(input).removeClass('error');
      $(input).attr('placeholder', '');
    });
    event.stopPropagation();
  });

  $('.modal').on('click', function(){
    $(".modal").fadeOut('300');
  });

});
