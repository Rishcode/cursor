var body = document.querySelector("body")
var cursor = document.querySelector("#cursor")

body.addEventListener("mousemove",function(dets){
    cursor.style.left= dets.x+'px'
    cursor.style.top= dets.y+'px'
})
