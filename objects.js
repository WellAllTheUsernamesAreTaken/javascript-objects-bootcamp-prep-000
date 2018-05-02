var playlist = { 'Bruno Mars': 'Gernade', 'Ed Sheren': 'Perfect'};

function updatePlaylist(play, artistName, songTitle) {
  var Update = Object.assign({}, play, { [artistName]: songTitle});
  return Object.assign({}, Update, playlist)
  //playlist[artistName] = songTitle;
  //return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}