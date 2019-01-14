//checking todos by clicking with css class called completed
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
}); //click li kısmı. clickin bütün ul içindeki li lerde geçerli olmasını sağlıyor.

//clicking x to delete todo
$('ul').on('click', 'span', function(event) { //click span, ul içindeki bütün spanların geçerli olmasını sağlıyor.
  $(this).parent().fadeOut(500, function() { //parent() burada spanin bağlı olduğu li'yi seçiyor
    $(this).remove(); //buradaki this ikinci fonksiyon içinde olduğu için li'ye refer ediyor.
  });
  event.stopPropagation(); //bu kısım sadece spanin çalışmasını sağlıyor.
});

//adding new todo with pressing enter
$('input[type="text"]').keypress(function(event) {
  if(event.which === 13) {
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val('');
    //create a new li and add to ul.
    $('ul').append('<li><span><i class="fas fa-trash"></i></span> ' + todoText + '</li>'); //append ile yeni bir html elementi ataması yapabiliriz.
  }
});

$('.fa-plus').on('click', function() {
  $('input[type="text"]').fadeToggle();
});
