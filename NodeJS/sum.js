//  call this module in other module na function sumNum executes here 

function sumNum(num1,num2) {
    console.log(`The sum is ${num1+num2}`)
}

module.exports = { sumNum }

//      sumNum();   // for directly executing sumNum()