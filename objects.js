var playlist = { 'Bruno Mars': 'Gernade', 'Ed Sheren': 'Perfect'};

function updatePlaylist(playList, artistName, songTitle) {
  return Object.assign({}, playList, { [artistName]: songTitle});
  //playlist[artistName] = songTitle;
  //return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}