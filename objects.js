var playlist = { 'Bruno Mars': 'Gernade', 'Ed Sheren': 'Perfect'};

function updatePlaylist(play, artistName, songTitle) {
  var update = {};
  var u = {};
  update = Object.assign({}, play, { ['artistName']: songTitle});
  return function UpdateObject(update) {
    return Object.assign({}, playlist, update);
  };
  //return Object.assign({}, Update, playlist)
  //playlist[artistName] = songTitle;
  //return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}