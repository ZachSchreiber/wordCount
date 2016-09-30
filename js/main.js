

function wordCount(string) {

    var theCounted = {};
    var stringToCheck = string;
    var splitUp = string.split(" ");


var freddy = 0;
while (freddy < splitUp.length) {
  if (splitUp[freddy].length  < 2) {
  splitUp.splice(splitUp.indexOf(splitUp[freddy]), splitUp[freddy].length);
  }
  freddy++;
}
splitUp.forEach(function(i) { theCounted[i] = (theCounted[i] || 0) + 1;

});
console.log(theCounted);
  }









wordCount("When forty winters shall shall besiege thy browProving thy a I d his beauty by succession the");
