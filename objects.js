var playlist = { 'Bruno Mars': 'Gernade', 'Ed Sheren': 'Perfect'};

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist.assign({}, playlist, { [artistName]: songTitle});
}
function removeFromPlaylist(playlist, artistName) {
  
}