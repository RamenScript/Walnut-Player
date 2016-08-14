//if your reading this, thank you for taking time to read my code no matter the reason :)
//I decided to make v2.0 with jquery and it was much faster
//getting infomation to change src and status
var play = 
  document.getElementById('play') ;
var video =  
  document.getElementById('vid') ;
var progress = 
  document.getElementById('progress') ;
 progress.value = 0;
 progress.min = 0;
//making the function for the video and button toggle play didnt know how to get around not wanting progress included
$('#play').click(
	function () {
		if(video.paused) {
			video.play();
			play.src = 'pause.png';
		} 
		else {
			video.pause();
			play.src = 'play.png';
		}
	});
$('#vid').click(
	function () {
		if(video.paused) {
			video.play();
			play.src = 'pause.png';
		} 
		else {
			video.pause();
			play.src = 'play.png';
		}
	});
//turns the play/pause into a restart button ps. tell me if you can fond a way around this
function end() {
	play.src = 'restart.png';
	$('#play').fadeIn(0);
	$('#progress').fadeIn(0);
};
//makes the controlls vanish when mouse is off
$( '.content' ).hover(
	function() {
		$('#play').fadeIn(0);
		$('#progress').fadeIn(0);
	},
	function() {
		if(vid.paused === false) {
		$('#progress').fadeOut(0);
		$('#play').fadeOut(0)};
	});
//time bar constructed with progress function
$(document).ready(
function() {
progress.setAttribute('max', video.duration)
});
video.addEventListener('timeupdate', function() {
	progress.value = video.currentTime;
})
$('#progress').click(
function(e) {
	var calc = Math.round((e.pageX - 65)/325 * video.duration);
	video.currentTime = calc;
}
)
		
