//b1

let button = document.createElement("button");
button.innerHTML = "Change Color";
button.id = "button";
document.body.appendChild(button);

function change() {
    if(button.innerHTML === 'Change Color') {
       button.innerHTML = 'Change Blue'
       document.body.style.background = '#3498db '
    }else if(button.innerHTML === 'Change Blue') {
        button.innerHTML = 'Change Color'
       document.body.style.background = '#ecf0f1' 
    }
    return false
};

button.onclick = change;


//b2
let click = 0;
function myFunction() {
  click +=1;
  document.getElementById("btn").innerHTML = click;

 };