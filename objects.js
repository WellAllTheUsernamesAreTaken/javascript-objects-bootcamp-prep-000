var playlist = { 'Bruno Mars': 'Gernade', 'Ed Sheren': 'Perfect'};

function updatePlaylist(playListToUpdate, artistName, songTitle) {
  playlist = Object.assign({}, playListToUpdate, { [artistName]: songTitle});
  return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}