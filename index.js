function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(assignment = 'go to the office') {
    return `This Monday, I will ${assignment}.`
}
function wrapAdjective(symbol = "*"){
    return function(param = "special") {
       return `You are ${symbol}${param}${symbol}!`
            
    }
    
}
wrapAdjective("||")


