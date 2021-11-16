var currentCity = document.getElementById('currentCity')
var burbankBtn = document.getElementById('burbank')
var chicagoBtn = document.getElementById('chicago')
var dallasBtn = document.getElementById('dallas')
var e = document.getElementById("tempF-C");
var value = e.options[e.selectedIndex].value;
var cookies = document.getElementById('cookies')
var cSanJoseHigh = [24, 27, 21, 26]
var cHigh = cSanJoseHigh
var cSanJoseLow = [18, 19, 16, 21]
var cLow  = cSanJoseLow
var cBurbankHigh = [23, 23, 27, 21]
var cBurbankLow = [11, 14, 12, 9]
var cChicagoHigh = [9, 14, 3, 4]
var cChicagoLow = [8, -1, -3, 1]
var cDallasHigh = [27, 16, 17, 18]
var cDallasLow = [17, 7, 2, 6]
var tempCity



function hide(){
    cookies.classList.add('hide')
}
function changeCity(element) {
    if (element.innerText == "Burbank") {
        cHigh = cBurbankHigh
        cLow = cBurbankLow
    } else if (element.innerText == "Dallas") {       
        cHigh = cDallasHigh
        cLow = cDallasLow       
    } else if (element.innerText == "Chicago") {
        cLow = cChicagoLow
        cHigh = cChicagoHigh
    } else if (element.innerText == "San Jose") {
        cHigh = cSanJoseHigh
        cLow = cSanJoseLow  
    }
    alert('You have selected the city of  ' + element.innerText + '.')
    tempCity = currentCity.innerText
    currentCity.innerText = element.innerText
    element.innerText = tempCity
    changeTemp()
}
function changeTemp(element) {
    var highs = document.getElementsByClassName('high')
    var lows = document.getElementsByClassName('low')
    console.log(highs)
    value = e.options[e.selectedIndex].value;
    if (value == "c") {
        for (let i = 0; i < highs.length; i++) {
            highs[i].innerText = cHigh[i] + "°"
            lows[i].innerText = cLow[i] + "°"
        }       
    } else if (value == "f") {
        for (let i = 0; i < highs.length; i++) {
            highs[i].innerText = Math.floor((cHigh[i] * 9 / 5) + 32) + "°"
            lows[i].innerText = Math.floor((cLow[i] * 9 / 5) + 32) + "°"
        }
        // }
    }
}