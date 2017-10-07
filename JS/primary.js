$(document).ready(function()
{

	$("#SEC03").hide();
	
	$("#TFT01").on("click", function()			/*ACTIVATES ON SCREEN KEYBOARD*/
	{
		$("#SEC02").hide();
		$("#SEC03").show();
		
	});
		
	
	$("#BUT06").on("click", function()			/*HIDES ON SCREEN KEYBOARD*/
	{
		$("#SEC03").hide();
		$("#SEC02").show();
	});
	
	
	
	
	$(".BUT01").on("click", function()
	{
		console.log($(this).val());
	});
	
	$(".BUT02").on("click", function()
	{
		console.log($(this).val());
	});
	
	
});








