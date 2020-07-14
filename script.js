var navMenuAnchorTags=document.querySelectorAll('nav a');


for(var i=0;i<navMenuAnchorTags.length;i++){
	navMenuAnchorTags[i].addEventListener('click',function(event){
		event.preventDefault();
		var targetSectionID=this.textContent.trim().toLowerCase();
		if(targetSectionID==="work and project"){
			targetSectionID="experience";
		}
		var targetSection=document.getElementById(targetSectionID);
		var interval=setInterval(function(){
			var targetSectionCoordinates=targetSection.getBoundingClientRect();
			if(targetSectionCoordinates.top<=154){
				clearInterval(interval);
				return ;
			}
			window.scrollBy(0,50);
		},10);
	});
}



var progressBars=document.querySelectorAll('.skill-progress>div');
var skillsConatiner=document.getElementById('skills');
window.addEventListener('scroll',checkScroll);

var animationDone=false;

function initialiseBars(){
	for(let hello of progressBars){
		hello.style.width=0+'%';
	}
}
initialiseBars();
function fillBars(){
	for(let bar of progressBars){
		let targetWidth=bar.getAttribute('data-bar-width');
		console.log("1");
		let currentWidth=0;
		let interval=setInterval(function(){
			if(currentWidth>=targetWidth){
				clearInterval(interval);
				return ;
			}
			currentWidth++;
			bar.style.width=currentWidth + '%';
		}, 20);
	}
}


function checkScroll(){
	var coordinates=skillsConatiner.getBoundingClientRect();
	if(!animationDone&&coordinates.top<window.innerHeight){
		animationDone=true;
		fillBars();
		console.log('Skills Section Visible');
	}
}