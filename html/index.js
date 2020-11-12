var total = 0
var operator = "+"

function getNum(n){
    if (operator === '+'){
        total += n
    } else if (operator === '-'){
        total -= n
    } else if (operator === '/'){
        total = total/n
    } else if (operator === 'x'){
        total *= n
    }
    console.log('total', total)
    const el = document.getElementsByClassName('display')[0]
    el.innerHTML += n.toString()
}

function getOperator(op){
    operator = op
    const el = document.getElementsByClassName('display')[0]
    el.innerHTML += op.toString()
}

function getResult(){
    const el = document.getElementsByClassName('display')[0]
    el.innerHTML = total
}

function refresh(){
    total = 0
    const el = document.getElementsByClassName('display')[0]
    el.innerHTML = ''
}