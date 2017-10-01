$(document).ready(function()
{

	$("#SEC03").hide();
	
	$("#TFT01").on("click", function()
	{
		$("#SEC02").hide();
		$("#SEC03").show();
	});
	
	$("#BUT06").on("click", function()
	{
		$("#SEC03").hide();
		$("#SEC02").show();
	});

	
	
});