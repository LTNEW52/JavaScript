const display = document.getElementById("display");
let value = "";

function todisplay (element) {
    display.value += element;
    value = display.value;
    if (value.length > 9) {
        display.value = "Invalid";
    }
}

function calculate () {
        if (value.includes('+')) {
            newvalue = Number(value.slice(0 , value.indexOf('+'))) + Number(value.slice(value.indexOf('+')+1));
            display.value = newvalue;
        } else if (value.includes('-')) {
            newvalue = Number(value.slice(0 , value.indexOf('-'))) - Number(value.slice(value.indexOf('-')+1));
            display.value = newvalue; 
        } else if (value.includes('*')) {
            newvalue = Number(value.slice(0 , value.indexOf('*'))) * Number(value.slice(value.indexOf('*')+1));
            display.value = newvalue;
        } else if (value.includes('/')) {
            newvalue = Number(value.slice(0 , value.indexOf('/'))) / Number(value.slice(value.indexOf('/')+1));
            display.value = newvalue.toFixed(2);
        }
}

function clearDisplay () {
    display.value = ``;
}