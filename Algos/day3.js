function findPosArr(arr){
    var countPositives = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            countPositives++
        }
    }
    console.log("There are" + countPositives + "positive values!")
}






findPosArr([3,4,-2,7,16,-8,0])
findPosArr([3,4,5,6,-8,-45,4,12,154,-2,7,16,-8,0])

//your code here!

