var playlist = { BrunoMars: 'Gernade'};

function updatePlaylist(playlist, artistName, songTitle) {
  var a = Object.assign({}, playlist, { [artistName]: songTitle});
  return a;
}
function removeFromPlaylist(playlist, artistName) {
  
}