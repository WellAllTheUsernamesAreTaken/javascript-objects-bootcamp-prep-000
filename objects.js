var playlist = { 
  'Bruno Mars': 'Gernade',
  'Ed Sheren': 'Perfect'
};

function updatePlaylist(playListToUpdate, artistName, songTitle) {
  playlist[artistName] = Object.assign({}, playListToUpdate, { [artistName]: songTitle}); //playlist[artistName] = songTitle;
  return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}