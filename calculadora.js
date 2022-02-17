let x =[]
let empty = true;


function change(){
 document.getElementById("ecra").innerHTML=x.join("");
 if (empty===true){
    document.getElementById("ecra").innerHTML="Type Something...";
 }

 let maxWidth = document.getElementById("ecra").clientWidth
 let width = document.getElementById("ecra").scrollWidth
 let propEcra = document.getElementById("ecra")
 let font = window.getComputedStyle(propEcra).getPropertyValue("font-size")
 if (width>maxWidth){
     let final = (font.slice(0,4) - 7) + "px"
     document.getElementById("ecra").style.fontSize  = final;
 }
 
}

function type(y){
    empty=false;
    let value = document.getElementById(y).innerHTML
    if (y==="teclaEXP"){
        value="^"
    }
    x.push(value)
    change()
}

function wipe(){  
    x.length=0;
    empty=true;
    change()
    document.getElementById("ecra").style.fontSize = "2.1em"
}

function total(){
    for (let i in x){
        if (x[i] === "^"){
            x[i]="**"
        }
    }
    let str = x.join("")
    let y = eval(str);
    x = [y]
    change()
}
