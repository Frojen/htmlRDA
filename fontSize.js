window.onload = setFonts;

window.onresize = setFonts;

function setFonts() {
	fontToDiv("nameRadio");
	fontToDiv("freqPlace");
	fontToDiv("freqText", 0.8);
	fontToDiv("rdsPlace", 0.8);
	fontToDiv("memoryPlace", 0.8);
	fontToDiv("memoryText", 0.8);
}	

function fontToDiv(divID, scale=1) {
	var element=document.getElementById(divID);
	element.style.fontSize=element.offsetHeight*scale+"px";
}