let shufflelist = document.querySelectorAll(".portfolio .container .shuffle li");

let box = document.querySelectorAll(".portfolio .img-container .box")


shufflelist.forEach(function(e){
e.onclick=function(){
shufflelist.forEach(function(a){
    a.classList.remove("active");
})
e.classList.add("active")



box.forEach(function(v){

v.style.display= "block";
})

box.forEach(function(b) {
if(e.textContent == "All"){
    box.forEach((y) => y.style.display="block")
} else   
if(!b.classList.contains(e.textContent)){
    b.style.display= "none";

} 


} )

}



})

//anoter solution
// let switchlis = document.querySelectorAll(".switcher li")
// let imgs =Array.from(document.images);


// switchlis.forEach((li) =>{
// li.addEventListener("click",removeActive);
// li.addEventListener("click",manageImgs);
// });

// //Remvove Active Class From All Lis And Add To Current
// function removeActive(){
// switchlis.forEach((li) => {
// li.classList.remove("active");
// this.classList.add("active");
// });
// }

// //Manage Imgs
// function manageImgs(){
// imgs.forEach((imgs) =>{
// img.style.display="none";
 
// });
// document.querySelectorAll(this.dataset.cat).forEach((el) => {

//     el.style.display="block";
// });

// }