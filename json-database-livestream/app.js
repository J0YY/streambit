const express = require('express');
const app = express();
const db = require('./db.json');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const fs = require('fs');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);
// console.log(ffmpegInstaller.path, ffmpegInstaller.version);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/streams', (req, res) => {
    res.json(db["streams"]);
})


app.get('/screenshot', (req, res) => {
    let streamID = req.query.streamID;
    let origin = "localhost";
    let app = "live";
    let file = './var/snapshot-' + streamID + '.png';
    // var outputStream = fs.createWriteStream(file);

    var process = new ffmpeg('rtmp://' + origin + ':1935/' + app + '/' + streamID)
        .on('end', function(files)
        {

            console.log(files)
            res.set({ "Content-Type": "image/png" })
            res.send("data:image/png;base64," + fs.readFileSync(file))
            // res.sendFile(file, {root: __dirname});
        })
        .on('error', function(err)
        {
            console.log(err)
            res.json({
                status : 'error',
                error : err.message
            });
        })
        // .takeScreenshots({ count: 1, size: '200x200' }, "var/");
        .outputOptions(['-f image2', '-vframes 1', '-vcodec png', '-f rawvideo', '-s 320x240', '-ss 00:00:01'])
        .output(file)
        .run();
})

app.listen(3001, () => {
    console.log("LISTENING ON PORT 3001")
})
