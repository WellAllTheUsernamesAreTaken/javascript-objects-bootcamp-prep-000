var playlist = { BrunoMars: "Gernade", EdSheren: "Perfect"}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {artistName: songTitle});
}
function removeFromPlaylist() {
  
}