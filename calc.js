// display

function display(num){
    // Id.value = to get value
    output.value += num;  
}

// clear CL

function clearAll(){
    output.value = ''
}


// Equals
function evaluateExp(){
    // exp = output.value - exp=7+7
    // result = eval(exp) result=14
    output.value = eval(output.value)
}

// remove last item
function removeLast(){
    // currentExp is a variable
    currentExp=output.value
    output.value = currentExp.slice(0,-1)
}