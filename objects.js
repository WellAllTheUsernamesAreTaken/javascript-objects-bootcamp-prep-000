var playlist = { BrunoMars: "Gernade", EdSheren: "Perfect"}

function updatePlaylist(playlist, artistName, songTitle) {
  var a = Object.assign({}, playlist, {artistName: songTitle});
  return a;
  
}
function removeFromPlaylist() {
  
}