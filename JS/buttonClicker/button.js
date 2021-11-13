var japLike = document.getElementById('jap-likes')
var japLikeCount= 13
var addButton = document.getElementById('add')
var login = document.getElementById('login')
var programerLike = document.getElementById('programer-likes')
var programerLikeCount = 37



function loginLogout(){
    if(login.innerText == "Login"){
        login.innerText = "Logout"
    } else {
        login.innerText = "Login"
    }
}

function incLike(){
    japLikeCount++
    japLike.innerText  = japLikeCount + " likes"
    alert('ninja was liked')

}

function hide(){
    addButton.classList.add('hide')
}
function proLikeInc(){
    programerLikeCount++
    programerLike.innerText = programerLikeCount + " likes"
    alert('ninja was liked')
}