let countEl = document.getElementById("count")
let total = document.getElementById("totalSum")
let resultMin = document.getElementById("resultMin")
let resultMax = document.getElementById("resultMax")
let cCpa = document.getElementById("cCpa")

let video = document.querySelector('video')
let close = document.querySelector('#close')

close.onclick = () => {
    video.pause()
}

let totalSum = totalSum2 = count = creditSum = 0

const calculate = () => {

    let credit = document.getElementById("credit").value
    let grade = document.getElementById("grade").value

    let min = max = 0

    if(grade == 1 || grade == 2){
        min = 4
    }else if(grade == 3){
        min = 3.7
    }else if(grade == 4){
        min = 3.3
    }else if(grade == 5){
        min = 3.00
    }else if(grade == 6){
        min = 2.7
    }else if(grade == 7){
        min = 2.3
    }else if(grade == 8){
        min = 2.00
    }else if(grade == 9){
        min = 1.7
    }else if(grade == 10){
        min = 1.3
    }else if(grade == 11){
        min = 1.00
    }else if(grade == 12){
        min = 0.00
    }

    if(grade == 1 || grade == 2){
        max = 4
    }else if(grade == 3){
        max = 3.94
    }else if(grade == 4){
        max = 3.62
    }else if(grade == 5){
        max = 3.24
    }else if(grade == 6){
        max = 2.94
    }else if(grade == 7){
        max = 2.62
    }else if(grade == 8){
        max = 2.24
    }else if(grade == 9){
        max = 1.94
    }else if(grade == 10){
        max = 1.62
    }else if(grade == 11){
        max = 1.24
    }else if(grade == 12){
        max = 0.00
    }

    creditSum += Number(credit)
    totalSum += (credit*min)
    totalSum2 += (credit*max)
    count += 1

    countEl.textContent = count
    total.textContent = parseFloat(totalSum).toFixed(2)
}

const resultOutput = () => {

    let cpa = document.getElementById("cpa").value
    let cCredit = document.getElementById("cCredit").value

    cCpa.textContent = parseFloat(((cpa*cCredit) + totalSum) / (parseFloat(cCredit) + parseFloat(creditSum))).toFixed(2) + " <= CPA <= " + parseFloat(((cpa*cCredit) + totalSum2) / (parseFloat(cCredit) + parseFloat(creditSum))).toFixed(2)
    result.textContent = parseFloat(totalSum/creditSum).toFixed(2) + " <=  Pointer <= " + parseFloat(totalSum2/creditSum).toFixed(2)
}