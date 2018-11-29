new Vivus('Capa_1', {
	type: 'delayed',
	duration: 3000,
	animTimingFunction: Vivus.EASE},
	function (obj) {
  obj.el.classList.add('finished');
});