var fs = require('fs');
var path = require('path');
var filepath = path.resolve(__dirname, 'tracie.txt');
var jsfilepath = path.resolve(__dirname, 'qs_array_10k.js');



var numArray = [];
var bufferData = ['module.exports = ['];
var i = 0;

console.time('reading_file')
fs.createReadStream(filepath)
  .on('data', function(chunk) {
    buffArray = chunk.toString().split('\n');
    bufferData.push(buffArray.join(','));
    numArray = numArray.concat(buffArray);
    i++;
  })
  .on('end', function() {
    console.log("NODE array length", numArray.length);
    console.timeEnd('reading_file');
    console.log('numArray', numArray[numArray.length - 1]);
    bufferData.push([']']);

    var bigBuffer = new Buffer(bufferData.join(''))
    console.log('Buffer', bigBuffer.length);
    var jsFileDescriptor = fs.openSync(jsfilepath, 'w')

    fs.write(jsFileDescriptor, bigBuffer, 0, bigBuffer.length, function(err) {
      if (err) {
        console.log('ERR', err);
        fs.closeSync(jsFileDescriptor);
      }
      console.log("buffer Written", arguments);
      fs.closeSync(jsFileDescriptor);
    })
  });
