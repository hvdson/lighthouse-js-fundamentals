var raining = false;
var cold = false;

var temp = 12;

if (temp < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temp < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");



if (temp < -40 || temp > 40) {
  console.log("Don't go out it's not lit!!");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}