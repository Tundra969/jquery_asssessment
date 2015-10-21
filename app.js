$(document).ready(function(){
	var click = 0

	$("#container").on('click', '.generate', function(){
		$("#container").append("<div class='line'></div>");
		var $el = $("#container").children().last();
		$el.append("<button class='delete'>Delete</button>");
		$el.append("<button class='changebutton'>Change</button>");
		click++;
		$("#container").find('numclicks').replaceWith(click);	
		console.log(click);
	});

	$("#container").on('click','.changebutton', function(){
		$(this).parent().toggleClass('selected');   
	});

	$("#container").on('click', '.delete', function(){
		$(this).parent().remove();
	});
$("#container").parent().append("<div id=numclicks>Number of Generate Button Clicks: " + click + "<div>");
	
});		