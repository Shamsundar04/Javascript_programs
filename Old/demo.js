var addfriend = document.querySelector(".A-btn");
var istatus = document.querySelector("h2")
addfriend.addEventListener("click",function(){
     istatus.innerHTML="Followed";
})

console.log("Hello world");

var removefri = document.querySelector(".r-btn")
removefri.addEventListener("click",function(){
    istatus.innerHTML="Unfollowed"
})