const buttons= document.querySelectorAll('.button')
const display= document.querySelector('.display')

buttons.forEach(button=>{
    button.innerHTML = button.dataset.button
    button.addEventListener('click',()=>{
        const validInputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '%'];
        
        if (validInputs.includes(button.innerHTML)) {
            display.innerHTML += button.dataset.button;

        }else if(button.innerHTML== "="){
            result()
        }else if (button.innerHTML=="C"){
            display.innerHTML=""
        }
        
    })

})

function result(){
    let operations = display.innerHTML;
    try {
        if (operations){
            let result = eval(operations);
        display.innerHTML = result;
        } else{
            alert("Please enter numbers to calculate")
        }
        }
        catch(e) {
            display.innerHTML = "Error";
        }
}
