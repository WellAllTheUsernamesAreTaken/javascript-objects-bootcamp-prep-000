var playlist = { 'Bruno Mars': 'Gernade', 'Ed Sheren': 'Perfect'};

function updatePlaylist(playListToUpdate, artistName, songTitle) {
  return Object.assign({}, playListToUpdate, { [artistName]: songTitle});
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}