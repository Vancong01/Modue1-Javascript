// //code here
// let value = prompt('What is the "official" name of JavaScript?', '');
// if(value == 'ECMAScript') {
//     alert('Right!');
// } else {
//     alert("You dont't know? ECMAScript!");
// }
// //Dạng if else
// let value = prompt('Type a number', 0);
// if(value >0 ){
//     alert(1);
// }else  if(value <0){
//     alert(-1);
// }else {
//     alert(0)
// }
//Dạng switch... case
let value = parseInt(prompt('Type a number', 0));
var result = (value == 0) ? 0 : (value > 0) ? 1 : -1;
switch (result) {
    case 1:
        alert(1);
        break;
    case -1:
        alert(-1);
        break;
    case 0:
        alert(0);
        break;
    default:
        alert('hihi');
        break;
}
