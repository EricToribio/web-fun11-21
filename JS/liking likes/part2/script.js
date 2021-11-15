var feed1Like = document.getElementById('feed1')
var feed2Like = document.getElementById('feed2')
var feed3Like = document.getElementById('feed3')
var feed1count = 9
var feed2count = 12
var feed3count = 9

function incFeed1(){
    feed1count++
    feed1Like.innerText = feed1count + " like(s)"
}
function incFeed2(){
    feed2count++
    feed2Like.innerText = feed2count + " like(s)"
}
function incFeed3(){
    feed3count++
    feed3Like.innerText = feed3count + " like(s)"
}
