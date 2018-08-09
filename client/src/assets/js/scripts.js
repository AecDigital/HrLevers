$(document).ready(function(){
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  $('body').on('click', "#menu-toggle" ,function(e) {
     e.preventDefault();
    $("#wrapper").toggleClass("toggled"); 
});
})