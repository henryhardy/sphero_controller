var sphero = require("sphero"),
    bb8 = sphero("43eca840402246f78be4d91e10cb93d6"); // change BLE address accordingly

bb8.connect(function () {
    var t=setInterval(changeColor,2000);
    bb8.streamAccelerometer();
    bb8.on("accelerometer", function (data) {
        console.log("data:");
        console.log("  xAccel:", data.xAccel);
        console.log("  yAccel:", data.yAccel);
        console.log("  zAccel:", data.zAccel);
    });
});

function changeColor() {
    var red = Math.floor(Math.random() * 256) + 0,  
    blue = Math.floor(Math.random() * 256) + 0, 
    green = Math.floor(Math.random() * 256) + 0  
    bb8.color({ red: red, green: green, blue: blue }, function(err, data) {
        console.log(err || "color changed", red,green,blue);
      });
};