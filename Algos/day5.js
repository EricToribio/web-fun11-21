//reversing array

function reverse(arr){
    var i = 0
    while( i < arr.length/2){
        var temp = arr[arr.length - 1 - i]
        var current = arr[i]
        arr[i]= temp
        arr[arr.length -1 - i] = current
        i++
    }
    console.log(arr)
}
var arr =[2, 4, 6, 8, 20]
reverse(arr)
reverse([1, 2, 3, 4, 5, 6, 7, 8, 9])    