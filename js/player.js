
var audioPlayer = document.getElementById('audioplayer');
var loaded = false;

var playbtn = document.getElementById('playbtn');
var pausebtn = document.getElementById('pausebtn');

pausebtn.addEventListener('click',(e)=>{
	e.preventDefault();

    playbtn.style.display = "inline";
	pausebtn.style.display = "none";
	audioPlayer.pause();
	return false;
});


playbtn.addEventListener('click',(e)=>{
	e.preventDefault();

	playbtn.style.display = "none";
	pausebtn.style.display = "inline";
	audioPlayer.play();
	return false;
});

const playSong = (file) => {

		if(loaded == false){
			audioPlayer.innerHTML = `<source src="`+file+`" type="audio/mp3" />`;
			loaded = true;
		}

		audioPlayer.load();

        playbtn.style.display = "none";
		pausebtn.style.display = "inline";

}

document.querySelectorAll('.main_col').forEach(item =>{

	item.addEventListener('click',event=>{
			let image = item.getAttribute('data-image');
			let artist = item.getAttribute('data-artist');
			let song = item.getAttribute('data-song');
			let file = item.getAttribute('data-file');


			let playerArtistComponent = document.getElementsByClassName('player_artist');

			playerArtistComponent[0].innerHTML = `
			<img src="`+image+`" />
			<h3>`+song+`<br/><span>`+artist+`</span></h3>

			`;

			playSong(file);
		})

});

audioPlayer.oncanplaythrough = function() {
    audioPlayer.play();
};

audioPlayer.addEventListener("timeupdate", updateProgress);

function updateProgress(e){
    var currentTime = audioPlayer.currentTime;
    var duration = audioPlayer.duration;
	var progressPercent = (currentTime/duration) * 100;
	progress.style.width = `${progressPercent}%`;
};
