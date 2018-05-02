var playlist = {};

function updatePlaylist(play, artistName, songTitle) {
  var Update = Object.assign({}, play, { ['artistName']: songTitle});
  return function UpdateObject(Update) {
    return Object.assign({}, Update, playlist);
  }
  //return Object.assign({}, Update, playlist)
  //playlist[artistName] = songTitle;
  //return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}