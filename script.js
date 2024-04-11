let buttons = document.querySelectorAll('button');
let display = document.querySelector('.text-box');
let ResetButton = document.querySelector('.reset-btn');
let DeleteButton = document.querySelector('.item-1');

 buttons.forEach(function(button) {
     button.addEventListener('click', function(){
        let buttonText = button.textContent;
        // if(buttonText === '+'){
        //     display.value += buttonText;
        // } else if (buttonText === '-') {
        //     display.value += buttonText;
        // } else if (buttonText === 'x'){
        //     display.value += '*';
        // } else 
        if (buttonText === '='){        //else
            let result = eval(display.value);
            if(result % 1 !==0){
                display.value = result.toFixed(3);
            } else {
                display.value = result;
            }
            
        } else if (buttonText === 'DEL') {
            let currentValue = display.value;
            let newValue = currentValue.slice(0, -1);
            display.value = newValue;
        } 
        else {
        display.value += button.textContent;
    }
     })   
 })

/* FOR RESET-BUTTON*/
ResetButton.addEventListener('click',function(){
    display.value = '';
});



