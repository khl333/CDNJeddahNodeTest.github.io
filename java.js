(function () {
  var video = document.querySelector('#player');

  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource('https://customer-533jls5oc9vh7yi0.cloudflarestream.com/02aded52b7748c8d53925ea523d27db1/manifest/video.m3u8');
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();
    });
  }
  
  plyr.setup(video);
})();