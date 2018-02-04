var client = new WebTorrent()

// Sintel, a free, Creative Commons movie
var torrentId = 'https://cors-anywhere.herokuapp.com/https://mikanani.me/Download/20180204/82d7b2b23224569869b917927e9cdeb472c7d876.torrent'
var Torrent;
var filename;
client.add(torrentId, function(torrent) {
  // Torrents can contain many files. Let's use the .mp4 file
  var file = torrent.files.find(function(file) {
    return file.name.endsWith('.mp4')
  })

  // Display the file by adding it to the DOM.
  // Supports video, audio, image files, and more!
  // file.appendTo('div#player')
  // file.getBlobURL(function(err, url) {
  //   if (err) throw err
  //   // var a = document.createElement('a')
  //   // a.download = file.name
  //   // a.href = url
  //   // a.textContent = 'Download ' + file.name
  //   // document.getElementById('player').appendChild(a)
  //   console.log(url);
  // })
  // Torrent = torrent;
  // filename = file;
  filename.getBuffer(function(err, buffer) {
    if (err) throw err
    console.log(buffer) // <Buffer 00 98 00 01 ...>
  })
})
