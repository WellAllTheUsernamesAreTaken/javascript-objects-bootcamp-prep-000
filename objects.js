var playlist = { BrunoMars: 'Gernade'}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle});
  
}
function removeFromPlaylist() {
  
}