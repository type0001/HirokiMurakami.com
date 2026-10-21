/**
  Now playing, from Last.fm.
  Shows "Now playing [song] by [artist]" in the top left corner of the page.
  If nothing is playing right now, it shows the last song instead ("Last played ...").
  Originally based on a script by Prashant Shrestha (https://prashant.me), rewritten without jQuery.
*/
(function () {
  var lastfm = {
    user: "hnmurakami",
    apiKey: "964bb1b582830ab51af24a1193218ba7"
  };
  var url = "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&format=json&limit=1" +
            "&user=" + encodeURIComponent(lastfm.user) + "&api_key=" + lastfm.apiKey;

  function update() {
    fetch(url)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var track = data && data.recenttracks && data.recenttracks.track && data.recenttracks.track[0];
        var box = document.getElementById("np");
        if (!track || !box) return;
        var live = track["@attr"] && track["@attr"].nowplaying === "true";
        document.getElementById("np-state").textContent = live ? "Now playing" : "Last played";
        document.getElementById("np-track").textContent = track.name;
        document.getElementById("np-artist").textContent = track.artist["#text"];
        box.href = track.url;
        box.title = track.name + " by " + track.artist["#text"];
        box.hidden = false;
      })
      .catch(function () { /* leave the last known song on screen */ });
  }

  update();
  setInterval(update, 30 * 1000);
})();
