// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { //함수명은 바꾸면 안된다.
  // <div id="player"></div>
  // html에 id = player라고 되어있어도 #player로 명시하면 안된다.
  // youtube 명령이 내부적으로 player라는 id를 가진 요소를 탐색한다.
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8'
    },
    events: {
      onReady: function (event) { // OnReady == 영상이 재생할 준비가 되면
        event.target.mute() // 음소거
      }
    }
  });
}