// Objectives
// Get comfortable with loops: for and while.
// Get comfortable with conditionals: if/else.
// Please work on the following challenges and upload your work when done.

// Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.
function printOddsFor(lowNum, highNum){
    for(var i = lowNum; i <= highNum; i++){
        if( i % 2 != 0){
            console.log(i)
        }
    }
}


function printOddsWhile(lowNum, highNum){
    var i = lowNum
    while(i <= highNum){
        if(i % 2 != 0){
            console.log(i)
        }
        i++
    }
}

printOddsFor(1, 20)
printOddsWhile(1, 20)





// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

function mult3DecreasingFor(highNum, lowNum){
    for(var i = highNum; i > lowNum; i--){
        if( i % 3 == 0){
            console.log(i)
        }
    }
}


function mult3DecreasingWhile(highNum, lowNum){
    var i = highNum
    while(i > lowNum){
        if(i % 3 == 0){
            console.log(i)
        }
        i--
    }
}

mult3DecreasingFor(100, 0)
mult3DecreasingWhile(100, 0)




// Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

function sequenceDownFor(startNum, endNum){
    for(var i = startNum; i > endNum; i -= 1.5){
        console.log(i)
        
    }
}
function sequenceDownWhile(startNum, endNum){
    var i = startNum
    while(i > endNum){
        console.log(i)
        i -= 1.5
    }
}
 sequenceDownFor(4, -4)
 sequenceDownWhile(4, -4)


// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

function getSum(lowNum = 0, highNum = 100){
    var sum = lowNum
    var problem = (lowNum + "+")
    for(var i = lowNum + 1; i < highNum; i++){
        sum += i
        problem += (i + "+")
    }
    sum += i
    problem += i
    console.log(problem + " =" + sum)
}
getSum(50, 200)

// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

function mutlVals(lowNum = 1, highNum = 12){
    var multAnswer = lowNum
    var problem = (lowNum + "*")
    for(var i = lowNum + 1; i < highNum; i++){
        multAnswer *= i
        problem += (i + "*")

    }
    multAnswer *= i
    problem += (i + " =")
    console.log(problem, multAnswer)
}
mutlVals()
