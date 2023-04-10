let playButton = document.querySelector("#play_button");
//
let audio = document.querySelector("audio");
//
let volume_up_button = document.querySelector(".volume_ups");
//
let artie_name = document.querySelector("#artie_name");
//
let song_title = document.querySelector("#song_title");
//
let skip_next_button = document.querySelector("#skip_next_button");
//
let skip_previous_button = document.querySelector("#skip_previous_button");
//
let postedImage = document.querySelector("img");
//
let repeat_one_button = document.querySelector("#repeat_one_button");
//
let repeat_ones = document.querySelector("#repeat");
//
let loop = ` <span class="material-symbols-outlined" id="repeat">repeat</span>`;
//
let loop1 = `<span class="material-symbols-outlined" id="repeat">repeat_one</span>`;
//
let playIcon = `<span class="material-symbols-outlined"  id="play_button">
play_arrow
</span> `;
//
let pauseIcon = `<span class="material-symbols-outlined"  id="play_button">
pause
</span>`;
//
function repeat_one() {
  if (!audio.loop) {
    audio.loop = true;
    repeat_ones.innerHTML = loop1;
  } else {
    audio.loop = false;
    repeat_ones.innerHTML = loop;
  }
}
//
repeat_one_button.addEventListener("click", repeat_one);
//
function names() {
  if (audio.paused) {
    audio.play();
    playButton.innerHTML = pauseIcon;
  } else {
    audio.pause();
    playButton.innerHTML = playIcon;
  }
}
//
playButton.addEventListener("click", names);

let volume_up = `<span class="material-symbols-outlined" id="volume_ups">
 volume_up
</span>`;
//
let volume_off = `<span class="material-symbols-outlined">
volume_off
</span>`;
//
function volume() {
  if (!audio.muted) {
    audio.muted = true;
    document.querySelector(".volume_ups").innerHTML = volume_off;
  } else {
    audio.muted = false;
    document.querySelector(".volume_ups").innerHTML = volume_up;
  }
}
//
volume_up_button.addEventListener("click", volume);
//
let text2 = [
  {
    name: "Asake",
    song: "Asake - 2-30 (NetNaija.com).mp3",
    title: "2:30",
    posted: "asaka.webp",
  },
  {
    name: "Young Jonn ft(Olamide)",
    song: "Young Jonn - Currency (feat. Olamide) (NetNaija.com).mp3",
    title: "Currency",
    posted: "john.jpeg",
  },
  {
    name: "DAVIDO",
    song: "07 Davido - E PAIN ME (NetNaija.com).mp3",
    title: "E PAIN ME",
    posted: "david.webp",
  },

  {
    name: "Darkoo & Ayra Starr",
    song: "ayra.mp3",
    title: "Disturbing U",
    posted: "ayra.webp",
  },
  {
    name: "Asaka",
    song: "joha.mp3",
    title: "Joha",
    posted: "asakejoha.jpeg",
  },
  {
    name: "Asaka",
    song: "terminator.mp3",
    title: "Joha",
    posted: "terminator.jpeg",
  },
  {
    name: "Wizkid",
    song: "money&love.mp3",
    title: "Money & Love",
    posted: "bigwiz.jpeg",
  },
];
//
let i = 0;

//
function back() {
  if (i <= 0) {
    return false;
  }
  i--;
  audio.setAttribute("src", text2[i].song);
  artie_name.innerText = text2[i].name;
  song_title.innerText = text2[i].title;
  postedImage.setAttribute("src", text2[i].posted);
  audio.play();
  playButton.innerHTML = pauseIcon;
}
//
skip_previous_button.addEventListener("click", back);
//
function next() {
  if (i >= text2.length - 1) {
    return false;
  }
  i++;
  audio.setAttribute("src", text2[i].song);
  artie_name.innerText = text2[i].name;
  song_title.innerText = text2[i].title;
  postedImage.setAttribute("src", text2[i].posted);
  audio.play();
  playButton.innerHTML = pauseIcon;
}

skip_next_button.addEventListener("click", next);
//skip_previous_button.addEventListener("click", () => {});
//
audio.addEventListener(
  "timeupdate",
  function () {
    var duration = document.getElementById("duration");
    var s = parseInt(audio.currentTime % 60);
    var m = parseInt((audio.currentTime / 60) % 60);
    duration.innerHTML = m + ":" + s;
    if (audio.ended) {
      playButton.innerHTML = playIcon;
      next();
    }
  },

  false
);

let toggles = document.querySelector("#favorite");
toggles.addEventListener("click", () => {
  toggles.style.color = "red";
});
toggles.addEventListener("dblclick", () => {
  toggles.style.color = "white";
});
