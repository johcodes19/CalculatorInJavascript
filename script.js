const buttons= document.querySelectorAll('.button')

buttons.forEach(button=>{
    button.innerHTML = button.dataset.button
})