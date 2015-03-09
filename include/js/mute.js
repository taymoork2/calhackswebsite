window.onload = function() {
	var video = document.getElementById("video");
	var muteButton = document.getElementById("mute");

	video.volume = 0.75; 

	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
			video.muted = true;
			muteButton.innerHTML = "<button><i class='fa fa-volume-off fa-2x'></i></button>";
		}
		else {
			video.muted = false;
			muteButton.innerHTML = "<button><i class='fa fa-volume-up fa-2x'></i></button>";
		}
	});
}