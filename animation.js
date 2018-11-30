$(document).ready(function(){
	// new Vivus('Capa_1', {
	// 	type: 'delayed',
	// 	duration: 3000,
	// 	animTimingFunction: Vivus.EASE},
	// 	function (obj) {
	//   obj.el.classList.add('finished');
	// });
console.log('ready!');

// function showInfo(){
// 	// var block = $('#hiddenInfo');
// 	if ($('hiddenInfo').style.display === "none") {
// 		$('hiddenInfo').style.display = "block";
// 	} else {
// 		$('hiddenInfo').style.display = "none";
// 	}
// }
// $('#infoBox').click(showInfo);
$('#goalTitle').click(function(){
	$("#goalInfo").toggle(400, "swing");

	console.log("hidden!");
});

$('#methodsTitle').click(function(){
	$("#methodsInfo").toggle(400);

	console.log("hidden!");
});

$('#resultsTitle').click(function(){
	$("#resultsInfo").toggle(400);

	console.log("hidden!");
});


});