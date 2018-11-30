$(document).ready(function(){

	//CAR ANIMATION - draw when mouse touches
$(".project1").mouseenter(function() {
    new Vivus('Capa_1', {
    type: 'oneByOne',
    duration: 750,
    animTimingFunction: Vivus.EASE_OUT},
    function (obj) {
    obj.el.classList.add('finished');
    });
});

//ROBOT ANIMATION - draw when mouse touches
$(".project2").mouseenter(function() {
    new Vivus('Layer_1', {
    type: 'oneByOne',
    duration: 750,
    animTimingFunction: Vivus.EASE_OUT},
    function (obj) {
    obj.el.classList.add('finished');
    });
});

//HEART - draw when mouse touches
$(".project3").mouseenter(function() {
    new Vivus('Layer_2', {
    type: 'oneByOne',
    duration: 750,
    animTimingFunction: Vivus.EASE_OUT},
    function (obj) {
    obj.el.classList.add('finished');
    });
});


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