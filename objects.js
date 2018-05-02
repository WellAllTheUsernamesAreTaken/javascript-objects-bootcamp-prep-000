var playlist = { BrunoMars: 'Gernade', EdSheren: 'Perfect'}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle});
  
}
function removeFromPlaylist() {
  
}