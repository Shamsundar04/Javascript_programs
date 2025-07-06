var a = document.querySelector("#sun");
var b = document.querySelector("button");
var flag = 0;
b.addEventListener("click", function () {
  if (flag == 0) {
    a.style.backgroundColor = "yellow";
    console.log("click");
    flag = 1;
  } else {
    a.style.backgroundColor = "grey";
    console.log("clicked");
    flag = 0;
  }
});


let m=document.getElementById('name')
m.innerHTML

let n=document.getElementsByClassName("class")
n=innerHTML
