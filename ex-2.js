//Exercise 2
let lightBulbStatus = "00";
let message;

// Start coding here.
if (lightBulbStatus === "On") {
    message = "Light bulb is on"
} else if (lightBulbStatus === "Broken"){
    message = "Light bulb is broken"
} else if (lightBulbStatus === "Off"){
    message = "Light bulb is Off"
} else {
    message = "Please choose the correct input (On/Off/Broken)"
}
console.log(message)