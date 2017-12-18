$(document).ready(function(){
	var imgItems=$('.slider li').length; //numero de slider
	//agregando paginacion
	for(i=1; i <= imgItems; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	}
//--------------- -------------------------------//

      $('.slider li').hide(); //ocultando todos los slider
      $('.slider li:first').show(); //mostramos el primer slider
      $('.pagination li:first').css({'color':'#CD6E2E'});//damo estilo al primer item de la paginacion
});