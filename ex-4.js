//Exercise 4
// Switch Statement
let lightBulbStatus = "00";
let message;
//Start coding here

switch (lightBulbStatus){
case "Off" :
    message = "Light bulb is Off"
break;
case "On":
    message = "Light bulb is On"
break;
default:
    message = "Please choose the correct input (On/Off)"

}
console.log(message)

// if (lightBulbStatus === "On") {
//     message = "Light bulb is on"
// } else if (lightBulbStatus === "Broken"){
//     message = "Light bulb is broken"
// } else if (lightBulbStatus === "Off"){
//     message = "Light bulb is Off"
// } else {
//     message = "Please choose the correct input (On/Off/Broken)"
// }
// console.log(message)