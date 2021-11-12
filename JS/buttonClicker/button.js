var japLike = document.getElementById('jap-likes')
var japLikeCount= 13
japLike.addEventListener('click', incLike )
var addButton = document.getElementById('add')
addButton.addEventListener('click',  hide)
var login = document.getElementById('login')
login.addEventListener('click', loginLogout)
var programerLike = document.getElementById('programer-likes')
var programerLikeCount = 37
programerLike.addEventListener('click', proLikeInc)


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