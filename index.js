function saturdayFun(fun=`roller-skate`){
    return `This Saturday, I want to ${fun}!`;
}
function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}


const wrapAdjective = function(visual = "*"){
    return function(adjective = "special"){
        return `You are ${visual}${adjective}${visual}!`
;
    }
}