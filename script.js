let input = document.getElementById('input')
let button = document.getElementById('button')
let displayText = document.getElementById('displayText')
let randomNumber = Math.ceil(Math.random()*100)

button.onclick = function(){
    if (parseInt(input.value)===randomNumber){
        displayText.textContent = "Congratulations! You got it right."
        displayText.style.backgroundColor= "green"
    }
    else if (parseInt(input.value)<randomNumber){
        displayText.textContent = "Too Low! Try Again."
        displayText.style.backgroundColor= "#1e217c"
    }
    else if (parseInt(input.value)>randomNumber){
        displayText.textContent = "Too High! Try Again."
        displayText.style.backgroundColor= "#1e217c"
    }
    else{
        displayText.textContent = "Please provide a valid input."
        displayText.style.backgroundColor= "#1e217c"
    }
}
