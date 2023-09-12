let image = document.querySelector(".slider");
let translate = 0;

setInterval(()=>{
    if(translate >= 0 && translate < 400){
        translate+=110
    }
    else{
        translate = 0
    }
    image.style.transition = "1s";
    image.style.transform = ` translateX(${-translate}%)`
},3000)


function right() {
    if (translate < 400){
        translate+= 110
        image.style.trasition ="1s";
        image.style.transform =` translateX(${-translate}%)`
    }
    console.log("hi")
}
function left() {
    if (translate > 0){
        translate-= 110
        image.style.trasition ="1s";
        image.style.transform =` translateX(${-translate}%)`
    }
    console.log("hi")
}