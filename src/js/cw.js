//toggle the search div by click
function toggle(id) {
	var e = document.getElementById(id);
	if(e.className == "visible") {
		e.setAttribute('class', 'hidden' );
	}
	else {
		e.setAttribute('class', 'visible' );
	}
}

//show only one answer by click and hide the others
function toggleAnswer(id) {
	var e = document.getElementById(id);
	var answers = document.getElementsByClassName("answer");
	for(var i=0; i<answers.length; i++) {
		if (answers[i] == e) {
			if (e.className == "answer visible") {
				e.className = e.className.replace( /(?:^|\s)visible(?!\S)/g , ' hidden' );
			}
			else {
				e.className = e.className.replace( /(?:^|\s)hidden(?!\S)/g , ' visible' );
			}
		}
		else {
			answers[i].className = answers[i].className.replace( /(?:^|\s)visible(?!\S)/g , ' hidden' );
		}
	}
}

//show and hide infoBox by onMouseOver and onMouseOut
function toggleIn(id) {
	var e = document.getElementById(id);
	e.className = e.className.replace( /(?:^|\s)hidden(?!\S)/g , 'visible' );
}
function toggleOut(id) {
	var e = document.getElementById(id);
	e.className = e.className.replace( /(?:^|\s)visible(?!\S)/g , 'hidden' );
}
// urspr. aus solsys.js; unklar, ob das Script so auch fŸr andere Seiten genutzt werden kann
//Tooltip = null;
//document.onmousemove = updateTooltip;
//function updateTooltip(e) {
//  if (Tooltip != null && Tooltip.style.display == 'block') {
//    x = (e.pageX ? e.pageX : window.event.x) + Tooltip.offsetParent.scrollLeft - Tooltip.offsetParent.offsetLeft;
//    y = (e.pageY ? e.pageY : window.event.y) + Tooltip.offsetParent.scrollTop - Tooltip.offsetParent.offsetTop;
//    Tooltip.style.left = (x + 20) + "px";
//    Tooltip.style.top   = (y + 20) + "px";
//  }
//}
//function showTooltip(el) {
//  el.parentElement.nextSibling.style.display = "block";
//}
//function hideTooltip(el) {
//  el.parentElement.nextSibling.style.display = "none";
//}