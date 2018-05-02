var playlist = {};

function updatePlaylist(play, artistName, songTitle) {
  var update = {};
  update = Object.assign({}, play, { [artistName]: songTitle});
  return function UpdateObject(update) {
    return Object.assign({}, update, playlist);
  };
  //return Object.assign({}, Update, playlist)
  //playlist[artistName] = songTitle;
  //return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}