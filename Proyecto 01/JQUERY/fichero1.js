$('h1').click(function(){
	console.log("Se ha pulsado el titular");
})

$('li').click(function(){
	console.log("Se ha pulsado sobre algun elemento de la lista");
})

$('p').dblclick(function(){
	console.log("Se ha pulsado dos veces sobre el parrafo");
})

$('input').eq(0).keypress(function(){
	$(this).css('color','red');

	console.log(event);

	if (event.which === 100) {
		$(this).css('color','green');
	}
})

$('li').eq(0).click(function(){
	$("#id1").fadeOut(2000);
})

$('li').eq(1).click(function(){
	$("#id2").slideUp(2000);
})