var likeCounter = 3
var likes = document.getElementById('likes')
likes.innerText = likeCounter + ' like(s)'
function incLikes(){
    likeCounter++
    likes.innerText = likeCounter + ' like(s)'
}
